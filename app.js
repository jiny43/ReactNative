const http = require('http')
const { type } = require('os')
const port = process.env.PORT || 3000

const server = http.createServer((req,res)=>{
  res.writeHead(200, {'Content-type':'text/plain'})
  res.end('hello')
})
server.listen(port,() => console.log('서버 작동됨'))