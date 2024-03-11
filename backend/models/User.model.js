const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required."],
    },
    name: {
      type: String,
      required: [true, "Name is required."],
      unique: true,
    },
    expLevel: {
      type: String,
      required: [true],
      enum: ["beginner", "intermediate", "advanced", "master"]
    },   
    type: {
      type: String,
      required: [true],
      enum: ["organization", "athlete", "admin"]
    },
    photo: {
      type: String,
      default: "https://w7.pngwing.com/pngs/177/551/png-transparent-user-interface-design-computer-icons-default-stephen-salazar-graphy-user-interface-design-computer-wallpaper-sphere-thumbnail.png",
    },
    follow: {
      type: Array
    },
    followedBy: {
      type: Array
    },
    workouts: {
      type: Array
    }
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
