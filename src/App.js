import './App.css';
import CartWidget from './components/CartWidget/CartWidget';
import NavBar from './components/Navbar/NavBar';




function App() {
  return (
    <div>
      <NavBar/>
      <CartWidget
      name='Hamburguesa Triple'
      img='https://www.clarin.com/img/2021/05/20/Lj4vcOHr__720x0__1.jpg'
      desc='Triple Carne, Panceta y CHEDDAR'
      />
    </div>
  );
}

export default App;
