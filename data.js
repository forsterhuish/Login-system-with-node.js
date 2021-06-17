const userDB = [];

module.exports = { userDB };

// var mongoDB = require("mongodb");
// var mongoClient = mongoDB.MongoClient;
// var url = "mongodb://localhost:27017/login_db";
// var dbo = null;

// mongoClient.connect(url, (err, db) => {
//     if (err) throw err;
//     console.log("Database created");
//     dbo = db.db("login_db")
//     dbo.createCollection("users", (err, res) => {
//         if (err) throw err;
//         console.log("Collection created");
//         db.close();
//     });
// })
// module.exports = { dbo };
