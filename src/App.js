import './App.css';
//COMPONENTS
import CardFood from './components/CardFood/CardFood';
import NavBar from './components/Navbar/NavBar';
import Logo from './assets/images/logoSession.png'
import NavBarr from './components/NavBarr/NavBarr';

function App() {
  return (
    <div>
      <NavBarr
      img={Logo}
      />
    </div>
  );
}

export default App;
