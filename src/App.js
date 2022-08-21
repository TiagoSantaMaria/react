import './App.css';
//COMPONENTS
import CardFood from './components/CardFood/CardFood';
import Logo from './assets/images/logoSession.png'
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <div className='principal'>
      <div className='navbar'>
        <NavBar
        img={Logo}
        />
      </div>
      <div className='comida'>
        <CardFood
        name='Hamburguesa Triple'
        img='https://www.clarin.com/img/2021/05/20/Lj4vcOHr__720x0__1.jpg'
        desc='Triple Carne, Panceta y CHEDDAR'
        />
      </div>
    </div>
  );
}

export default App;
