
// const mongoose = require('mongoose');
// console.log('connecting')

// mongoose.connect('mongodb://localhost:27017/LMS_DB').then(it => {
//     console.log('it')
// }).then(it => console.log('aaa'))





// import { connect, model } from 'mongoose';


// connect('mongodb://localhost:27017/LMS_DB').then(it => { console.log('aaa') });






// const { connect } = mongoose;


// mongoose.connect('mongodb://localhost:27017', (aa) => {
//     console.log(aa)
// })

// connect('mongodb+srv://localhost:27017/LMS_DB');



// const db = mongoose.createConnection();

// db.openUri('127.0.0.1', 'LMS_DB', 27017);



// const opts = { db: { native_parser: true }}
// db = mongoose.createConnection('mongodb://127.0.0.1:27017/LMS_DB', opts);

// const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/LMS_DB?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.1',
//   {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
//   }
// );


// const Student = model('user', {
//     "name": String,
//     "id": Number,
//     "gpa": Number
// })



// const data =  Student.find({ id: 1221111 }).get()

// console.log(data)





// const db = mongoose.connection;
// //console.clear()
// db.openUri('127.0.0.1', 'lms_db', 27017);

// db.on("error", console.error.bind(console, "connection error: "));
// db.once("open", function () {
//   console.log("Connected successfully");
// });



const Student = require('./models/user');
const Subject = require('./models/subject');
const Work = require('./models/semester_work');
console.log('aaaaaaaaaaaaaaaa')
const mongoose = require('mongoose');

mongoose.plugin;

