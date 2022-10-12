const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const levelRouter = require('./level.js');


router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/level', levelRouter)

module.exports = router;