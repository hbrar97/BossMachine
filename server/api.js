const express = require('express');
const apiRouter = express.Router();
const {getAllFromDatabase, getFromDatabaseById, updateInstanceInDatabase, addToDatabase, deleteFromDatabasebyId} = require('./db');
const minionsRouter = require('./minionsRouter');
const ideasRouter = require('./ideasRouter');
const meetingsRouter = require('./meetings');
const workRouter = require('./work');
// const minionsRouter = express.Router({mergeParams: true});

apiRouter.use('/minions', minionsRouter);
apiRouter.use('/ideas', ideasRouter);
apiRouter.use('/meetings', meetingsRouter);
apiRouter.use('/minions', workRouter);

module.exports = apiRouter;
