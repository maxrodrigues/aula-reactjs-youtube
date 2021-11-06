import PropTypes from "prop-types";

function Item({ marca, anoLancamento }) {
    return (
        <>
            <li>
                {marca} - {anoLancamento}
            </li>
        </>
    );
}

// INSERINDO OS TIPOS DAS VARIAVEIS NAS PROPS
Item.propTypes = {
    marca: PropTypes.string.isRequired,
    anoLancamento: PropTypes.number,
};

// INSERINDO VALOR DEFAULT PARA AS PROPS
Item.defaultProps = {
    marca: "Faltou a Marca",
    anoLancamento: 1899,
};

export default Item;
