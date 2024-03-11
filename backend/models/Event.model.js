const {Schema, model} = require("mongoose")
const mongoose = require("mongoose");

const eventSchema = new Schema (
    {
        name: {
            type: String,
            required: [true, "Must enter Event name"]
        },
        description: {
            type: String,
            required: [true, "Must enter description of event"]
        },
        participants: {
            type: Array
        },
        park: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Parks"
        },
        createdBy: {
            type: String
        }
    }
)

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;