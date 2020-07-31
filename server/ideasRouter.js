const express = require('express');
const { getAllFromDatabase, getFromDatabaseById, updateInstanceInDatabase, addToDatabase, deleteFromDatabasebyId } = require('./db');
const ideasRouter = express.Router();
const checkMillionDollarIdea = require('./checkMillionDollarIdea');

ideasRouter.param('id', (req, res, next, id) => {
    const idea = getFromDatabaseById('ideas', id);
    if(idea){
        req.idea = idea;
        next();
    }else{
        res.status(404).send();
    }
})

ideasRouter.get('/', (req, res, next) => {
    const ideas = getAllFromDatabase('ideas');
    if(ideas){
        res.status(200).send(ideas);
    }else{
        res.status(400).send();
    }
})

ideasRouter.get('/:id', (req, res, next) => {
    if(req.idea){
        res.status(200).send(req.idea);
    }else{
        res.status(404).send();
    }
})

ideasRouter.put('/:id', checkMillionDollarIdea, (req, res, next) => {
    const idea = updateInstanceInDatabase('ideas', req.body);
    // console.log(idea);
    if(idea){
        res.status(201).send(idea);
    }else{
        res.status(404).send();
    }
})

ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
    const idea = addToDatabase('ideas', req.body);
    // console.log(idea);
    if(idea){
        res.status(201).send(idea);
    }else{
        res.status(404).send();
    }
})

ideasRouter.delete('/:id', (req, res, next) => {
    const idea = deleteFromDatabasebyId('ideas', req.params.id);
    if(idea){
        res.status(204).send(idea);
    }else{
        res.status(204).send();
    }
})


module.exports = ideasRouter;