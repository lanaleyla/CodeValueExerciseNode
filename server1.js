//set up server, handle response and end it 
function init()
{
    const http=require("http");

    //set up server
    const server = http.createServer();
    server.on('request', function(request, response) { //on request sleep and handle request
        console.log("Got a request");
        sleep(2000); //sleep 2 minutes 
        response.writeHead(200);
        response.end("done!");
    });
    server.listen(8001);
    console.log(' Press CTRL-C to stop\n');
}

function sleep(ms){
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)),0,0,ms);
}

module.exports.init=init();
