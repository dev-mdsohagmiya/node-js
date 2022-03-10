const mongodb = require("mongodb").MongoClient;
const url = "mongodb+srv://shohag:shohag11@cluster0.wbuyi.mongodb.net"
mongodb.connect(url,(err,datab)=>{
    if(!err) console.log("mongodb database connected...")
   const database =  datab.db("myFirstDatabase")
   var myobj = { name: "Company Inc", address: "Highway 37" };
   database.collection("users").insertOne(myobj,(err)=>{
       if(!err)console.log("data inserted....")
   })
})

