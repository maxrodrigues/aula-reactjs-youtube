import "./App.css";
import { useState } from "react";
import SeuNome from "./components/SeuNome";
import Saudacao from "./components/Saudacao";

function App() {
    const [nome, setNome] = useState();

    return (
        <div className="App">
            <h1>State Lift</h1>
            <SeuNome setNome={setNome} />
            <Saudacao nome={nome} />
        </div>
    );
}

export default App;

// O CONCEITO AQUI, É QUE OS COMPONENTES PODEM "COMPARTILHAR"
// DADOS(ESTADOS), FAZENDO DESSA FORMA, QUE É CENTRALIZAR AS
// COISAS NO COMPONENTE PAI.

// NO EXEMPLO ACIMA VEMOS QUE EXISTE UM COMPONENTE ONDE O NOME
// SERÁ DIGITADO, E OUTRO COMṔONENTE RESPONSÁVEL POR GERAR A
// SAUDAÇÃO.

// O NOME DIGITADO NO COMPONENTE "SeuNome" É ENVIADO AO COMPONENTE
// PAI QUE COMPARTILHA COM O "Saudacao", FAZENDO ASSIM COM QUE
// O NOME DIGITADO SEJA IMPRESSO NA SAUDAÇÃO DO OUTRO COMPONENTE
