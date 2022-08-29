import './App.css';
//COMPONENTS
import Logo from './assets/images/logoSession.png'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className='principal'>
      <div className='navbar'>
        <NavBar
        img={Logo}
        />
      </div>
      <ItemListContainer/>
    </div>
  );
}

export default App;
