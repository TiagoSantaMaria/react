import './App.css';
//COMPONENTS
import CardFood from './components/CardFood/CardFood';
import NavBar from './components/Navbar/NavBar';
import Logo from './assets/images/logoSession.png'

function App() {
  return (
    <div>
      <NavBar
      img={Logo}
      />
      <CardFood
      name='Hamburguesa Triple'
      img='https://www.clarin.com/img/2021/05/20/Lj4vcOHr__720x0__1.jpg'
      desc='Triple Carne, Panceta y CHEDDAR'
      />
    </div>
  );
}

export default App;
