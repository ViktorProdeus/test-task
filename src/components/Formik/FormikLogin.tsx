import React, { useState } from "react";
import { useFormik } from "formik";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { setAuth, setName } from "../../redux/reducer";
import { useNavigate } from "react-router-dom";

type ValuesType = {
    name: string,
    password: string,
}

export const FormikLogin = () => {
    const [errorMessage, setErrorMessage] = useState("")
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const redirectToProfile = () => {
        navigate("/profile");
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(1, "Должно быть не менее 1 символа").trim()
            .required("Пожалуйста, введите имя"),
        password: Yup.string()
            .required("Пожалуйста, введите пароль")
            .min(5, "Должно быть более 5 символов"),
        // checkbox: Yup.bool()
        //     .oneOf([true], 'checkbox is required')
    });

    const initialValues = {
        name: '',
        password: '',
    }

    const pushValues = (values: ValuesType) => {
        if(values.name.trim() !== "Admin" || values.password !== "12345") {
            setErrorMessage("Имя пользователя или пароль введены не верно")
        } else {
            dispatch(setName(values.name));
            dispatch(setAuth(true));
            setErrorMessage("")
            values.name = "";
            values.password = "";
            redirectToProfile()
        }
    }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,

        onSubmit: pushValues,
    });

    return (
        <form className="form" onSubmit={formik.handleSubmit}>
            <div className="formField">
                <TextField
                    style={{width: "100%"}}
                    size={"small"}
                    required
                    id="outlined-name-required"
                    label="Admin"
                    name="name"
                    type="text"

                    onChange={formik.handleChange}
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.name && formik.errors.name ? (
                    <span className="errorMessage">{formik.errors.name}</span>
                ) : ""}
            </div>
            <br />
            <div className="formField">
                <TextField
                    required
                    style={{width: "100%"}}
                    size={"small"}
                    id="outlined-password-input"
                    label="12345"
                    type="password"
                    name="password"

                    onChange={formik.handleChange}
                    value={formik.values.password}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.password && formik.errors.password ? (
                    <span className="errorMessage">{formik.errors.password}</span>
                ) : ""}
            </div>
            <br />
            <Button type="submit" variant="contained">отправить</Button>
            <br />
            <br />
            <div className="errorMessage">{errorMessage}</div>
        </form>
    );
};