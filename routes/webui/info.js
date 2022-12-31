
const { parseCookies } = require('../../db/var')
const app = require('express');
const fs = require('fs');


const router = app.Router()

router

    .route("/")

    .get((req, res) => {
        //console.clear()
        const { user, type } = parseCookies(req?.headers?.cookie, true)

        res.render('main.ejs', {
            secret: false,
            userinfo: { user, type },
            current_page: req.originalUrl.replaceAll(/^\//ig, '').replaceAll('/', '.'),
            fs: fs
        })

    });



module.exports = router;