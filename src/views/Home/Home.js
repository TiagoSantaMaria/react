import React from 'react'
//Images
import fondoUno from '../../assets/images/comida1.jpeg';
import fondoDos from '../../assets/images/comida2.jpg';
import fondoTres from '../../assets/images/comida3.jpg';
//CSS
import './Home.css'

const Home = () => {
  return (
    <div className='acomodoGeneral'>
        <div className='acomodarWidth'>
            <img src={fondoUno} alt='fondoUno' className='acomodoImagenes'/>
            <img src={fondoDos} alt='fondoUno' className='acomodoImagenes'/>
            <img src={fondoTres} alt='fondoUno' className='acomodoImagenes'/>
        </div>
    </div>
  )
}

export default Home