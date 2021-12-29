import React from 'react';
import { useSelector } from "react-redux";
import { AppRootStateType } from "../../redux/store";
import { Navigate } from "react-router-dom";
import { MainStateType } from "../../redux/reducer";
import Container from "@mui/material/Container";

const Profile = () => {
    const state = useSelector<AppRootStateType, MainStateType>((state) => state.main);
    const Login = state.isAuth;
    const name = state.name;

    if(!Login) {
        return <Navigate to="/login"/>
    }

    return (
        <Container>
            <h1>Профиль</h1>
            <p style={{textAlign: "center"}}>меня зовут: <b>{name}</b></p>
        </Container>
    );
};

export default Profile;