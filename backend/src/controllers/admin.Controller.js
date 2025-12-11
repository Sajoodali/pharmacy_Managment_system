import User from "../models/user.model.js";

// 1. CREATE STAFF (Owner & Area Manager ke liye)
export const createStaff = async (req, res) => {
  try {
    const { fullName, email, password, role, branchId } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User/Email already exists" });
    }

    // New User Object
    const newUser = new User({
      fullName,
      email,
      password,
      role,       // e.g., 'branch_admin'
      branchId: branchId || null // Agar branch assign karni hai
    });

    await newUser.save();

    res.status(201).json({
      success: true,
      message: "Staff member created successfully",
      data: {
        id: newUser._id,
        fullName: newUser.fullName,
        role: newUser.role,
        branchId: newUser.branchId
      }
    });

  } catch (error) {
    console.log("Error in createStaff controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// 2. GET ALL STAFF (Reporting ke liye)
export const getAllStaff = async (req, res) => {
  try {
    // Sirf wo users lao jo 'super_owner' nahi hain (Owner khud ko list me kyu dekhe?)
    const staff = await User.find({ role: { $ne: "super_owner" } }).select("-password");
    
    res.status(200).json(staff);
  } catch (error) {
    res.status(500).json({ message: "Error fetching staff" });
  }
};

// 3. DELETE STAFF (Fire employee)
export const deleteStaff = async (req, res) => {
  try {
    const { id } = req.params; // URL se ID milegi (/delete/:id)

    await User.findByIdAndDelete(id);

    res.status(200).json({ message: "Staff member deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting staff" });
  }
};

export const createBranch = async (req, res) => {
  try {
    const { name, location } = req.body;

    // Check if branch already exists
    const existingBranch = await Branch.findOne({ name });
    if (existingBranch) {
      return res.status(400).json({ message: "Branch already exists" });
    }

    // New Branch Object
    const newBranch = new Branch({
      name,
      location
    });

    await newBranch.save();

    res.status(201).json({
      success: true,
      message: "Branch created successfully",
      data: {
        id: newBranch._id,
        name: newBranch.name,
        location: newBranch.location
      }
    });

  } catch (error) {
    console.log("Error in createBranch controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};