import React, {useState} from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { AppBar, Typography, Toolbar, Tab, Tabs, Button, CardMedia, useMediaQuery, useTheme } from '@mui/material'
import DrawerComp from '../DrawerComp/DrawerComp';

const NavBarr = ({img}) => {
  const [value=0, setValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
        <React.Fragment>
            <AppBar sx={{background:"white", color:"black"}}>
              <Toolbar>
                        {
                          isMatch ? (
                            <>
                              <Typography>
                              <Tabs textColor="" sx={{marginLeft:""}}>
                                <DrawerComp/>
                                <Tab label= <CardMedia sx={{width:150}}
                                  component="img"
                                  height="60"
                                  image={img}
                                  textColor="black"
                                  alt="hamburguesa"/>/
                                >
                                  
                              </Tabs>
                              </Typography>
                              <Button sx={{marginLeft:"auto", background:"#004346"}} variant="contained">
                                <CartWidget
                                num='10'
                                />
                              </Button>
                            </>
                          ):(
                            <>
                              <Tabs textColor="" sx={{marginLeft:""}}>
                                <Tab label= 
                                  <CardMedia sx={{width:150}}
                                  component="img"
                                  height="60"
                                  image={img}
                                  textColor="black"
                                  alt="hamburguesa"/>/
                                >
                              </Tabs>
                              <Tabs textColor="" sx={{marginLeft:"auto"}} 
                                value={value} 
                                onChange={(e,value)=> setValue(value)} 
                                indicatorColor="secondary">
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
                            </>
                          )
                        }
              </Toolbar>
            </AppBar>
        </React.Fragment>
  )
}

export default NavBarr