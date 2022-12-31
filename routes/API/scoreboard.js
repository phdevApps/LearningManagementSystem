const express = require('express')
const mongoose = require('mongoose')
const scoreboardData = require('../../models/scoreboard');
const Streak = require('../../models/streak');

const router = express.Router()


router

    .route('/')

    .post(async (req, res) => {
        
        console.log(req.body)

        const dataRes = await Streak.find({}).then(async it => {
            it.forEach((sIt, obj) => {
                sIt.student_info.password = null
            })
            return await it
        })

        res.json(await dataRes)
    })

router
    .route('/:id').post(async (req, res) => {
        const stuId = new mongoose.Types.ObjectId(req.params.id)

        const streakRes = await Streak.find({ student_info: stuId })
            .then(async it => {
                it.forEach((sIt, obj) => {
                    sIt.student_info.password = null
                })
                return await it
            })


        res.json(streakRes)
    })


module.exports = router


