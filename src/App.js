import './App.css';
import HelloWorld from './components/HelloWord'
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';

function App() {
    const name = "Maria";

  return (
    <div className="App">
          <Pessoa nome="Maxuel Rodrigues" idade="34" profissao="FullStack" foto="https://via.placeholder.com/150" />
    </div>
  );
}

export default App;
