
async function backup() {

}

backup()




var databaseUri = "mongodb://127.0.0.1:27017/LMS_DB?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.5.1";

var zipFilePath = "test/dev_19_9_16.21.40.28.zip";

var useObjectID = true;

var Restore = require("backup-mongodb-restorer");

new Restore(databaseUri, zipFilePath, useObjectID).restore();

