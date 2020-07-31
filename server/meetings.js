const express = require('express');
const { getAllFromDatabase, addToDatabase, deleteFromDatabasebyId, createMeeting, deleteAllFromDatabase } = require('./db');
const meetingsRouter = express.Router();

meetingsRouter.get('/', (req, res, next) => {
    const meetings = getAllFromDatabase('meetings');
    if(meetings){
        res.status(200).send(meetings);
    }else{
        res.status(400).send();
    }
})

meetingsRouter.post('/', (req, res, next) => {
    const meetings = createMeeting();
    const addedMeeting = addToDatabase('meetings', meetings);
    // console.log(addedMeeting);
    if(addedMeeting){
        res.status(201).send(addedMeeting);
    }else{
        res.status(404).send();
    }
})

meetingsRouter.delete('/', (req, res, next) => {
    const meetings = deleteAllFromDatabase('meetings');
    if(meetings){
        res.status(204).send(meetings);
    }else{
        res.status(204).send();
    }
})

module.exports = meetingsRouter;