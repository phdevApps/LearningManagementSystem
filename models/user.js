
const mongoose = require('mongoose');

const studentSchema = mongoose.Schema(
    {
        "name": String,
        "id": Number,
        "password": String,
        "faculty": String,
        "level": Number,
        "history": [
            {
                type: mongoose.Types.ObjectId,
                ref: 'subject',
                autopopulate: true
            }
        ],
        "gpa": Number,
        "registered_courses": [
            {
                type: mongoose.Types.ObjectId,
                ref: 'subject',
                autopopulate: true
            }
        ],
        "semester_work": [
            {
                item_info: {
                    type: mongoose.Types.ObjectId,
                    ref: 'work',
                    // autopopulate: true
                },
                "status": Boolean
            }
        ]
    }
)


// studentSchema.plugin(require('mongoose-autopopulate'))


const Student = mongoose.model('user',

    studentSchema
)

module.exports = Student;

// {
//     "name": "khaled mohamed",
//     "id": 1221111,
//     "password": "khaled mohamed",
//     "history": [
//       {
//         "subject_name": "physics 2",
//         "code": "gen102",
//         "id": 990,
//         "list_type": "university courses",
//         "grade": "a+"
//       },
//       {
//         "subject_name": "chemistry",
//         "code": "gen105",
//         "id": 995,
//         "list_type": "university courses",
//         "grade": "b+"
//       }
//     ],
//     "gpa": 3.2,
//     "registered_courses": [
//       {
//         "subject_name": "physics 3",
//         "code": "gen102",
//         "id": 990,
//         "list_type": "university courses"
//       },
//       {
//         "subject_name": "math 3",
//         "code": "gen105",
//         "id": 995,
//         "list_type": "university courses"
//       }
//     ],
//     "semester_work": [
//       {
//         "assignments": [
//           {
//             "subject_name": "physics 3",
//             "code": "gen102",
//             "id": 990,
//             "data": [
//               {
//                 "assignment_name": "sheet 1",
//                 "assignment_id": "99033333",
//                 "submited": true,
//                 "due_date": "2/4/2023"
//               },
//               {
//                 "assignment_name": "sheet 2",
//                 "assignment_id": "99033344",
//                 "submited": true,
//                 "due_date": "2/4/2023"
//               }
//             ]
//           },
//           {
//             "subject_name": "math 3",
//             "code": "gen105",
//             "id": 995,
//             "data": [
//               {
//                 "assignment_name": "sheet 1",
//                 "assignment_id": "990333555",
//                 "submited": true,
//                 "due_date": "2/4/2023"
//               },
//               {
//                 "assignment_name": "sheet 2",
//                 "assignment_id": "99033343",
//                 "submited": false,
//                 "due_date": "2/4/2023"
//               }
//             ]
//           }
//         ]
//       },
//       {
//         "quizzes": [
//           {
//             "subject_name": "physics 3",
//             "code": "gen102",
//             "id": 990,
//             "data": [
//               {
//                 "assignment_name": "quize 1",
//                 "assignment_id": "3434343",
//                 "submited": true,
//                 "due_date": "2/4/2023",
//                 "grade": 5,
//                 "full_grade": 5
//               },
//               {
//                 "assignment_name": "quize 2",
//                 "assignment_id": "3434343",
//                 "submited": true,
//                 "due_date": "2/4/2023",
//                 "grade": 5,
//                 "full_grade": 5
//               }
//             ]
//           },
//           {
//             "subject_name": "math 3",
//             "code": "gen105",
//             "id": 995,
//             "data": [
//               {
//                 "assignment_name": "quize 1",
//                 "assignment_id": "34343435",
//                 "submited": true,
//                 "due_date": "2/4/2023",
//                 "grade": 5,
//                 "full_grade": 5
//               },
//               {
//                 "assignment_name": "quize 2",
//                 "assignment_id": "3434343",
//                 "submited": false,
//                 "due_date": "2/4/2023",
//                 "grade": 5,
//                 "full_grade": 5
//               }
//             ]
//           }
//         ]
//       }
//     ]
//   }