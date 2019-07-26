//create 10 http calls to the server
function createHttpCalls(){
    const http=require("http");

    for(let i=1;i<11;i++) //create 10 get http requests
    {
        http.get("http://localhost:8001/test",response=>{
        let data="";
        response.on("data",(val)=>{
            data+=val;
        });
        response.on("end",()=>{
            console.log("Request number: " +i+" is complete, "+data);
        });
    })
    } 
}

module.exports.httpRequests=createHttpCalls();