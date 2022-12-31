
const app = require('express');
const { parseCookies } = require('../../db/var')
const fs = require('fs');


const router = app.Router()

router

    .route("/")

    .get((req, res) => {
        //console.clear()
        console.log('settings')
        const { user, type } = parseCookies(req?.headers?.cookie, true)

        res.render('main.ejs', {
            secret: false,
            userinfo: { user, type },
            current_page: req.originalUrl.replaceAll(/^\//ig, '').replaceAll('/', '.'),
            fs: fs
        })

    });



module.exports = router;