import Item from "./Item";

function List() {
    return (
        // <> ISSO SÃO OS FRAGMENTS PARA NÃO TER A NECESSIDADE DE INCLUIR UMA DIV
        <>
            <ul>
                <Item marca="Ferrari" anoLancamento={2000} />
                <Item marca="Fiat" anoLancamento={1998} />
                <Item />
            </ul>
        </>
    );
}

export default List;
