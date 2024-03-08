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
    },
    exercises: {
        type: Array,
        required: [true]
    },
})

const Workout = model("Workout", workoutSchema);
module.exports = Workout