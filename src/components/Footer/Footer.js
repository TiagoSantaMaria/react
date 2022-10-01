import React from 'react'

//Logos
import logoFacebook from "../../assets/images/logoFacebook.png"
import logoMap from "../../assets/images/logoMap.png"
import logoInstagram from "../../assets/images/logoInstagram.png"

//CSS
import './Footer.css'

const Footer = () => {
return (
    <div className='divPadreFooter'>
        <div className='divHorariosFooter'>
            <p>Horarios</p>
            <p>Lunes a Sabados: 12hs - 16hs y 20hs - 24hs</p>
            <p>Domingos: 20hs - 23hs</p>
        </div>
        <div className='divDireccionFooter'>
            <p>Dirección</p>
            <p>Alvear 752 - Pergamino - Buenos Aires</p>
        </div>
        <div className='divRedesFooter divRedesImagenFooter'>
            <p>Nuestrar Redes</p>
            <a href='https://www.facebook.com/SessionHausPergamino' target='_blanck'><img src={logoFacebook} alt='logoFacebook'/></a>
            <a href='https://www.google.com.ar/maps/search/sesion+peergamino/@-33.8951649,-60.5731706,18z' target='_black'><img src={logoMap} alt='logoMap'/></a>
            <a href='https://www.instagram.com/sessionhaus/' target='_black'><img src={logoInstagram} alt='logoInstagram'/></a>
        </div>
    </div>
  )
}

export default Footer