import Header from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';
import { MenuList } from "@mui/material";
import { NavigationLink } from "./components/NavigationLink/NavigationLink";
import { setAuth } from "./redux/reducer";
import { useDispatch } from "react-redux";


function App() {
    const dispatch = useDispatch();

    const redirectToLogin = () => {
        dispatch(setAuth(false));
    }

    return (
        <div className="App">
            <Header className="Header" position="static" color="inherit">
                <Container className="Container">
                    <nav>
                        <MenuList>
                            <Button variant="outlined" component={"li"}><NavigationLink  to="/">Главная</NavigationLink></Button>{" "}
                            <Button variant="outlined" component={"li"}><NavigationLink  to="/profile">Профиль</NavigationLink></Button>{" "}
                            <Button variant="outlined" component={"li"}><NavigationLink  to="/news">Новости</NavigationLink></Button>{" "}
                            <Button variant="outlined" component={"li"}><NavigationLink  to="/not_found">404</NavigationLink></Button>{" "}
                            <Button variant="outlined" component={"li"}><NavigationLink onClick={redirectToLogin} to="/login">Логин</NavigationLink></Button>
                        </MenuList>
                    </nav>

                </Container>
            </Header>
            <main>
               < Outlet />
            </main>
        </div>
    );
}


export default App;
