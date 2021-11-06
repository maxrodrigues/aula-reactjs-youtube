import { useState } from "react";

function Condicional() {
    const [email, setEmail] = useState();
    const [userEmail, setUserEmail] = useState();

    function enviarEmail(e) {
        e.preventDefault();
        setUserEmail(email);
    }

    function limparEmail() {
        setUserEmail("");
    }

    return (
        <>
            <h2>Cadastre seu e-mail</h2>
            <form>
                <input
                    type="email"
                    name="email"
                    placeholder="Digite seu e-mail"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" onClick={enviarEmail}>
                    Enviar e-mail
                </button>
                <button onClick={limparEmail} type="reset">
                    Limpar e-mail
                </button>
                {userEmail && (
                    <div>
                        <p>O email do usuário é {userEmail}</p>
                    </div>
                )}
            </form>
        </>
    );
}

export default Condicional;
