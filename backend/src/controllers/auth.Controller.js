import User from "../models/user.model.js";
import { generateToken } from "../config/jwt.js";

// --- LOGIN USER ---
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    generateToken(user._id, res);

    res.status(200).json({
      success: true,
      message: "Logged in successfully",
      user: {
        _id: user._id,
        fullName: user.fullName,
        email: user.email,
        role: user.role,
        branchId: user.branchId,
        profilePic: user.profilePic,
      },
    });

  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// --- LOGOUT USER ---
export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
// --- CHECK AUTH ---
export const checkAuth = (req, res) => {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    console.log("Error in checkAuth controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// --- TEMPORARY: SIRF PEHLA OWNER BANANE KE LIYE ---
export const createInitialOwner = async (req, res) => {
  try {
    // 1. Check kro kahin pehle se Owner to nahi?
    const existingOwner = await User.findOne({ role: "super_owner" });
    
    if (existingOwner) {
      return res.status(400).json({ message: "Super Owner already exists! Please login." });
    }

    // 2. Naya Owner Create kro (Req.body se data lekar)
    const newOwner = new User({
      fullName: req.body.fullName,
      email: req.body.email,
      password: req.body.password,
      role: "super_owner", // Hardcode kar diya taaki galti se koi aur role na ban jaye
      branchId: null       // Owner kisi branch ka nahi hota
    });

    await newOwner.save();

    res.status(201).json({
      success: true,
      message: "First Super Owner Created! Now go and Login.",
      user: newOwner
    });

  } catch (error) {
    console.log("Error in seed owner", error.message);
    res.status(500).json({ message: error.message });
  }
};

// ... purane imports aur functions ...

// --- UPDATE PASSWORD ---
export const updatePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    // 1. Validation: Dono fields zaroori hain
    if (!currentPassword || !newPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // 2. Validation: Password length check (Optional but good)
    if (newPassword.length < 6) {
      return res.status(400).json({ message: "Password must be at least 6 characters" });
    }

    // 3. User ko wapis fetch kro Password field ke sath
    // (Kyunki req.user me password nahi hota, aur model me select: false hai)
    const user = await User.findById(req.user._id).select("+password");

    // 4. Check kro purana password sahi hai ya nahi
    const isMatch = await user.comparePassword(currentPassword);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect current password" });
    }

    // 5. Naya password set kro
    user.password = newPassword;

    // 6. Save kro (Model ka pre-save hook isay automatic encrypt kr dega)
    await user.save();

    res.status(200).json({ message: "Password updated successfully" });

  } catch (error) {
    console.log("Error in updatePassword", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};