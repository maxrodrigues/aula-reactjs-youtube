function Form() {
    function cadastrarUsuario(e) {
        e.preventDefault();

        console.log(`Enviou o form`);
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
                    />
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Digite seu e-mail"
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
