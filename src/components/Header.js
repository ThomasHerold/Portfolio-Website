import React from 'react';
import SideBarNav from './SideBarNav';
import { useStyles } from '../styles/useStyles';
import { 
    AppBar,  
    Toolbar,
    IconButton,
    Typography,
    Box,
    Drawer,
    Breadcrumbs,
    Grid,
    Hidden
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import useToggleState from '../hooks/useToggleState';
import Particles from 'react-particles-js';
import { withRouter, Link } from 'react-router-dom';
import { menuIcons } from '../utils/icons';

const Header = ({ location }) => {
    const classes = useStyles();
    const [isSliderHidden, toggleSlider] = useToggleState(false);


    return (
    <Box component="nav" style={{ overflow: "hidden" }}>
        <AppBar position="static" style={{ background: "#222" }}>
           <Toolbar>
           <Hidden smUp>
             <IconButton onClick={toggleSlider}>
               <Menu style={{ color: "tomato" }} />                 
             </IconButton>
             <Typography variant="h5" style={{ color: "tan" }} >Portfolio</Typography>
            </Hidden>
             <Grid container justify="center" alignItems="center">
              <Hidden xsDown>
              <Breadcrumbs separator="-" className={classes.breadCrumbs}>
              {menuIcons.map((icon, key) => (
              <IconButton key={key} component={Link} to={icon.path} style={{ color: "tomato" }} >
                {icon.listIcon}
                <Typography variant="subtitle1" style={{ paddingLeft: "5px"}} className={classes.listItem}>{icon.listIconText}</Typography>
              </IconButton>   
             ))}   
              </Breadcrumbs>
              </Hidden>
              </Grid>
             <Drawer open={isSliderHidden} onClose={toggleSlider} anchor="right">
                 <SideBarNav toggleSlider={toggleSlider} isSliderHidden={isSliderHidden} />
             </Drawer>
            </Toolbar>
        </AppBar>
        {location.pathname === "/" ? <Particles
        canvasClassName={classes.particles}
        params={{
          particles: {
            number: {
              value: 45
              },
            shape: {
              type: "circle",
              stroke: {
                width: 1,
                color: "tomato"
              }
            },
            size: {
              value: 8,
              random: true,
              anim: {
                enable: false,
                speed: 6,
                size_min: 0.1,
                sync: false
                }
            },
          }
        }}
      />
    : ""}
        
    </Box>
    );
};

export default withRouter(Header);