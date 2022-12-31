

// mongoose.Collection.get()

// const Quiz = require('./models/quizzes')


// app.get('/bsync/browser-sync-client.js', (req, res, next) => {
//   req.headers['access-control-allow-origin'] = '*';
//   next()
// }, (req, res) => {
//   console.log(req.headers)
//   console.log(publicDirectory + '/js/browser-sync-client.js')
//   res.sendFile('/js/browser-sync-client.js', { root: publicDirectory })
// })



const update = async () => {
  let subdoc = []

  for (i = 0; i <= 16; i++) {
    subdoc.push({
      week: i,
      files: {
        lecture: [{ lecture_name: 'null', date: null }],
        section: [{ section_name: 'null', date: null }],
      }
    })
  }
  const doc = await Subject.find({})
  doc.forEach(it => {
    it.attachments = subdoc
  })
  console.log(doc)

  // const updated = Subject.updateMany({}, doc)

  await Subject.deleteMany({})
  await Subject.insertMany(doc)

}
// update()
const t = (105 / 2)

const periods = {

}


const updateTime = async () => {
  // await timeTable.deleteMany({})

  // await timeTable.create({
  //   subject_id: new mongoose.Types.ObjectId('640aa014c58aa9996179d5cc'),
  //   period: { lecture: [{ day: 1, start: 1, span: (2 * t) }], section: [{ day: 2, start: 2, span: (2 * t) }] }
  // })

  await timeTable.create({
    subject_id: new mongoose.Types.ObjectId('640b0c13622236ec2d381111'),
    period: { lecture: [{ day: 3, start: 1, span: (2 * t) }], section: [{ day: 3, start: 2, span: (2 * t) }, { day: 3, start: 3, span: t }] }
  })

  // const data = await timeTable.find({})
  // await timeTable.deleteMany({})
  // timeTable.insertMany(data)
}

// updateTime()
// timeTable.find({ "period.lecture._id": new mongoose.Types.ObjectId('64519afc838ccad01f1ed3c6') }).then(it => console.log(it))



const scheduleSchema = new mongoose.Schema({
  period_id: { type: mongoose.Types.ObjectId, ref: 'timeTable' }
})

scheduleSchema.plugin(subRefDoc)

const Schedule = mongoose.model('schedule', scheduleSchema)

// Schedule.deleteMany({}).then(it => console.log(it))

// Schedule.create({
//   period_id: new mongoose.Types.ObjectId('64519afc838ccad01f1ed3c2')
// })
const getSchedule = async () => {
  const schedual_1 = await Schedule.find({})
  // await schedual_1.forEach(async it => {

  const resTable = await timeTable.find({ "period.section._id": schedual_1[0].period_id }).select('period.section')

  // console.log(schedual_1[0].period_id, JSON.stringify(resTable))

  const filterRes = resTable[0].period.section
    .filter((it) => {
      if (it._id.toString() === schedual_1[0].period_id.toString()) {
        return 1
      } else {
        return 0
      }
    })[0]

  console.log(filterRes)
  // })
  // console.log(schedual_1)

}
const a = [{ "period": { "section": [{ "day": 2, "start": 3, "span": 105, "_id": "64519b5a8b3a3a64ce97c39f" }, { "day": 3, "start": 4.5, "span": 52.5, "_id": "64519b5a8b3a3a64ce97c3a0" }] }, "_id": "64519b5a8b3a3a64ce97c39d" }]



getSchedule()