
const app = require('express');
const { parseCookies } = require('../../db/var')
const fetch = require('isomorphic-fetch');
const fs = require('fs');

const port = process.env.PORT;

const router = app.Router()

router

    .route('/')

    .get(async (req, res) => {
        // //console.clear()

        // const url = `http://localhost:3000/GetScoreboardInfo/`

        // const data = ''
        // // await 
        // fetch(url, { method: 'get' })
        //     // .then(it => it)
        //     .then(it => console.log('aa', it.body.data))

        // // console.log(await JSON.stringify(data))

        // res.render('main.ejs', {
        //     secret: false,
        //     current_page: 'scoreboard',
        //     fs: fs,
        //     data
        // })

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

        console.log(req.originalUrl.replaceAll(/^\//ig, '').replaceAll('/', '.'))

        res.render('main.ejs', {
            secret: false,
            userinfo: { user, type },
            current_page: req.originalUrl.replaceAll(/^\//ig, '').replaceAll('/', '.'),
            data,
            fs: fs
        })






    });



module.exports = router;