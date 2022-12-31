
const app = require('express');
const fs = require('fs');


const router = app.Router()

router

    .route("/")

    .get((req, res) => {

        // res.render('main.ejs', {
        //     current_page: req.originalUrl.replaceAll(/^\//ig,'').replaceAll('/','.'),
        //     fs: fs
        // })
        // console.log(req.cookie)
        var keys = req?.headers?.cookie?.split(';')

        keys?.forEach(it => {
            res?.clearCookie(it.split('=')[0])
        })

        res.redirect('/login')

    });



module.exports = router;