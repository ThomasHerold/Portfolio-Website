import React from 'react';
import { useStyles } from '../styles/useStyles';
import { Typography, Box, Grid, Avatar, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { SchoolRounded, Work, ArrowRight, Code } from '@material-ui/icons';
import { Fade } from 'react-reveal';
import useToggleState from '../hooks/useToggleState';

const Resume = () => {
   const classes = useStyles();
   const [isVisible, toggleIsVisible] = useToggleState(false);
   
   return (
   <Grid container className={classes.resumeContainer}>
      <Grid item xs={12} align="center">
          <Box>
          <Fade left>
            <Avatar className={classes.svgIcon}><Work fontSize="inherit" /></Avatar>
            <Typography variant="h2" className={classes.title}>WORK EXPERIENCE</Typography>
            <Typography variant="h4" className={classes.subtitle}>Lead Frontend Business Analyst</Typography>
            <Typography variant="h6" className={classes.subtitle}>March 2017 - Present</Typography>
            <List className={`${classes.list} ${classes.borderBox}`}>
               <ListItem>
                  <ListItemIcon className={classes.listIcon}><ArrowRight /></ListItemIcon>
                   <ListItemText primary="Developing system requirements, process flows, and user acceptance testing plans for enterprise-level web applications" />
               </ListItem>
               <ListItem>
                  <ListItemIcon className={classes.listIcon}><ArrowRight /></ListItemIcon>
                   <ListItemText primary="Working closely with the Lead Web Developer to identify points of improvement to optimize performance and user experience" />
               </ListItem>
               <ListItem>
                  <ListItemIcon className={classes.listIcon}><ArrowRight /></ListItemIcon>
                   <ListItemText primary="Leading a team of associate QA analysts with the goal of defining and documenting use case scenarios to ensure robust business logic" />
               </ListItem>
               <ListItem>
                  <ListItemIcon className={classes.listIcon}><ArrowRight /></ListItemIcon>
                   <ListItemText primary="Author and contributor to over 30+ documents to codify standard operating procedures" />
               </ListItem>
            </List>
            <Avatar className={classes.svgIcon}><Code fontSize="inherit" /></Avatar>
            <Typography variant="h2" className={classes.title}>SKILLS</Typography>
            <Typography variant="h4" className={classes.subtitle}></Typography>
            </Fade>
            <Fade left onReveal={toggleIsVisible}>
            <Box className={classes.borderBox}>
               <div className={isVisible ? `${classes.skills} ${classes.basic}` : ""} data-skill="Node.js" data-percent="Novice"></div>
               <div className={isVisible ? `${classes.skills} ${classes.basic}` : ""} data-skill="Express.js" data-percent="Novice"></div>
               <div className={isVisible ? `${classes.skills} ${classes.intermediate}` : ""} data-skill="CSS" data-percent="Intermediate"></div>
               <div className={isVisible ? `${classes.skills} ${classes.intermediate}` : ""} data-skill="SQL" data-percent="Intermediate"></div>
               <div className={isVisible ? `${classes.skills} ${classes.advanced}` : ""} data-skill="React" data-percent="Advanced"></div>
               <div className={isVisible ? `${classes.skills} ${classes.advanced}` : ""} data-skill="Javascript" data-percent="Advanced"></div>
               <div className={isVisible ? `${classes.skills} ${classes.advanced}` : ""} data-skill="HTML" data-percent="Advanced"></div>
             </Box>
             </Fade>
             <Fade left>
            <Avatar className={classes.svgIcon}><SchoolRounded fontSize="inherit" /></Avatar>
            <Typography variant="h2" className={classes.title}>EDUCATION</Typography>
            <Typography variant="h4" className={classes.subtitle}>CUNY College of Staten Island Bacehlor of Computer Science</Typography>
            <Typography variant="h6" className={classes.subtitle}>Fall Semester 2013 - Winter Semester 2017</Typography>
            <List className={`${classes.list} ${classes.borderBox}`}>
               <ListItem>
                  <ListItemIcon className={classes.listIcon}><ArrowRight /></ListItemIcon>
                   <ListItemText primary="Relevant courses include Analysis of Algorithms, Data Structures, Object Oriented Programming and Database Design Theory" />
               </ListItem>
               <ListItem>
                  <ListItemIcon className={classes.listIcon}><ArrowRight /></ListItemIcon>
                   <ListItemText primary="Graduated with a 3.2GPA overall from an ABET-accredited program" />
               </ListItem>
               <ListItem>
                  <ListItemIcon className={classes.listIcon}><ArrowRight /></ListItemIcon>
                   <ListItemText primary="Dean's List recipient through the 2016 and 2017 academic years" />
               </ListItem>
            </List>
            </Fade>
         </Box>
      </Grid>
    </Grid>
    );
};

export default Resume;