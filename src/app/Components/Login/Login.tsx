import React from "react";
import './Login.css';
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
    return (
        <div className="login-container">
            <form action=''>
                <div className="login-form">
                    <h1>Login</h1>
                    <div className="input-container">
                        <FaUser className="icon" />
                        <input type="text" placeholder="Nome de usuário" />
                    </div>
                    <div className="input-container">
                        <FaLock className="icon" />
                        <input type="password" placeholder="Senha" />
                    </div>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
