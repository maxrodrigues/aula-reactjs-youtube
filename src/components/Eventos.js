import Button from "./evento/Button";

function Eventos() {
    function meuEvento() {
        console.log(`Ativando primeiro evento`);
    }

    function segundoEvento() {
        console.log(`Ativando segundo evento`);
    }

    return (
        <div>
            <p>Clique para ativar o eventos.</p>
            <Button text="Meu evento" event={meuEvento} />
            <Button text="Meu evento" event={segundoEvento} />
        </div>
    );
}

export default Eventos;
