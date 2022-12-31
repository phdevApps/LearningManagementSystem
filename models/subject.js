
const mongoose = require('mongoose')//.plugin;

const subjectSchema = mongoose.Schema({
    "subject_name": String,
    "code": String,
    "id": Number,
    "list_type": String,
    "prerequisites": [
        {
            "item": {
                type: mongoose.Types.ObjectId,
                ref: 'subject',
                autopopulate: true,

            },
            "level": String
        }
    ],

    attachments: [
        {
            week: { type: Number },
            files: {
                lecture: [{ lecture_name: String, date: Date }],
                section: [{ section_name: String, date: Date }],
            }
        }
    ]

});


const Subject = mongoose.model('subject', subjectSchema)


// 

module.exports = Subject;






// {
//     "subject_name": "physics 3",
//     "code": "gen102",
//     "id": 990,
//     "list_type": "university courses",
//     "prequisites": [
//         {
//             "subject_name": "physics 3",
//             "code": "gen102",
//             "id": 990,
//             "prequisite_type": "before"
//         }
//     ]
// }