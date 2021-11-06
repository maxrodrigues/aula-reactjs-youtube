import './App.css';
import HelloWorld from './components/HelloWord'

function App() {

  const name = 'Max Rodrigues';
  const newName = name.toUpperCase();

  function sum(a, b) {
    return a + b;
  }

  const url = 'https://via.placeholder.com/150';

  return (
    <div className="App">
      <h1>Olá React</h1>
      <p>Meu primeiro app</p>
      <p>Olá {newName}</p>
      <p>Soma: {sum(2, 2)}</p>

      <img src={url} alt="Minha imagem"/>
    </div>
  );
}

export default App;
