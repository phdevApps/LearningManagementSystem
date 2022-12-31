
const mongoose = require('mongoose');

const quezSchema = mongoose.Schema(
    {
        subject_info: {
            type: mongoose.Types.ObjectId,
            ref: 'subject'
        },
        quiz_id: String,
        questions: [

            {
                "id": Number,
                "title": String,
                "answers": [],
                "right_answer": String,
                "isFlagged": Boolean,
                "isAnswered": Boolean
            }
        ]
    }

)

// quezSchema.plugin(require('mongoose-autopopulate'))
const Quiz = mongoose.model('quiz',
    quezSchema
)



module.exports = Quiz;