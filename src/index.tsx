import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/Pages/Main";
import Login from "./components/Pages/Login";
import News from "./components/Pages/News";
import Profile from "./components/Pages/Profile";
import Page_404 from "./components/Pages/Page_404";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Main />} />
                    <Route path="login" element={<Login />} />
                    <Route path="news" element={<News />} />
                    <Route path="profile" element={<Profile/>} />
                    <Route path="*" element={<Page_404/>}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
