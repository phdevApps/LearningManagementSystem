const mongoose = require('mongoose');

const streakSchema = mongoose.Schema(
    {
        student_info: {
            type: mongoose.Types.ObjectId,
            ref: 'user',
            autopopulate: true
        },

        "total_score": Number,
        "streaks": [{ "streak_name": String, score: Number, "duration": String }]

    }
)

streakSchema.plugin(require('mongoose-autopopulate'))

const Streak = mongoose.model('streak',
    streakSchema
)

module.exports = Streak;