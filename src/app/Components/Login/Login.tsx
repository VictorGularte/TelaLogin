import React, { useState } from "react";
import './Login.css';
import { FaUser, FaLock } from "react-icons/fa";

// Define o tipo da propriedade que será passada para o componente Login
type LoginProps = {
    onLogin: (username: string) => void;
};

//onlogin função que vem do componente pai app.tsx. 
const Login: React.FC<LoginProps> = ({ onLogin }) => {
    //cria um estado chamado username e uma função setUsername para atualizar o estado.
    // o useState é usado para criar um estado local no componente Login.
    const [username, setUsername] = useState("");

    //função handleSubmit que é chamada quando o formulário é enviado.
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        //verifica se o campo de nome de usuário não está vazio ou errado.
        if (username.trim()) {
            //se o nome de usuário estiver correto, ele armazena o nome de usuário no localStorage e chama a função onLogin passando o nome de usuário como argumento.
            localStorage.setItem("username", username);
            ///chama a função onLogin passando o nome de usuário como argumento.
            onLogin(username);
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <div className="login-form">
                    <h1>Login</h1>
                    <div className="input-container">
                        <FaUser className="icon" />
                        <input
                            type="text"
                            placeholder="Nome de usuário"
                            //value é o valor do input passando para o estado username.
                            value={username}
                            //onChange é uma função que é chamada sempre que o valor do input é alterado.
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <FaLock className="icon" />
                        <input
                            type="password"
                            placeholder="Senha"
                            disabled // desativa a senha por enquanto, já que o login é fake
                        />
                    </div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Login;
