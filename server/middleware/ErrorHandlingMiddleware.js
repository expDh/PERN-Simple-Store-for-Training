const ApiError = require('../error/ApiError')

module.exports = function (err,req,res,next){
    if (err instanceof ApiError){
        return res.status(err.status).json({message:err.message})
        // Если класс ошибки ApiError,тогда на клиент возращаем ответ со статус кодом из ошибки и с сообщением
    }
    return res.status(500).json({message:"Непредвиденная ошибка!!!"})
}