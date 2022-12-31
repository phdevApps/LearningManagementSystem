
const app = require('express');
const fs = require('fs');
const { parseCookies } = require('../../db/var')
const { Subject } = require('../../db/db')
const fetch = require('isomorphic-fetch');

const router = app.Router()

const port = process.env.PORT;

router
    .route("/:page")

    .get(async (req, res) => {
        // //console.clear()


        // const { user, type } = parseCookies(req?.headers?.cookie, true)
        const { type } = parseCookies(req?.headers?.cookie, true)
        const  user = '1121111'
        console.clear()
console.log(":==========================================================================================================================================================\n",user,type)

        const api_url = (req.protocol + '://' + req.hostname + ":" + port + req.originalUrl)

        console.log(api_url)

        const opt = {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                "id": "1121111",
                'data': req.params.page.toLowerCase()
            })
        }

        const data = await fetch(api_url, opt).then(it => it.json())//.then(it => console.log(it))

        console.log("User UI:======================\n",{ "data___": data })
        console.log(req.originalUrl.replaceAll(/^\//ig, '').replaceAll('/', '.'))


        if (req.url.toLowerCase() === '/createquiz') {
            const subjects = await Subject.find({})

            // console.log(subjects)

            res.render('main.ejs', {
                secret: false,
                userinfo: { user, type },
                current_page: req.originalUrl.replaceAll(/^\//ig, '').replaceAll('/', '.'),
                subjects,
                data,
                fs: fs
            })

        } else {

            res.render('main.ejs', {
                secret: false,
                userinfo: { user, type },
                current_page: req.originalUrl.replaceAll(/^\//ig, '').replaceAll('/', '.'),
                data,
                fs: fs
            })
        }

    });

router.route('/:base/:path/:page')
    .get(async (req, res) => {
        const { user, type } = parseCookies(req?.headers?.cookie, true)
        if (req.params.path === 'subject') {
            console.log('curr', req.url)
            // res.json({ base: req.params.base, page: req.params.page })
            const api_url = (req.protocol + '://' + req.hostname + ":" + port + req.originalUrl)

            console.log(api_url)

            const opt = {
                method: "post",
                headers: {
                    "content-type": "application/json",
                },

                body: JSON.stringify({
                    "id": "1121111",
                    'data': req.params.page.toLowerCase(),
                    'ref': ''
                })
            }

            const data = await fetch(api_url, opt).then(it => it.json())//.then(it => console.log(it))

            // res.json({ data })
            // console.log(req.originalUrl.replaceAll(/^\//ig, '').replaceAll('/', '.').replaceAll("." + req.params.page, ''))
            // res.json({ data })


            const tmp = req.originalUrl.replaceAll(/^\//ig, '').split('/')
            const current_page = `${tmp[0]}.${tmp[2]}`
            console.log(req.originalUrl.replaceAll(/^\//ig, '').split('/'),)
            // res.json({ original: req.originalUrl, current_page })
            console.log("<->", current_page)
            res.render('main.ejs', {
                secret: false,
                current_page,
                userinfo: { user, type },
                path: req.originalUrl.replaceAll(/^\//ig, '').split('/'),
                data,
                fs: fs
            })


        } else if (req.params.path === 'quiz_system') {
            console.log('curr', req.url)
            // res.json({ base: req.params.base, page: req.params.page })
            var api_url = (req.protocol + '://' + req.hostname + ":" + port + req.originalUrl)

            console.log(api_url)

            const opt = {
                method: "post",
                headers: {
                    "content-type": "application/json",
                },

                body: JSON.stringify({
                    "id": "1121111",
                    'data': req.params.page.toLowerCase(),
                    'ref': ''
                })
            }
            api_url = (req.protocol + '://' + req.hostname + req.originalUrl).toString()

            const data = await fetch(api_url, opt).then(it => it.json()).catch(error => console.log(error))//.then(it => console.log(it))

            // res.json({ data,api_url })
            // console.log(req.originalUrl.replaceAll(/^\//ig, '').replaceAll('/', '.').replaceAll("." + req.params.page, ''))
            // res.json({ data })


            const tmp = req.originalUrl.replaceAll(/^\//ig, '').split('/')
            const current_page = `${tmp[0]}.${tmp[2]}`
            console.log(req.originalUrl.replaceAll(/^\//ig, '').split('/'),)
            // res.json({ original: req.originalUrl, current_page })
            console.log(current_page)
            res.render('main.ejs', {
                secret: false,
                current_page,
                userinfo: { user, type },
                path: req.originalUrl.replaceAll(/^\//ig, '').split('/'),
                data,
                fs: fs
            })

        }
    })

module.exports = router;