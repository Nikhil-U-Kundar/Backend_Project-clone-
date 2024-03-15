/// this page is used to handle the Error 
class apiError extends Error{ 
    constructor(                     //constructor is created..
        statusCode,
        message="something went wrong",
        error=[],
        stack=""
    ){
        super(message)
        this.statusCode=statusCode
        this.data=null
        this.message=message
        this.sucess=false;  /// we not responding through this so we are returning the false for now
        this.error=error

    if(statck){                                                    //   make this code buyhurts for noww
    this.stack =stack                                            //   make this code buyhurts for noww
    }else{                                                        //   make this code buyhurts for noww
        Error.captureStackTrace(this,this.constructor)            //   make this code buyhurts for noww
    }                                                            //   make this code buyhurts for noww//   
    }                                                            //   make this code buyhurts for noww
}                                                                //   make this code buyhurts for noww


export {apperror}