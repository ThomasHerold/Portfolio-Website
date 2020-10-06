import React from 'react';
import { useStyles } from '../styles/useStyles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import { GitHub, LinkedIn } from '@material-ui/icons';
import { gitHubUrl, linkedInUrl } from '../utils/constants';

const Footer = () => {
    const classes = useStyles();

    return (
        <BottomNavigation className={classes.footer} width="auto" style={{ background: "#222"}}>
            <BottomNavigationAction 
                className={classes.footerAction}
                style={{ padding: 0 }}
                icon={<GitHub style={{ color: "white" }} />}
                onClick={() => window.open(gitHubUrl, "_blank")}
            />
            <BottomNavigationAction
                className={classes.footerAction} 
                style={{ padding: 0 }}
                icon={<LinkedIn />}
                onClick={() => window.open(linkedInUrl, "_blank")}
            />
        </BottomNavigation>
    );
};

export default Footer;