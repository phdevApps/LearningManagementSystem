
const app = require('express');
const fs = require('fs');
const { parseCookies } = require('../../db/var')


const router = app.Router()

router

    .route('/:page')

    .get((req, res) => {
        //console.clear()
        const { user, type } = parseCookies(req?.headers?.cookie, true)

        res.render('main.ejs', {
            secret: false,
            location: 'upload',
            current_page: 'upload',
            userinfo: { user, type },
            data: req.params.page,
            fs: fs
        })

    });



module.exports = router;