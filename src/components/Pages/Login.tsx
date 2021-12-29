import React from 'react';
import Container from "@mui/material/Container";
import { FormikLogin } from "../Formik/FormikLogin";

const Login = () => {

    return (
        <Container>
            <h1>Логин</h1>

            <FormikLogin/>
        </Container>
    );
};

export default Login; 