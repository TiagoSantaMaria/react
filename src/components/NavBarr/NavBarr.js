import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

import { AppBar, Typography, Toolbar, Tab, Tabs, Button, CardMedia} from '@mui/material'



const NavBarr = ({img}) => {
  return (
        <React.Fragment>
            <AppBar sx={{background:"white", color:"black"}}>
              <Toolbar>
                <Tabs textColor="" sx={{marginLeft:""}}>
                  <Tab label= <CardMedia sx={{width:150}}
                    component="img"
                    height="60"
                    image={img}
                    textColor="black"
                    alt="hamburguesa"/>/>
                </Tabs>
                <Tabs textColor="" sx={{marginLeft:"auto"}}>
                  <Tab label="Inicio"/>
                  <Tab label="Carta"/>
                  <Tab label="Reserva"/>
                  <Tab label="Ayuda"/>
                </Tabs>

                <Button sx={{marginLeft:"auto", background:"#004346"}} variant="contained">
                  <CartWidget
                  num='10'
                  />
                </Button>
              </Toolbar>
            </AppBar>
        </React.Fragment>
  )
}

export default NavBarr