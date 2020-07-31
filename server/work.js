const express = require('express');
const { getWorkFromMinionsDb, updateWorkById, addToWorkArray, deleteFromWorkArrayById, deleteFromDatabasebyId } = require('./db');
const workRouter = express.Router();

workRouter.get('/:minionId/work', (req, res, next) => {
    // console.log(req.params.minionId);
    const work = getWorkFromMinionsDb(req.params.minionId);
    // console.log(work);
    if(work && !isNaN(req.params.minionId) && work.length > 0){
        res.status(200).send(work);
    }else{
        res.status(404).send();
    }
})

workRouter.post('/:minionId/work', (req, res, next) => {
    const work = addToWorkArray(req.body, req.params.minionId);
    if(work){
        res.status(201).send(work);
    }else{
        res.status(404).send();
    }
    
})

workRouter.put('/:minionId/work/:workId', (req, res, next) => {
    const work = updateWorkById(req.body, req.params.workId, req.params.minionId);
    if(req.params.workId !== req.params.minionId){
        res.status(400).send();
    }else if(work){
        res.status(201).send(work);
    }
    else{
        res.status(404).send();
    }

})

workRouter.delete('/:minionId/work/:workId', (req, res, next) => {
    const work = deleteFromWorkArrayById(req.params.workId);
    if(work){
        res.status(204).send(work);
    }else{
        res.status(404).send();
    }
})
module.exports = workRouter;