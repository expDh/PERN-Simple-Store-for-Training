import axios from 'axios';

// Настройка axios для обычных запросов (например, для логина, регистрации)
export const host = axios.create({
    baseURL: import.meta.env.VITE_API_URL, // Базовый URL вашего API
    headers: {
        'Content-Type': 'application/json', // Указываем тип контента
    },
});

// Настройка axios для запросов с авторизацией (например, для проверки сессии)
export const authHost = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        'Content-Type': 'multipart/form-data',
    },
});

// Пример того, как можно добавить авторизационные заголовки для authHost
authHost.interceptors.request.use((config) => {
    const token = localStorage.getItem('token'); // Допустим, токен хранится в localStorage
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});





// import axios from "axios";

// export default axios.create({
//     baseURL:"http://localhost:5000/api/user/"
// })
// const host = axios.create({
//     baseURL:"http://localhost:5000/api/user/"
// })

// const authHost = axios.create({
//     baseURL: import.meta.env.VITE_API_URL || "http://localhost:5000"
// })

// const authInterceptor = config => {
//     config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
//     return config
// }

// authHost.interceptors.request.use(authInterceptor)

// export {
//     host,
//     authHost
// }