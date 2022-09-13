import './App.css';

//COMPONENTS
import Logo from './assets/images/logoSession.png'
import NavBar from './components/NavBar/NavBar';

// REACT ROUTER DOM
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// VIEWS
import Home from './views/Home/Home';
import FoodMenu from './views/FoodMenu/FoodMenu';
import CharacterDetail from './views/CharacterDetail/CharacterDetail';
import Cart from './views/Cart/Cart'

function App() {
    // Declaracion PEDIDO CLIENTE
    const orderFood = []
  return (
    <Router>
      <NavBar img={Logo}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/foodmenu' element={<FoodMenu orderFood={orderFood}/>} />
        <Route path='/detail/:id' element={<CharacterDetail/>} />
        <Route path='/cart' element={<Cart orderFood={orderFood}/>} />
      </Routes>
    </Router>
  );
}

export default App;
