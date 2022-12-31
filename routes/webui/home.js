
const app = require('express');
const fs = require('fs');
const { parseCookies } = require('../../db/var')

const router = app.Router()
const port = process.env.PORT;

router

    .route('/')

    .get(async (req, res) => {

        const { user, type } = parseCookies(req?.headers?.cookie, true)




        const api_url = (req.protocol + '://' + req.hostname + ":" + port + '/GetScoreboardInfo')

        console.log(api_url)

        const opt = {
            method: "post",
            headers: {
                "content-type": "application/json",
            }
        }

        const data = await fetch(api_url, opt).then(it => it.json())//.then(it => console.log(it))


        console.log(data)

        res.render('main.ejs', {
            secret: false,
            location: 'home',
            current_page: 'home',
            data,
            userinfo: { user, type },
            fs: fs
        })

    });



module.exports = router;    