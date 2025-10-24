const createError = require("http-errors");


const notFoundHandler = (req,res,next) => {
     next(createError(400,"Your requested Content was not found"))
};

const errHandler = (err,req,res,next) => {
        if(process.env.NODE_ENV="development"){
            res.status(err.status | 500).json({
                error : err
            })
        }else{
            message : err.message
        };
};


module.exports ={
    notFoundHandler,
    errHandler
}