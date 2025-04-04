import React, { useState, useContext } from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap';
import { Navigate, NavLink, useLocation, } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts';
import { login, registration, check } from '../http/userApi';
import { observer } from 'mobx-react-lite';
import { Context } from "../main";
import { useNavigate } from "react-router-dom"

const Auth = observer(() => {
    const { user } = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const click = async () => {
        try {


            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(user)
            user.setIsAuth(true)
            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }


    }


    return (
        <Container className='d-flex justify-content-center align-items-center'
            style={{ height: window.innerHeight - 54 }}>
            <Card style={{ width: 600 }} className='p-5'>
                <h2 className='m-auto'>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control type='email' placeholder='Введите ваш email...' className='mt-3' value={email} onChange={e => setEmail(e.target.value)} />
                    <Form.Control type='password' placeholder='Введите ваш пароль...' className='mt-3' value={password} onChange={e => setPassword(e.target.value)} />
                    <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
                        {isLogin ?
                            <Button className='mt-3' variant={"outline-success"} onClick={click}>Войти</Button>
                            :
                            <Button className='mt-3' variant={"outline-success"} onClick={click}>Зарегистрироваться</Button>
                        }
                        {isLogin ?
                            <div className='mt-3 '>Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink></div>
                            :
                            <div className='mt-3 '>Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink></div>
                        }
                        {/* <Button
                        variant={'outline-success'}
                        onClick={click}
                        >
                            {isLogin ? 'Войти':'Регистрация'}
                        </Button> */}
                    </Row>
                </Form>



            </Card>
        </Container>
    );
})

export default Auth;
