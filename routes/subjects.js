const express = require('express');
const router = express.Router();
const Subject = require('../model/Subject');
const {  userAuth, checkRole } = require('../utils/Auth');

router.get('/', userAuth, checkRole(['admin', 'user']), async (req, res) => {
    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || 10;
    let skipIndex = (page - 1) * limit;
    skipIndex = skipIndex > 0 ? skipIndex : 0
    const sortBy = req.query.sort && req.query.sort.toLowerCase() == 'desc' ? { _id: -1 } : { _id: 1 } ;

    try{
        
        const subjects = await Subject.find()
            .sort(sortBy)
            .limit(limit)
            .skip(skipIndex)
            .exec();
        res.json(subjects);
    }catch(err) {
        res.json({message: err})
    }
})

router.post('/', userAuth, checkRole(['admin']), async (req, res) => {
    // console.log(req.user._id);
    const subject = new Subject({
        subject: req.body.subject,
        stream: req.body.stream,
        lastModifiedUserId: req.user._id
    });
    try{
        const addedSubject = await subject.save();
        res.json(addedSubject);
    } catch(err) {
        res.json({message: err});
    }
});

module.exports = router;