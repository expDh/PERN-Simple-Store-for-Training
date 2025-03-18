// import React, { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Context } from '../main';
// import './styles/NavBar.css';
// import { SHOP_ROUTE } from '../utils/consts';
// import { observable, observe ,observer} from 'mobx';

// const NavBar = observer(() => {
//     const { user } = useContext(Context); // Получаем информацию о пользователе

//     const [show, setShow] = useState(false); // Состояние для отображения/скрытия меню
//     const [hide, setHide] = useState(true);  // Состояние для скрытия/показа

//     const showClick = () => {
//         setShow(!show); // Переключаем видимость меню
//     };

//     const hideClick = () => {
//         setHide(!hide); // Переключаем видимость меню
//     };

//     return (
//         <header className="header">
//             <nav>
//                 <ul style={{ display: show ? 'flex' : 'none' }} className='sidebar'>
//                     <li onClick={showClick}>
//                         <Link>
//                             <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="36px" fill="rgb(31, 32, 32);">
//                                 <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
//                             </svg>
//                         </Link>
//                     </li>
//                     {user.IsAuth ? (
//                         <>
//                             <li><Link to="/vacancy">НеАвторизован</Link></li> {/* Замена "Работа" на "TEXT" */}
//                             <li><Link to="/vacancy">Магазин</Link></li> {/* Замена "Работа" на "TEXT" */}
//                             <li><Link to="/vacancy">Регистрация</Link></li> {/* Замена "Работа" на "TEXT" */}
//                             <li><Link to="/vacancy">Авторизация</Link></li> {/* Замена "Работа" на "TEXT" */}
                            
//                         </>
//                     ) : (
//                         <>
//                             <li><Link to="/vacancy">Авторизован</Link></li>
//                             <li><Link to="/post_vacancy">Магазин</Link></li>
//                             <li><Link to="/post_vacancy">Админ панель</Link></li>
//                             <li><Link to="/login">Выйти</Link></li>
                            

//                         </>
//                     )}
//                 </ul>





//                 <ul style={{ display: hide ? 'flex' : 'none' }}>
//                     <li><Link to={SHOP_ROUTE}>{user.IsAuth ? "НеАвторизован" : "Авторизовн"}</Link></li> {/* Проверка user */}
                    
//                     {!user.IsAuth ? (
//                         <>
//                             <li className="hideOnMobile"><Link to="/post_vacancy">Магазин</Link></li>
//                             <li className="hideOnMobile"><Link to="/login">Регистрация</Link></li>
//                             <li className="hideOnMobile"><Link to="/login">Авторизация</Link></li>
                            
//                         </>
//                     ) : (
//                         <>  
//                             <li className="hideOnMobile"><Link to="/post_vacancy">Магазин</Link></li>
//                             <li className="hideOnMobile"><Link to="/post_vacancy">Админ панель</Link></li>
//                             <li className="hideOnMobile"><Link to="/login">Выход</Link></li>
//                         </>
//                     )}
//                     <li className="menu-button" onClick={showClick}>
//                         <Link>
//                             <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="rgb(31, 32, 32);">
//                                 <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
//                             </svg>
//                         </Link>
//                     </li>
//                 </ul>
//             </nav>
//         </header>
//     );
// });

// export default NavBar;