mongoose.connect('mongodb://127.0.0.1:27017/LMS_DB?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.1')
    .then(async data => {
        console.log('connected')



        // Subject.find({ "subject_name": {$eq:"physics 3"} })
        //     .then(it => console.log((JSON.stringify(it))))





        // Subject.insertMany([{
        //     "subject_name": 'test subject',
        //     "code": 'gen111',
        //     "id": 111,
        //     "list_type": "some list",
        //     "prerequisites": [
        //         {
        //             "item": new mongoose.Types.ObjectId('640aa014c58aa9996179d5ce'),
        //             "level": "before"

        //         }
        //     ],

        // }])



        // const _id_1 = (new mongoose.Types.ObjectId(((await Subject.findOne({ "subject_name": "physics 1" }).select('_id'))['_id']))).toString()
        // const _id_2 = (new mongoose.Types.ObjectId(((await Subject.findOne({ "subject_name": "physics 2" }).select('_id'))['_id']))).toString()


        // // .then(async it => console.log(it[0]['_id'], await (new mongoose.Types.ObjectId(it[0]['_id'])).toString()));


        // console.log(_id)
        // console.log((new mongoose.Types.ObjectId(_id)))


        // Subject.insertMany([
        //     {
        //         "subject_name": "physics 3",
        //         "code": "gen112",
        //         "id": 122,
        //         "list_type": "University Requirements",
        //         "prerequisites":
        //             [
        //                  {
        //                      "item": new mongoose.Types.ObjectId(_id_1),
        //                      "level": "before"
        //                  },

        //                  {
        //                      "item": new mongoose.Types.ObjectId(_id_1),
        //                      "level": "before"
        //                  }

        //             ]
        //     },
        // ]).then(it => { console.log(it) })





        // Student.insertMany([
        //     {
        //         "name": "khaled mohamed",
        //         "id": 1112223,
        //         "password": "12345678",
        //         "history": [

        //             new mongoose.Types.ObjectId('640aa014c58aa9996179d5cc'),
        //             new mongoose.Types.ObjectId('640aa014c58aa9996179d5ce'),
        //             new mongoose.Types.ObjectId('640aa87cf0ea10d46ccb98b7'),

        //         ],
        //         "gpa": 4,
        //         "registered_courses": [

        //             new mongoose.Types.ObjectId('640b0c13622236ec2d38119c'),

        //         ],
        //         "semester_work": [
        //             {
        //                 item_info: new mongoose.Types.ObjectId('640ba3f699ce4fe5df9506b7'),
        //                 "status": true
        //             }
        //         ]
        //     }
        // ]).then(it => { console.log(JSON.stringify(it)) })



        // Work.findOne({ "item_type": 'Assignments' }).select({ "item_attachments": [{ "_id": new mongoose.Types.ObjectId('640ba3f699ce4fe5df9506b8')}] },).findOne().then(it => console.log((it).toString()))



        // => // Work.findOne({ "item_type": 'Assignments' })

        //     .then(it => {

        //         console.log(it.item_attachments.find(data => data._id.toString() === "640ba3f699ce4fe5df9506b8"))


        //         //     filter((a, b) => {
        //         //     if (a._id)

        //         //         return a._id
        //         // }, {}))


        //     })


        Student.find({}).then(it => {


            it.every(async data => {


                // console.log(data)

                // console.log//(

                // await data.semester_work.forEach(async x => {

                //     // console.log(x.item_info)


                //     const item =
                //         await Work.findOne({ "item_type": 'Assignments' })
                //             .then(it => {

                //                 return it.item_attachments.find(data => data._id.toString() === x.item_info.toString())

                //             })


                //     console.log(item)
                //     console.log(x)
                //     x = item
                //     // return item;
                // })


                // for (i = 0; i < data.item_attachments.length; i++) {


                //     Work.findOne({ "item_type": 'Assignments' })
                //         .then(item => {

                //             console.log(i, item)
                //             // return it.item_attachments.find(data => data._id.toString() === data.semester_work[i].item_info.toString())

                //         })




                // }

                // data.semester_work[0]='' ;


                // console.log(data.semester_work)


                // )
                // await Work.findOne({ "item_type": 'Assignments' })

                //     .then(it => {

                //         return it.item_attachments.find(data => data._id.toString() === data._id.toString())

                //     })





            })

            // it[0].semester_work[0].item_info.populate()//.push({ 'status': false, "item_info": { 'aa': 'bb' } })
            // console.log(it[0].semester_work[0].item_info.toString())


        })


        // Work.findOne({ "item_type": 'Assignments' }).select("item_attachments.subitem_name item_attachments._id").then(it => console.log((it)))


        // Work.insertMany([

        //     {
        //         item_type: "Assignments",

        //         "item_info": new mongoose.Types.ObjectId('640b0c13622236ec2d38119c'),


        //         "item_attachments": [
        //             {
        //                 "subitem_name": "sheet 1",
        //                 "subitem_id": 191919191,
        //                 "submited": true,
        //                 "due_date": Date('10/5/2023')
        //             },
        //             {
        //                 "subitem_name": "sheet 2",
        //                 "subitem_id": 191919192,
        //                 "submited": true,
        //                 "due_date": Date('15/5/2023')
        //             }
        //         ]

        //     },
        //     {
        //         item_type: "quizzes",

        //         "item_info": new mongoose.Types.ObjectId('640b0c13622236ec2d38119c'),


        //         "item_attachments": [
        //             {
        //                 "subitem_name": "quiz 1",
        //                 "subitem_id": 19191,
        //                 "submited": true,
        //                 "due_date": Date('10/5/2023')
        //             },
        //             {
        //                 "subitem_name": "quiz 2",
        //                 "subitem_id": 19192,
        //                 "submited": true,
        //                 "due_date": Date('15/5/2023')
        //             }
        //         ]

        //     }


        // ]).then(it => console.log(it))




        // Work.deleteMany({}).then(it => console.log(it))



        // Work.findOne({ "item_info": { _id: new mongoose.Types.ObjectId('640b0c13622236ec2d38119c') }, "item_type": 'Assignments' })

        //     .then(it => {



        //         // console.log(typeof(it))



        //         // ['item_attachments'].push(

        //         //     {
        //         //         "subitem_name": "sheet 2",
        //         //         "subitem_id": 191919192,
        //         //         "submited": true,
        //         //         "due_date": Date('15/5/2023')
        //         //     }
        //         // )

        //         // it.markModified('item_attachments')

        //         it.item_attachments.push(
        //             {
        //                 "subitem_name": "sheet 6",
        //                 "subitem_id": 191919192,
        //                 "submited": true,
        //                 "due_date": Date('15/5/2023')
        //             })

        //         it.markModified('item_attachments')


        //         it.save().then(res => {
        //             console.log(res)
        //         })


        //         // console.log()


        //     })





        // Work.insertMany([
        //     {
        //         item_type: "Assignments",
        //         data: [
        //             {

        //                 "subject_info": new mongoose.Types.ObjectId('640b0c13622236ec2d38119c')




        //             }
        //         ]
        //     },



        // ]).then(it => console.log(it))



        // "data": [
        //     {
        //         "subitem_name": "sheet 1",
        //         "subitem_id": 191919191,
        //         "submited": true,
        //         "due_date": Date('10/5/2023')
        //     }
        // ]




        // {
        //     item_type: "Assignments",
        //     data: [
        //         {

        //             "subject_info": new mongoose.Types.ObjectId('640b0c13622236ec2d38119c')
        //             ,
        //             "data": [
        //                 {
        //                     "subitem_name": "sheet 2",
        //                     "subitem_id": 191919192,
        //                     "submited": true,
        //                     "due_date": Date('15/5/2023')
        //                 }
        //             ]
        //         }
        //     ]
        // },
        // {
        //     item_type: "quiz",
        //     data: [
        //         {

        //             "subject_info": new mongoose.Types.ObjectId('640b0c13622236ec2d38119c')
        //             ,
        //             "data": [
        //                 {
        //                     "subitem_name": "quiz 1",
        //                     "subitem_id": 19191911221,
        //                     "submited": true,
        //                     "due_date": Date('11/5/2023')
        //                 }
        //             ]
        //         }
        //     ]
        // }
















        // {
        //     "name": String,
        //     "id": Number,
        //     "password": String,
        //     "history": [
        //         {
        //             type: mongoose.Types.ObjectId,
        //             ref: 'subjects'
        //         }
        //     ],
        //     "gpa": Number,
        //     "registered_courses": [
        //         {
        //             type: mongoose.Types.ObjectId,
        //             ref: 'subjects'
        //         }
        //     ],
        //     "semester_work": [
        //         {
        //             type: mongoose.Types.ObjectId,
        //             ref: 'semester_work'
        //         }
        //     ]
        // }


        // {
        //     item_type: String,
        //     data: [
        //         {

        //             type: mongoose.Types.ObjectId,
        //             ref: 'subjects'
        //             ,
        //             "data": [
        //                 {
        //                     "subitem_name": String,
        //                     "subitem_id": Number,
        //                     "submited": true,
        //                     "due_date": Date
        //                 }
        //             ]
        //         }
        //     ]
        // }


























        // const Student = mongoose.model('user', {
        //     "name": String,
        //     "id": Number,
        //     "gpa": Number
        // })

        // const student_1 = new Student({
        //     "name" : 'someone',
        //     id:333333333,
        //     gpa:3.2
        // });

        // console.log(student_1)

        // student_1.save()

        // student_1.get({id:12211111})   //findOne({id:1221111}).exec().then(it=console.log(it))

        // console.log(


        //    await Student.findOne({ id: 1221111 }).exec()
        // )

        // const userinfo = await student_1.get({ id: 1221111 })
        // //console.clear()
        // console.log(userinfo)

    })


