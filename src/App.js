import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/index.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className='App'>
      <main>
        <NavBar/>
        <ItemListContainer greeting={"Bienvenido a la mejor tienda de alfombras"}/>
      </main>
    </div>
  );
}


export default App;
