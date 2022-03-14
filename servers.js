const http = require('http');
const fs = require('fs')
const path = require('path');
const fsPromises = require('fs').promises


const server = http.createServer((req,res)=>{
    console.log(req.url, req.method);

    // set header contenttype
    res.setHeader('Content-Type', 'text/html');
    
    let path = './Views/';
    switch(req.url){
        case '/':
            path+='index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path+='about.html';
            res.statusCode = 200
            break;
        case '/about-me':
            res.statusCode = 301
            res.setHeader('Location','/about');
            res.end();
            break;
        default:
            path+='404.html';
            res.statusCode = 404
            break

    }

    //readfile
    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err)
            res.end()
        }else{
            res.write(data);
            // res.statusCode(200)
            res.end() // we need to use res.end in order to end the response otherwise it will not be fired

            
        }
    })
})


//in order to send a request we use server.listen

server.listen(3000, 'localhost', ()=>{
    console.log('listening for request on port 3000')
})


