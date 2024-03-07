const {Schema, model}= require("mongoose");

const parkSchema = new Schema(
    {
        name:{
            type: String,
            required: [true, "Name is required"]
        },
        description:{
            type: String,
            required: [true, "Description is required"]
        },
        location:{
            type: Object,
            required: [true, "Location with coordinates are required"]
        },
        photo:{
            type: String,
            required: [true, "Photo of the park is required"]
        },
        reviews:{
            type: Array
        }
    },
    {
        timestamps: true,
    }
);

const Park = model("Park", parkSchema);

module.exports = Park;