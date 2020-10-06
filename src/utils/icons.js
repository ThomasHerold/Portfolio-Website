import React from 'react';
import { 
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from '@material-ui/icons';

export const menuIcons = [
    {
        listIcon: <Home />,
        listIconText: "Home",
        path: "/"
    },
    {
        listIcon: <AssignmentInd />,
        listIconText: "Resume",
        path: "/resume"
    },
    {
        listIcon: <Apps />,
        listIconText: "Projects",
        path: "/projects"
    },
    {
        listIcon: <ContactMail />,
        listIconText: "Contact",
        path: "/contact"
    },
];