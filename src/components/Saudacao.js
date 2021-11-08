function Saudacao({ nome }) {
    function gerarSaudacao(algumNome) {
        return `Olá ${algumNome}, tudo bem? Seja bem-vindo!`;
    }

    return <>{nome && <p>{gerarSaudacao(nome)}</p>}</>;
}

export default Saudacao;
