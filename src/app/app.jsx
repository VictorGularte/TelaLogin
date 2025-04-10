import React, { useState } from "react";
import Login from "./pages/Login";

function App() {
    //cria um estado chamado  user e uma função para atualizar esse estado que é atualizada pelo componente Login.
    const [user, setUser] = useState(localStorage.getItem("username"));

    //função passada como propriedade para o componente Login que é chamada quando o usuário faz login.
    const handleLogin = (username) => {
        setUser(username);
    };

    return (
        <>
            {/* se o usuário não estiver logado, renderiza o componente Login, caso contrário, renderiza o componente Tarefas */}
            {!user ? (
                <Login onLogin={handleLogin} />
            ) : (
                <div>
                    <h2>Bem-vindo, {user}!</h2>
                    {/* aqui você pode mostrar a lista de tarefas */}
                </div>
            )}
        </>
    );
}

export default App;
