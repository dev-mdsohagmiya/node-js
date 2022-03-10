const http = require("http")
const server = http.createServer((req,res)=>{
    res.end("hello")
})
server.listen(3030,()=>{
    console.log("server runing....")
})