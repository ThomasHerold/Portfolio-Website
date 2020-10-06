import React from 'react';
import { Avatar, Box, Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { useStyles } from '../styles/useStyles';
import { menuIcons } from '../utils/icons';
import avatar from '../images/avatar.png';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const SideBarNav = ({ toggleSlider, isSliderHidden }) => {
    const classes = useStyles();
    
    return (
    <Box className={classes.menuSliderContainer} component="div" onClick={() => toggleSlider(isSliderHidden)}>
       <Avatar className={classes.sideNavAvatar} src={avatar} alt="tom-avatar" /> 
       <Divider />
       <List>
       {menuIcons.map((icon, key) => (
         <ListItem button key={key} component={Link} to={icon.path} >
            <ListItemIcon className={classes.listItem}>
                {icon.listIcon}      
            </ListItemIcon>
            <ListItemText className={classes.listItem} primary={icon.listIconText}/>
         </ListItem>   
       ))}   
       </List>
       <Footer />
    </Box>
    );
    
};

export default SideBarNav;