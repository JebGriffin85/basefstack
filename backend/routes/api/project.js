const express = require('express');
const asyncHandler = require('express-async-handler');
const { Project } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler( async (req, res) => {
    const allProjects = await Project.findAll();
    return res.json(allProjects)
}));

router.post('/', asyncHandler(async (req, res, next) => {
    const { title, description, genre, userId } = req.body;
    const newProject = await Project.create({
        title, description, genre, userId
    });
    return res.json(newProject)
}))

module.exports = router;