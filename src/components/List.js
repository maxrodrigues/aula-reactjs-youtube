import Item from "./Item";

function List() {
    return (
        // <> ISSO SÃO OS FRAGMENTS PARA NÃO TER A NECESSIDADE DE INCLUIR UMA DIV
        <>
            <ul>
                <Item marca="Ferrari" />
                <Item marca="Fiat" />
            </ul>
        </>
    );
}

export default List;
