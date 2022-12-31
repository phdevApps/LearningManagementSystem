
const app = require('express');
const fs = require('fs');
const { Student, Subject, Work } = require('../../db/db')
const subject = require('../../models/subject');
const { default: mongoose } = require('mongoose');
const router = app.Router()
const fileUpload = require("express-fileupload");
const path = require("path");



const filesPayloadExists = require('../../middleware/filesPayloadExists');
const fileExtLimiter = require('../../middleware/fileExtLimiter');
const fileSizeLimiter = require('../../middleware/fileSizeLimiter');
const file2upload = mongoose.model('file', {
    file: String,
    assginment_id: String,
    item_info: mongoose.Types.ObjectId,
    student_id: mongoose.Types.ObjectId
})

router

    .route("/:page")



    .post(
        fileUpload({ createParentPath: true }),
        filesPayloadExists,
        fileExtLimiter(['.png', '.jpg', '.jpeg', '.xlsx']),
        fileSizeLimiter,
        (req, res) => {
            console.log(req.url === "/[object%20Object]")

            if (req.url !== "/[object%20Object]") {
                // console.log('->>>>> string',)

                const files = req.files
                // console.log(files)
                const ids = req.params.page.split('-')
                console.log({ ids, page_length: req.params.page.length, page: req.params.page })
                // console.log(req)

                Object.keys(files).forEach(async key => {

                    const filepath = path.join(__dirname, 'files', files[key].name)

                    files[key].mv(filepath, (err) => {
                        if (err) return res.status(500).json({ status: "error", message: err })
                    })

                    console.log('before')

                    // console.log()
                    await file2upload.create({ student_id: new mongoose.Types.ObjectId('640baa4da2104583e751aaad'), file: key, assginment_id: ids[1], item_info: new mongoose.Types.ObjectId(ids[0]) })



                    const query = { item_type: "Assignments", item_info: new mongoose.Types.ObjectId(ids[0]) }
                    const item2update = await Work.find(query)



                    const index = item2update[0].item_attachments.filter(it => {

                        if (it.subitem_id.toString() === ids[1]) {
                            return 1
                        } else {
                            return 0
                        }

                    })
                    index[0].submited = true

                    await Work.findOneAndUpdate(query, item2update[0])


                })

                return res.json({ status: 'success', message: Object.keys(files).toString() })
            } else {
                console.log("else")
                const files = req.files
                // console.log(files)
                const ids = req.params.page.split('-')
                console.log({ ids, page_length: req.params.page.length, page: req.params.page })
                // console.log(req)

                Object.keys(files).forEach(async key => {

                    const filepath = path.join(__dirname, 'files', files[key].name)

                    files[key].mv(filepath, (err) => {
                        if (err) return res.status(500).json({ status: "error", message: err })
                    })

                    console.log('before')


                    // await file2upload.create({ student_id: new mongoose.Types.ObjectId('640baa4da2104583e751aaad'), file: key, assginment_id: ids[1], item_info: new mongoose.Types.ObjectId(ids[0]) })



                    // const query = { item_type: "Assignments", item_info: new mongoose.Types.ObjectId(ids[0]) }
                    // const item2update = await Work.find(query)



                    // const index = item2update[0].item_attachments.filter(it => {

                    //     if (it.subitem_id.toString() === ids[1]) {
                    //         return 1
                    //     } else {
                    //         return 0
                    //     }

                    // })
                    // index[0].submited = true

                    // await Work.findOneAndUpdate(query, item2update[0])


                })

                return res.json({ status: 'success', message: Object.keys(files).toString() })
            }

        }

    )

module.exports = router;