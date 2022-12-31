
const app = require('express');
const axios = require('axios');


const router = app.Router()
router
    .route('/')
    .post((req, res) => {
        let data = JSON.stringify({
            "model": "gpt-3.5-turbo",
            "messages": [
                {
                    "role": "user",
                    "content": req.body.content
                }
            ],
            "max_tokens": 20
        });

        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: 'https://api.openai.com/v1/chat/completions',
            headers: {
                'Content-Type': 'application/json',
                //here goes your Authorization of type Bearer
            },
            data: data
        };

        axios.request(config)
            .then((response) => {

                // res.json({ status: 'success', data: JSON.stringify(response.data) })
                res.json({ status: 'success', data: response.data.choices[0].message.content })
            })
            .catch((error) => {
                console.log(error)
                res.json({ status: 'error', data: error.stack })
            });
    });



module.exports = router;