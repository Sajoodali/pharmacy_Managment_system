import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    // --- HIERARCHY ROLES ---
    role: {
      type: String,
      enum: ["super_owner", "area_manager", "branch_admin", "pharmacist"],
      default: "pharmacist",
      required: true,
    },

    // --- BRANCH LINKING ---
    branchId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Branch",
      default: null,
    },

    profilePic: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

// --- PASSWORD HASHING MIDDLEWARE ---
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// --- HELPER METHOD: COMPARE PASSWORD ---
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
