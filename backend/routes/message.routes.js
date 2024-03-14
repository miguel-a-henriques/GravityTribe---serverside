const express = require("express");
const router = express.Router();

const Message = require('../models/Messages.model');

router.get('/messages', async (req,res,next) => {
    const { ourUserId, thisUserId } = req.query;

    Message.find({
        $or: [
            { 'sentTo.idTo': ourUserId, 'sentFrom.idFrom': thisUserId },
            { 'sentTo.idTo': thisUserId, 'sentFrom.idFrom': ourUserId }
        ]
    })
    .then((allMessages) => res.json(allMessages))
    .catch((err) => next(err))
});

router.post('/messages', async (req,res,next) => {
    const {text, sentTo:{nameTo, idTo}, sentFrom: {nameFrom, idFrom}} = req.body;

    if(text === "") {
        res.status(400).json({message: "Please insert message you want to send"})
        return;
    }

    return Message.create({text, sentTo:{nameTo, idTo}, sentFrom: {nameFrom, idFrom}})
    .then((newMessage) => res.status(200).json(newMessage))
    .catch((err)=> next(err));
})

module.exports = router;