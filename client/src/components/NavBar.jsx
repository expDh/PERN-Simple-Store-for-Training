import React, { useContext } from 'react';
import { Context } from "../main";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";
import { Button } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import { useNavigate } from 'react-router-dom';  // Заменили useHistory на useNavigate


const NavBar = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate();  // Используем useNavigate для навигации

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
        localStorage.removeItem('token')
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid >
                <NavLink style={{ color: 'white', fontSize: '1.5rem' }} to={SHOP_ROUTE}>КупиДевайс</NavLink>

                <Nav className="ml-auto d-flex" style={{ color: 'white' }}>
                    {user.isAuth ? (
                        <>
                            <Button
                                variant={"outline-light"}
                                onClick={() => navigate(ADMIN_ROUTE)}
                                className="mx-2" // Добавляем отступы между кнопками
                            >
                                Админ панель
                            </Button>
                            <Button
                                variant={"outline-light"}
                                onClick={() => logOut()}
                                className="mx-2" // Добавляем отступы между кнопками
                            >
                                Выйти
                            </Button>
                        </>
                    ) : (
                        <Button
                            variant={"outline-light"}
                            onClick={() => navigate(LOGIN_ROUTE)}
                            className="mx-2" // Добавляем отступы между кнопками
                        >
                            Авторизация
                        </Button>
                    )}
                </Nav>
            </Container>
        </Navbar>
    );
});

export default NavBar;
