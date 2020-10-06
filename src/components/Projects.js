import React from 'react';
import { Fade } from 'react-reveal';
import { Box, Grid, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';
import { projects } from '../utils/projects';
import { useStyles } from '../styles/useStyles';

const Projects = () => {
    const classes = useStyles();

    return (
        <Box component="div" className={classes.portfolioContainer}>
        <Grid container direction="row">
            {projects.map((project, key) => (
            <Grid item xs={12} sm={12} md={6} style={{ boxShadow: "0px 0px 1px tomato" }}>
            <Fade left>
             <Card key={key} className={`${classes.cardContainer} ${classes.float}`}>
                <CardMedia component="img" alt={project.title} height="205" image={project.image} style={{ borderRadius: "inherit" }} />
                    <CardContent>
                        <Typography gutterBottom variant="h5">
                            {project.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {project.description}
                        </Typography>
                        </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" onClick={() => window.open(project.viewSourceLink, "_blank")}>
                            View Source
                        </Button>
                        {
                        project.projectUrl !== null ?
                        <Button size="small" color="primary" onClick={() => window.open(project.projectUrl, "_blank")}>
                            Live Demo
                        </Button> : null
                        }
                    </CardActions>
                </Card>
                
                </Fade>
                </Grid>
             ))}
            </Grid> 
        </Box>
    );
};

export default Projects;
