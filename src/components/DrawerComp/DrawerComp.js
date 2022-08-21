import React, { useState } from 'react'
import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

const DrawerComp = () => {
    const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <React.Fragment>
        <Drawer open={openDrawer}
        onClose={()=>setOpenDrawer(false)}
        >
            <List>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText sx={{color:"black"}}>Inicio</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText sx={{color:"black"}}>Carta</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText sx={{color:"black"}}>Reserva</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText sx={{color:"black"}}>Ayuda</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
            </List>
        </Drawer>
        <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
            <MenuIcon sx={{color:"black"}} />
        </IconButton>
    </React.Fragment>

  )
}

export default DrawerComp