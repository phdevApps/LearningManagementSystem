const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const fileUpload = require("express-fileupload");
const path = require("path");
const Work = require('./models/semester_work')
const subRefDoc = require('mongoose-sub-references-populate')

const xlsxParse = require('xlsx')

const filesPayloadExists = require('./middleware/filesPayloadExists');
const fileExtLimiter = require('./middleware/fileExtLimiter');
const fileSizeLimiter = require('./middleware/fileSizeLimiter');
const Subject = require("./models/subject");
const { Double, Decimal128 } = require("mongodb");
const { Quiz } = require('./db/db')
require("dotenv").config();

const app = express();

const port = process.env.PORT || 3200;
// const db_str = process.env.DB_CON_STR // || 'mongodb://127.0.0.1:27017/LMS_DB?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.1'
// const db_str = 'mongodb://127.0.0.1:27017/LMS_DB?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.1'
const db_str = 'mongodb://127.0.0.1:27017/LMS_DB'
// const db_str = 'mongodb://phdevwork:rw8hO8bgkp49nnqk@cluster0.drdql.mongodb.net/LMS_DB?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.1'

// const db_str = 'mongodb://127.0.0.1:27017/test_DB?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.1'
const publicDirectory = "./public";







app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express.static(publicDirectory));
// app.use(cors());


app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// mongoose.plugin;

app.get('/index', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})




//API

app.use('/elearning', require('./routes/API/elearning'))
app.use('/upload', require('./routes/API/upload'))
app.use('/GetScoreboardInfo', require('./routes/API/scoreboard'))
app.use('/epal', require('./routes/API/epal.js'))




// WebUI
app.get('/', (req, res) => { res.redirect('./login') })

app.use('/home', require('./routes/webui/home'));

app.use('/staff', require('./routes/webui/go'));

app.use('/upload', require('./routes/webui/upload'));

app.use('/scoreboard', require('./routes/webui/scoreboard'))

app.use('/elearning', require('./routes/webui/elearning'))

app.use('/semester_work', require('./routes/webui/semester_work'))

app.use('/settings', require('./routes/webui/settings'))

app.use('/info', require('./routes/webui/info'))

app.use('/login', require('./routes/webui/login'))

app.use('/logout', require('./routes/webui/logout'))

app.use('/epal', require('./routes/webui/go'));


// backup and restore database

app.use('/reback', require('./routes/reback/reback'))





mongoose.connect(db_str)
  .then(data => {
    console.log('db connected')
    app.listen(port, () => {
      console.log(`server is on =>> http://localhost:${port}`);
    });
  })
