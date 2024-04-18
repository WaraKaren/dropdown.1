import './App.css';
import { Container } from './components/Container.jsx';
/* import { Search } from './components/Search.jsx'; */

function App() {
  return (
    <div>
      <h1>Realiza tu busqueda segun el codigo</h1>
      <textarea
      className='text'
       placeholder="Ingrese solo números"
      ></textarea>
      <Container />
      <footer>Realizado por Wara Pacajes</footer>
    </div>
  );
}

export default App;