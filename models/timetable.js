const mongoose = require('mongoose');

const timeTableSchema = mongoose.Schema({
    subject_id: { type: mongoose.Types.ObjectId, ref: 'subject' },
    period: {
        lecture: [{ day: Number, start: Number, span: Number }],
        section: [{ day: Number, start: Number, span: Number }],
    }
})

const timeTable = mongoose.model('timetable', timeTableSchema)

module.exports = timeTable