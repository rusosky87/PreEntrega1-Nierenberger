import './App.css';
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting={'¡SEAN BIENVENIDOS!'}/>
    </div>
  );
}

export default App;
