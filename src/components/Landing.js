import React from 'react';
import avatar from '../images/avatar.png';
import { useStyles } from '../styles/useStyles';
import { Button, Avatar, Typography, Box } from '@material-ui/core';
import Typed from 'react-typed';
import { GitHub, LinkedIn } from '@material-ui/icons';
import { linkedInUrl, gitHubUrl } from '../utils/constants';



const Landing = () => {
    const classes = useStyles();

    return (
      <Box className={classes.homeContainer}>
        <Avatar className={classes.homeAvatar} src={avatar} alt="tom-avatar" />
        <Typography variant="h4" className={classes.title}>Thomas Herold</Typography>
        <Typography variant="h5" className={classes.subtitle}>
          <Typed strings={["Front-End Developer", "React Framework Focus", "MERN Stack Experience"]} 
            typeSpeed={40}
            backSpeed={50} 
            loop
          />
        </Typography>
        <Box component="div" className={classes.landingButtons}>
          <Button className={classes.homeButton} variant="contained" endIcon={<GitHub/>} onClick={() => window.open(gitHubUrl, "_blank")}>GitHub</Button>
          <Button className={classes.homeButton} variant="contained" endIcon={<LinkedIn/>} onClick={() => window.open(linkedInUrl, "_blank")}>LinkedIn</Button>
        </Box> 
      </Box>
    );
};

export default Landing;