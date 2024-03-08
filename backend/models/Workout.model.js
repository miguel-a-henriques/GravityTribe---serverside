const {Schema, model} = require("mongoose");

const workoutSchema = new Schema({
    name: {
        type: String,
        required: [true]
    },
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
    createdBy: {
        type: String
    }
})

const Workout = model("Workout", workoutSchema);
module.exports = Workout