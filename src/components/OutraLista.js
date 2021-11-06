function OutraLista({ itens }) {
    return (
        <>
            <h2>Lista de coisas boas</h2>
            {itens.length > 0 ? (
                itens.map((item, index) => {
                    return <p key={index}>{item}</p>;
                })
            ) : (
                <p>Não tem coisa boa aqui</p>
            )}
        </>
    );
}

export default OutraLista;
