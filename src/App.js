import './App.css';

//COMPONENTS
import Logo from './assets/images/logoSession.png'
import NavBar from './components/Navbar/NavBar';
import Footer from './components/Footer/Footer';

// REACT ROUTER DOM
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

// VIEWS
import Home from './views/Home/Home';
import FoodMenu from './views/FoodMenu/FoodMenu';
import CharacterDetail from './views/CharacterDetail/CharacterDetail';
import Cart from './views/Cart/Cart'
import FoodCategory from './views/FoodCategory/FoodCategory';

// CONTEXT
import { ItemsProvider } from './components/Context/ItemsContext';
import { CounterProvider } from './components/Context/CounterContext';
import { OrderFoodProvider } from './components/Context/OrderFoodContext';


function App() {
  return (
    <Router>
      <ItemsProvider>
        <OrderFoodProvider>
          <CounterProvider>
            <NavBar img={Logo}/>
              <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/foodmenu' element={<FoodMenu/>} />
                <Route path='/detail/:id' element={<CharacterDetail/>} />
                <Route path='/foodcategory/:category' element={<FoodCategory/>} />
                <Route path='/cart' element={<Cart/>} />
              </Routes>
            <Footer/>
          </CounterProvider>
        </OrderFoodProvider>
      </ItemsProvider>
    </Router>
  );
}

export default App;
