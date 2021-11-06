import "./App.css";
import Pessoa from "./components/Pessoa";
import Frase from "./components/Frase";

function App() {
    return (
        <div className="App">
            <Pessoa
                nome="Maxuel Rodrigues"
                idade="34"
                profissao="FullStack"
                foto="https://via.placeholder.com/150"
            />

            <Frase />
        </div>
    );
}

export default App;
