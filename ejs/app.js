const express = require("express");
const app = express()
const morgan = require("morgan")
app.use(morgan())
const mongodbClient = require("mongodb").MongoClient
app.set('view engine','ejs')

const URL = "mongodb+srv://sajjad:sajjad@cluster0.pglxy.mongodb.net/"

const data  = []
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}))
app.use(express.static("publice"))
app.get("/",(req,res)=>{
   res.render("index",{shohag:data})
})
app.get("/login",(req,res)=>{
    res.render("index",{shohag:data})
 })
 app.get("/signup",(req,res)=>{
    res.render("signup",{shohag:data})
 })
//post requests
app.post("/signup",(req,res)=>{
    console.log(req.body.name,req.body.email,req.body.password)
    const signUpData = {
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    }
    console.log(signUpData)
    mongodbClient.connect(URL,(err,db)=>{
        if(err)console.log("db not connected")
        else{
            console.log("mongodb connected..")
            dataB = db.db("myFirstDatabase")
            // dataB.createCollection("users", function(err, res) {
            //     if (err) throw err;
            //     console.log("Collection created!");
            //     db.close();
            //   });
            dataB.collection("users").insertOne(signUpData,(err,res)=>{
                if(!err)console.log("data insert success")
               
            })
        }
    })
    res.redirect("/signup")
})
// post login

app.post("/",(req,res)=>{
    console.log(req.body.email,req.body.password)
    mongodbClient.connect(URL,(err,db)=>{
        if(!err){
            dataB =db.db("myFirstDatabase")
            dataB.collection("users").find({},{projection:{_id:0}}).toArray((err,result)=>{
                if(!err){
                result.forEach((value)=>{
                    if(value.email == req.body.email){ console.log("data found...")}
                    // if(!value.email == req.body.email) {console.log("data not found...")}
                    
                })
                }
                else console.log("data find error...")
            })
        }
    })
    res.redirect("/")
})
app.post("/login",(req,res)=>{

})
app.listen(5050,(err)=>{
if(!err){
    console.log("server runing...")
}
})