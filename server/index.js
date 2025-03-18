require('dotenv').config()

const express = require('express')
const PORT = process.env.PORT || 5000
const app = express()
// app.listen(PORT, () => console.log(`Server started on port ${PORT}`))


// ВСЕ ВЫШЕ ЭТО ПОДКЛЮЧЕНИЕ СЕРВЕРА И ПРОВЕРКА ЕГО РАБОТЫ
// ВСЕ ВЫШЕ ЭТО ПОДКЛЮЧЕНИЕ СЕРВЕРА И ПРОВЕРКА ЕГО РАБОТЫ
// ВСЕ ВЫШЕ ЭТО ПОДКЛЮЧЕНИЕ СЕРВЕРА И ПРОВЕРКА ЕГО РАБОТЫ

const sequelize = require('./db')

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

    }catch(e){
        console.log(e)
    }

}

start()

// ВСЕ ВЫШЕ ЭТО ПОДКЛЮЧЕНИЕ СЕРВЕРА И ПРОВЕРКА ЕГО РАБОТЫ то как выглядит в идеале
// ВСЕ ВЫШЕ ЭТО ПОДКЛЮЧЕНИЕ СЕРВЕРА И ПРОВЕРКА ЕГО РАБОТЫ то как выглядит в идеале
// ВСЕ ВЫШЕ ЭТО ПОДКЛЮЧЕНИЕ СЕРВЕРА И ПРОВЕРКА ЕГО РАБОТЫ то как выглядит в идеале

const models = require('./models/models.js')

// ВЫШЕ ПОДКЛЮЧЕНИЕ МОДЕЛЕЙ
// ВЫШЕ ПОДКЛЮЧЕНИЕ МОДЕЛЕЙ
// ВЫШЕ ПОДКЛЮЧЕНИЕ МОДЕЛЕЙ


const cors = require('cors')
app.use(cors()) 
app.use(express.json())
// app.use(express.json()) чтобы наше приложение могло парсить json


// app.get('/',(req,res) =>{
//     res.status(200).json({message:'WORKING!!!'})
// })  
// ПРОВЕРКА РАБОТЫ



// ВЫШЕ НАСТРОЙКА CORS ЧТОБЫ МЫ МОГЛИ ОТПРАВЛЯТЬ ЗАПРОСЫ С БРАУЗЕРА
// ВЫШЕ НАСТРОЙКА CORS ЧТОБЫ МЫ МОГЛИ ОТПРАВЛЯТЬ ЗАПРОСЫ С БРАУЗЕРА
// ВЫШЕ НАСТРОЙКА CORS ЧТОБЫ МЫ МОГЛИ ОТПРАВЛЯТЬ ЗАПРОСЫ С БРАУЗЕРА
const path= require('path')
app.use(express.static(path.resolve(__dirname,'static')))
const fileUpload = require('express-fileupload')
app.use(fileUpload({}))


// РЕГИСТРАЦИЯ КАРТИНОК
// РЕГИСТРАЦИЯ КАРТИНОК
// РЕГИСТРАЦИЯ КАРТИНОК



const router = require('./routes/index')
app.use('/api',router)



// ВЫШЕ СООБЩАЕМ СЕРВЕРУ О РОУТЕРАХ
// ВЫШЕ СООБЩАЕМ СЕРВЕРУ О РОУТЕРАХ
// ВЫШЕ СООБЩАЕМ СЕРВЕРУ О РОУТЕРАХ





























const errorHandler = require('./middleware/ErrorHandlingMiddleware')
app.use(errorHandler)

// app.use(errorHandler)  ДОЛЖЕН ОБЯЗАТЕЛЬНО РЕГАТЬСЯ В КОНЦЕ КОДА!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// РЕГИСТРАЦИЯ MIDDLEWARE
// РЕГИСТРАЦИЯ MIDDLEWARE
// РЕГИСТРАЦИЯ MIDDLEWARE






