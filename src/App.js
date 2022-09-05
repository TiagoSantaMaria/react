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

function App() {
  return (
    <Router>
      <NavBar img={Logo}/>
      

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/foodmenu' element={<FoodMenu/>} />
        <Route path='/detail/:id' element={<CharacterDetail/>} />
      </Routes>

    </Router>



  );
}

export default App;
