
const app = require('express');
const fs = require('fs');
const { Student, Subject, Work, Quiz } = require('../../db/db')
const { default: mongoose } = require('mongoose');
const router = app.Router()

router
    .route("/:page")

    .post(async (req, res) => {
        //console.clear()

        console.log('==>', req.url)
        const data = await Student.findOne({ id: req.body.id })

            .populate('registered_courses')

        if (req.body.data === 'materials') {


            res.json(data.registered_courses)



        } else if (req.body.data === 'assignments') {
            const assignmentsData = await Work.find({ "item_type": 'Assignments' }).populate('item_info')
            console.log("api:-----------------\n",assignmentsData)

            // .then(it => {

            //     console.log(it)///.find(data => data._id.toString() === "640ba3f699ce4fe5df9506b8"))


            //     //     filter((a, b) => {
            //     //     if (a._id)

            //     //         return a._id
            //     // }, {}))


            // })





            res.json(assignmentsData)
        } else if (req.body.data === 'quizzes') {

            const quizzesData = await Work.find({ "item_type": 'quizzes' }).populate('item_info')
            res.json(quizzesData)

        } else if (req.url.toLowerCase().replaceAll(/\//ig, '') === 'createquiz' && req.body.data !== 'createquiz') {

            console.log("============", req.body)

            Quiz.insertMany(req.body).then(it => console.log(it))


            const obj = {
                item_type: 'quizzes',
                item_info: req.body.subject_info,
                item_attachments: [
                    {
                        subitem_name: req.body.quiz_name,
                        subitem_id: req.body.quiz_id,
                        submited: false,
                        due_date: Date()
                    }
                ]
            }

            const fun = async () => {
                console.log('AAA')
                console.log(req.body
                )
                const result = await Work.find({ item_info: new mongoose.Types.ObjectId(req.body.subject_info) })//.then(it => console.log(it))
                console.log(result, result.length)
                if (result.length <= 1) {
                    Work.create(obj).then(it => console.log(it))
                } else {
                    result[0].item_attachments.push(obj.item_attachments[0])
                    const updated = await Work.findOneAndUpdate({ item_info: new mongoose.Types.ObjectId(req.body.subject_info) }, result[0])
                    console.log(updated)
                }
                // const doc = await Work.find({ item_info: new mongoose.Types.ObjectId(req.body.subject_info) })//.then(it => console.log(it))
                // console.log('---=--->', doc[0].item_attachments)
            }

            fun()



            res.json({
                status: 'success', data: req.body
            })
        } else {

            res.json({
                msg: 'empty:page'
            })
        }


    });



router.route('/:base/:path/:page').post(async (req, res) => {

    console.log('->', req.params.page)


    if (req.params.path === 'subject') {

        if (req.params.base === 'materials') {

            const subjectData = await Subject.find({ _id: new mongoose.Types.ObjectId(req.params.page) })

            res.json(subjectData)

        } else if (req.params.base === 'assignments') {
            const assignmentsData = await Work.find({ "item_type": 'Assignments', _id: new mongoose.Types.ObjectId(req.params.page) }).populate('item_info')

            res.json(assignmentsData)
        } else if (req.params.base === 'quizzes') {

            const quizzesData = await Work.find({ "item_type": 'quizzes', _id: new mongoose.Types.ObjectId(req.params.page) }).populate('item_info')
            res.json(quizzesData)
        } else {
            res.json({
                msg: 'empty/:base/:path/:page'
            })
        }

    } else if (req.params.path === 'quiz_system') {
      console.log('IT')
      const ids = req.params.page.split('-')
      console.log('ITAA')
        const quizData = await Quiz.findOne({ "subject_info": new mongoose.Types.ObjectId(ids[0]), "quiz_id": ids[1] })


        // console.log(quizData)
        res.json(quizData)
    }


})



module.exports = router;