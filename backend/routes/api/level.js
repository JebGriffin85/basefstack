const express = require('express');
const asyncHandler = require('express-async-handler');
const { handleValidationErrors } = require('../../utils/validation');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { Level, User } = require('../../db/models');

const router = express.Router();

router.get('/getLevel/:id', asyncHandler(async (req, res) => {
    const levelId  = parseInt(req.params.id);
    // let levelId = 1;
    if (levelId) {
        const level = await Level.findOne({
        where: { levelId },
        include: User
    });
    if(level){
        return res.json(level);
    };
};
res.json({ error: 'could not find level' })
}));





module.exports = router;