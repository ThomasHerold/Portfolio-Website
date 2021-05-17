import mernImg from '../images/MERN.jpg';
import portfolio from '../images/portfolio.png';

export const projects = [
  {
    image: portfolio,
    title: 'Portfolio Website',
    description:
      'Better known as "the website you\'re viewing right this second", this site was built from scratch using primarily React Hooks and Material-UI. Here you will be able to view my resume, additional projects, and email me directly using the Contact Me form. You can view the source code by clicking the link below',
    viewSourceLink: '',
    projectUrl: null,
  },
  {
    image: mernImg,
    title: 'Email Survey',
    description:
      'A MERN stack application that utilizes Passport.js authentication strategies, Stripe API for payments, Sendgrid Mail API, React/Redux concepts and more with the goal of allowing users to create email templates containing surveys that the intended recipients can respond to. This was a project completed as part of a Fullstack Development online curriculum.',
    viewSourceLink:
      'https://github.com/ThomasHerold/Node-with-React-Email-Survey',
    projectUrl: 'https://fast-basin-46258.herokuapp.com/',
  },
  {
    image: '',
    title: 'DevConnector',
    description: '',
    viewSourceLink: '',
    projectUrl: '',
  },
  {
    image: '',
    title: 'Color Picker',
    description: '',
    viewSourceLink: '',
    projectUrl: '',
  },
];
