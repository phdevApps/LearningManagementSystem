
const app = require('express');
const { parseCookies } = require('../../db/var')
const fs = require('fs');


const router = app.Router()

router

    .route('/')

    .get((req, res) => {
        //console.clear()
        const { user, type } = parseCookies(req?.headers?.cookie, true)

        res.render('main.ejs', {
            secret: false,
            location: req.originalUrl,
            userinfo: { user, type },
            current_page: req.originalUrl.replaceAll(/\//ig, ''),
            fs: fs
        })

    });



module.exports = router;