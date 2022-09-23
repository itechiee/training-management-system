const express = require('express');
const router = express.Router();
const Training = require('../model/Training');
const Subject = require('../model/Subject');
const {  userAuth, checkRole } = require('../utils/Auth');

router.get('/', userAuth, checkRole(['admin', 'user']), async (req, res) => {
    const page = parseInt(req.query.page) || 0;
    const limit = parseInt(req.query.limit) || 10;
    let skipIndex = (page - 1) * limit;
    skipIndex = skipIndex > 0 ? skipIndex : 0
    const sortBy = req.query.sort && req.query.sort.toLowerCase() == 'desc' ? { _id: -1 } : { _id: 1 } ;
    let filterBy = req.query.filterBy;
    const filterValue = req.query.filterValue || '';
    try{
        if(filterBy && filterBy.toLowerCase() == 'subjects') {
            const trainings = await Training.find({"subjects": new RegExp(filterValue, 'i') })
                .sort(sortBy)
                .limit(limit)
                .skip(skipIndex)
                .exec();
            res.json(trainings);
            
        } else if(filterBy && filterBy.toLowerCase() == 'coursename') {
            const trainings = await Training.find({"courseName": new RegExp(filterValue, 'i') })
                .sort(sortBy)
                .limit(limit)
                .skip(skipIndex)
                .exec();
            res.json(trainings);
        } else if(filterBy && filterBy.toLowerCase() == 'type') {

            const trainings = await Training.find({"type": new RegExp(filterValue, 'i') })
                .sort(sortBy)
                .limit(limit)
                .skip(skipIndex)
                .exec();
            res.json(trainings);
        } else if(filterBy && filterBy.toLowerCase() == 'stream') {
            

             const trainings = await Training.aggregate([
                { $lookup:
                    {
                       from: "subjects",
                       localField: "subjects",
                       foreignField: "subject",
                       as: "subj"
                    }
                }
            ]);
            
            // console.log('stream');
            // const trainings = await Training.aggregate([
            //     { $lookup:
            //         {
            //            from: "subjects",
            //            localField: "subjects",
            //            foreignField: "subject",
            //            as: "subj"
            //         }
            //     }
            // ]);
            res.json(trainings);
        } else {
            const trainings = await Training.find()
                .sort(sortBy)
                .limit(limit)
                .skip(skipIndex)
                .exec();
            res.json(trainings);
        }
    }catch(err) {
        res.json({message: err})
    }
})

router.post('/', userAuth, checkRole(['admin']), async (req, res) => {
    const training = new Training({
        courseName: req.body.courseName,
        subjects: req.body.subjects,
        type: req.body.type,
        lastModifiedUserId: req.user._id
    });
    try{
        const addedTraining = await training.save();
        res.json(addedTraining);
    } catch(err) {
        res.json({message: err});
    }
})

module.exports = router;