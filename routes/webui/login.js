
const app = require('express');
const fs = require('fs');


const router = app.Router()

router

    .route("/")

    .get((req, res) => {
        //console.clear()

        res.render('main.ejs', {
           
            secret: true,
            current_page: req.originalUrl.replaceAll(/^\//ig, '').replaceAll('/', '.'),
            fs: fs
        })

    })

    .post((req, res) => {




        res.cookie('type', req.body.options)
        res.cookie('user', req.body.user)
        res.cookie('pass', req.body.pass)
        // res.json(req.body)
        res.redirect('/home')
        // res.json({
        //     "message": req.body
        // })


    });



module.exports = router;