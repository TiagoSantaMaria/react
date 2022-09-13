import React from 'react'
import ItemCountInNavBar from '../ItemCount/ItemCountInNavBar';
import { AppBar, Typography, Toolbar, Tab, Tabs, Button, CardMedia, useMediaQuery, useTheme } from '@mui/material'
import DrawerComp from '../DrawerComp/DrawerComp';
import { Link } from 'react-router-dom';
//CSS
import './NavBar.css'

const NavBarr = ({img}) => {
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
                                  <Tabs textColor="" sx={{marginLeft:""}}>
                                  <Link className='linksReact' to = {`/`}>
                                    <CardMedia sx={{width:165}}
                                      component="img"
                                      height="65"
                                      image={img}
                                      textColor="black"
                                      alt="hamburguesa"
                                    />
                                  </Link>  
                                  </Tabs>
                                </Tabs>
                              </Typography>
                              <Button sx={{marginLeft:"auto", background:"#004346"}} variant="contained">
                                <ItemCountInNavBar
                                counter="-"
                                />
                              </Button>
                            </>
                          ):(
                            <>
                              <Tabs textColor="" sx={{marginLeft:""}}>
                                <Link className='linksReact' to = {`/`}>
                                  <CardMedia sx={{width:175}}
                                    component="img"
                                    height="70"
                                    image={img}
                                    textColor="black"
                                    alt="hamburguesa"
                                  />
                                </Link> 
                              </Tabs>
                              <Tabs textColor="" sx={{marginLeft:"auto"}}>
                                <Link className='linksReact' to = {`/`}> <Tab label="Inicio"/> </Link>
                                <Link className='linksReact' to = {`/foodmenu`}> <Tab label="Carta"/> </Link>
                                {/* <Tab label="Reserva"/>
                                <Tab label="Ayuda"/> */}
                              </Tabs>
                              <Button sx={{marginLeft:"auto", background:"#004346"}} variant="contained">
                                <ItemCountInNavBar
                                counter="-"
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