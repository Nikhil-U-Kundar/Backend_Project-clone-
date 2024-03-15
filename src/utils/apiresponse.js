class apiresponse{
    constructor(statusCode,data,message="Success"){
        this.statusCode=statusCode
        this.data=data
        this.message=message
        this.Sucess = statusCode < 400          //http response statu code we have 
    }
}