/* eslint-disable no-unused-vars */
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
  
  const [value, setValue] = React.useState(2);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
                            <div className='navBar'>
                              <div className='logoNavBar'>
                              <Tabs textColor="" sx={{marginLeft:""}}>
                                <Link className='' to = {`/`}>
                                  <CardMedia sx={{width:175}}
                                    component="img"
                                    height="70"
                                    image={img}
                                    textColor="black"
                                    alt="hamburguesa"
                                  />
                                </Link> 
                              </Tabs>
                              </div>
                              <div className='LinksPagesNavBar'>
                                <Tabs>
                                  <Link className='linksReact ' to = {`/`}> <Tab label="Inicio" className=''/> </Link>
                                  <Link className='linksReact' to = {`/foodmenu`}> <Tab label="Carta"/> </Link>
                                  {/* <Tab label="Reserva"/>
                                  <Tab label="Ayuda"/> */}
                                </Tabs>
                              </div>
                              <div className='CountNavBar'>
                                <Link className='linksReact' to = {`/cart`}>
                                <Button sx={{marginLeft:"auto", background:"#004346"}} variant="contained">
                                <ItemCountInNavBar
                                counter="-"
                                />
                                </Button>
                                </Link>
                              </div>
                              </div>
                            </>
                          )
                        }
              </Toolbar>
            </AppBar>
        </React.Fragment>
  )
}

export default NavBarr