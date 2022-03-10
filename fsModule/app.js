const http = require("http")
const fs = require("fs")

// http.createServer((req,res)=>{
//  if(req.url == "/"){
//      fs.readFile("app.html",function(error,data){
//          res.writeHead(200,{"Content-Type":"text/html"})
//         res.end(data)
//      })
     
//  }
// }).listen(5050,()=>{
//     console.log("server runing...")
// })
fs.appendFile("shohag.txt",JSON.stringify(["shohag,sajjad,sajjad"]),(err)=>{
    if(err)console.log("all ok..")
})
const server = http.createServer((req,res)=>{
       res.end("hello")
       fs.appendFile("shohag.txt","shohag islam sajjad",(err)=>{
           if(err)console.log("all ok..")
       })
})
server.listen(5050)


const arr = ["shohag","sajjad","abid"]
console.log(arr.join("\n"))
const shohag = []
for(let i = 100000; i<999999;i++){
  shohag.push(i)

}
const list = shohag.join("\n")
fs.writeFile("list.txt",list,(err)=>{
    if(!err){
        console.log("all ok....")
    }
})
