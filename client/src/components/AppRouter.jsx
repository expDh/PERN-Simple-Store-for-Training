import React, { useContext } from 'react';
import { Route, Routes,Navigate } from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';
import { SHOP_ROUTE } from '../utils/consts';
import { Context } from '../main';

const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user)
    return (
        <Routes>
            {
                user.isAuth && authRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} exact />
                ))
            }
            {
                publicRoutes.map(({ path, Component }) => (
                    <Route key={path} path={path} element={<Component />} exact />
                ))
            }
             <Route path="*" element={<Navigate to={SHOP_ROUTE} replace />} />
        </Routes>
    );
}

export default AppRouter;





