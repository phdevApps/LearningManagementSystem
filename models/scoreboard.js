
const mongoose = require('mongoose');

const scoreSchema = mongoose.Schema(
    {
        student_info: {
            type: mongoose.Types.ObjectId,
            ref: 'user',
            autopopulate: true

        },
        "total_score": Number
    }

)

scoreSchema.plugin(require('mongoose-autopopulate'))
const Score = mongoose.model('score',
    scoreSchema
)

module.exports = Score;