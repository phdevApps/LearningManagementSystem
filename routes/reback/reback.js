
const app = require('express');
const fs = require('fs');
const mongoose = require('mongoose');

const router = app.Router()

const port = process.env.PORT;

router

    .route("/")

    .get(async (req, res) => {

        const dir = '_reback_BackUP/'

        const getBackUP = () => {

            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true })
            }

            const collections = Object.keys(mongoose.connections[0].collections);

            collections.forEach(async collName => {
                try {
                    const collDoc = await mongoose.model(collName.substring(0, collName.length - 1)).find({})
                    fs.writeFileSync(`${dir}/${collName.substring(0, collName.length - 1)}.json`, JSON.stringify(collDoc))
                    console.log({ msg: fs.existsSync(`${dir}/${collName.substring(0, collName.length - 1)}.json`) })
                } catch (err) {

                    const collDoc = await mongoose.model(collName.substring(0, collName.length - 3)).find({})
                    fs.writeFileSync(`${dir}/${collName.substring(0, collName.length - 3)}.json`, JSON.stringify(collDoc))
                    console.log({ msg: fs.existsSync(`${dir}/${collName.substring(0, collName.length - 3)}.json`) })


                    console.log({ msg: fs.existsSync(`${dir}/${collName}.json`) })
                    console.log(collName.substring(0, collName.length - 1))
                    console.log(err)
                }
            })

            let result = {};
            collections.forEach(collName => {
                if (collName === 'quizzes') {
                    result[collName] = fs.existsSync(`${dir}/${collName.substring(0, collName.length - 3)}.json`)
                } else {
                    result[collName] = fs.existsSync(`${dir}/${collName.substring(0, collName.length - 1)}.json`)
                }

            })

            res.json(result)
        }
        const restoreBackUP = () => {
            // console.log(\
            fs.readdir(dir, (err, files) => {

                files.forEach(it => {
                    const doc = fs.readFileSync(dir + it, { encoding: "utf8" })
                    let collName = it.split('.')[0];
                    
                    console.log(collName)

                    mongoose.model(collName).insertMany(JSON.parse(doc)).then(it => {
                        console.log(it)
                    })

                })



                res.json({ data: "" })



            })
        }


        // getBackUP()
        // restoreBackUP()
        // res.json({})

    });


module.exports = router;