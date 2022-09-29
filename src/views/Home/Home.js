import React from 'react'
//Images
import fondoUno from '../../assets/images/comida1.jpeg';
import fondoDos from '../../assets/images/comida2.jpg';
import fondoTres from '../../assets/images/comida3.jpg';
//CSS
import './Home.css'

const Home = () => {
  return (
    <div>
      <div className='acomodoGeneral'>
        <img src={fondoUno} alt='fondoUno' className='acomodoImagenes'/>
        <img src={fondoDos} alt='fondoUno' className='acomodoImagenes'/>
        <img src={fondoTres} alt='fondoUno' className='acomodoImagenes'/>
      </div>
      <div className='descripcionLocal'>
        <p className='titulo'>¿QUIENES SOMOS?</p>
        <p className='descripcion'>Somos un Restaurante Bar "Session", en la ciudad de Pergamino, que ofrece a sus clientes, una exquisita gastronomía internacional, y nacional, con platos innovadores, decorados con creatividad y buen gusto, sus bebidas marcan la diferencia por el diseño de sus copas, sus decoración y sus mezclas, se cuenta con zona de entretenimiento, donde adultos y niños, logran divertirse y pasar un rato agradable, antes de continuar con sus labores cotidianas. Los fines de semana, Session, ofrece a sus clientes: viernes de karaoke, rumba con artistas en vivo, y sábados de cine foro.</p>
      </div>
    </div>
    
  )
}

export default Home