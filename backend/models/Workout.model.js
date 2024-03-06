const {Schema, model} = require("mongoose");

const workoutSchema = new Schema({
    expLevel:{
        type: String,
        required: [true],
        enum: ["beginner", "intermediate", "advanced", "master"]
    },
    workoutType:{
        type: String,
        required: [true],
        enum: ["skills", "push", "pull", "legs"]
    }
})

const Workout = model("Workout", workoutSchema);
module.exports = Workout