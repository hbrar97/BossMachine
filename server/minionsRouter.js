const express = require('express');
const minionsRouter = express.Router();
const {getAllFromDatabase, getFromDatabaseById, updateInstanceInDatabase, addToDatabase, deleteFromDatabasebyId} = require('./db');
// GET - minions array
minionsRouter.get('/', (req, res, next) => {
    const minions = getAllFromDatabase('minions');
    // console.log(minions);
    if(minions){
        res.status(200).send(minions);
    }else{
        res.status(404).send();
    }
    // res.send(getAllFromDatabase('minions'));
})

// GET - minion by id
minionsRouter.get('/:minionId', (req, res, next) => {
    
    const minion = getFromDatabaseById('minions', req.params.minionId);
    // console.log(minion);
    if(minion){
        res.status(200).send(minion);
    }else{
        res.status(404).send()
    }
})

// PUT - update minion array
minionsRouter.put('/:minionId', (req, res, next) => {
    // console.log(req.params);
    const minion = updateInstanceInDatabase('minions', req.body);
    // console.log(minion);
    if(minion){
        res.status(202).send(minion);
    }else{
        res.status(404).send();
    }
})

// POST - add to minion array
minionsRouter.post('/', (req, res, next) => {
    const minionArray = getAllFromDatabase('minions');
    const id = minionArray.length;
    req.body.id = id;
    const minion = addToDatabase('minions', req.body);
    console.log(minion);
    if(minion){
        res.status(201).send(minion);
    }else{
        res.status(404).send();
    }
})

//DELETE - remove minion from array
minionsRouter.delete('/:minionId', (req, res, next) => {
    const minion = deleteFromDatabasebyId('minions', req.params.minionId);
    if(minion){
        res.status(204).send(minion);
    }else{
        res.status(404).send();
    }
})
module.exports = minionsRouter;