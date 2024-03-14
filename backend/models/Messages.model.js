const {Schema, model} = require('mongoose');

const messageSchema = new Schema (
    {
        text: {
            type: String,
            required: [true, 'Please insert message']
        },
        sentTo: {
            type: Object,
            required: [true]
        },
        sentFrom: {
            type: Object,
            required: [true]
        }
    },
    {
        timestamps: true
    }
)

const Message = model('Message', messageSchema);

module.exports = Message;