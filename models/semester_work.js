const mongoose = require('mongoose');

const Work = mongoose.model('work',

    {
        item_type: String,

        "item_info": {
            type: mongoose.Types.ObjectId,
            ref: 'subject'
        },
        "item_attachments": [
            {
                "subitem_name": String,
                "subitem_id": Number,
                "submited": Boolean,
                "due_date": Date
            }

        ]
    }
)


module.exports = Work;