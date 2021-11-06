import { useState } from "react";

function Form() {
    const [name, setName] = useState();
    const [password, setPassword] = useState();

    function cadastrarUsuario(e) {
        e.preventDefault();

        console.log(`A senha do ${name} é ${password}`);
    }

    return (
        <div>
            <form onSubmit={cadastrarUsuario}>
                <div>
                    <label htmlFor="nome">Nome</label>
                    <input
                        type="text"
                        name="nome"
                        placeholder="Digite seu nome"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">E-mail</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Digite seu e-mail"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Enviar</button>
                </div>
            </form>
        </div>
    );
}

export default Form;
