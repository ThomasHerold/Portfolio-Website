import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  '@keyframes load': {
    from: { width: '0%' },
  },
  '@-webkit-keyframes load': {
    from: { width: '0%' },
  },
  '@-moz-keyframes load': {
    from: { width: '0%' },
  },
  '@-o-keyframes load': {
    from: { width: '0%' },
  },
  menuSliderContainer: {
    width: 250,
    background: '#511',
    height: '100%',
  },
  sideNavAvatar: {
    display: 'block',
    margin: '0.5rem auto',
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
  listItem: {
    color: 'tan',
  },
  homeAvatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: '150px 0 20px 0',
  },
  title: {
    color: 'tomato',
    margin: theme.spacing(1),
    zIndex: '1',
  },
  subtitle: {
    color: 'tan',
    marginBottom: '3rem',
    zIndex: '1',
  },
  homeContainer: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  particles: {
    position: 'absolute',
  },
  resumeContainer: {
    background: '#233',
    width: '100%',
    padding: '1rem',
    height: '100%',
  },
  portfolioContainer: {
    background: '#233',
    height: '100%',
  },
  cardContainer: {
    maxWidth: 345,
    margin: '5rem auto',
  },
  breadCrumbs: {
    color: theme.palette.common.white,
  },
  inputField: {
    '& label.Mui-focused': {
      color: 'tomato',
    },
    '& label': {
      color: 'tan',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'tan',
      },
      '&:hover fieldset': {
        borderColor: 'tan',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'tan',
      },
    },
  },
  formContainer: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  button: {
    marginTop: '1rem',
    color: 'white',
    background: 'tomato',
  },
  footer: {
    width: 'inherit',
    position: 'fixed',
    bottom: '0',
  },
  footerAction: {
    ' & .MuiBottomNavigationAction-root': {
      minWidth: '0',
      maxWidth: '250',
    },
    '& .MuiSvgIcon-root': {
      fill: 'tan',
      '&:hover': {
        fill: 'tomato',
        fontSize: '1.8rem',
      },
    },
  },
  svgIcon: {
    fontSize: '80px',
    width: '100px',
    height: '100px',
    background: 'tomato',
    color: 'white',
    marginBottom: '15px',
    boxShadow: '0px 0px 6px tan',
  },
  landingButtons: {
    display: 'flex',
    alignItems: 'center',
    direction: 'row',
  },
  homeButton: {
    margin: '50px 20px 0 20px',
    color: 'white',
    background: 'tomato',
    width: '40%',
  },
  list: {
    color: 'tan',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
    [theme.breakpoints.up('md')]: {
      width: '50%',
    },
  },
  listIcon: {
    height: '25px',
    width: '25px',
    color: 'tomato',
  },
  borderBox: {
    boxShadow: '0px 0px 8px tan',
    borderRadius: '25px',
    padding: '15px',
    marginBottom: '50px',
    width: '90%',
  },
  skills: {
    width: '75%',
    display: 'flex',
    justifyContent: 'flex-start',
    textAlign: 'left',
    backgroundColor: '#233',
    padding: '2px',
    borderRadius: '15px',
    marginBottom: '10px',
    fontSize: '14px',
    color: 'tan',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
    },
    '&:before': {
      content: 'attr(data-skill)',
      backgroundColor: '#233',
      display: 'inline-block',
      padding: '5px 0 5px 10px',
      borderRadius: 'inherit',
      animation: '$load 4s 0s',
      webkitAnimation: '$load 2s 0s',
      mozAnimation: '$load 2s 0s',
      oAnimation: '$load 2s 0s',
    },
    '&:after': {
      content: 'attr(data-percent)',
      margin: 'auto 0',
      paddingLeft: '10px',
    },
    '&$learning': {
      '&:before': {
        width: 'calc(20% - 10px)',
        boxShadow: '0px 0px 3px tomato',
      },
    },
    '&$basic': {
      '&:before': {
        width: 'calc(40% - 10px)',
        boxShadow: '0px 0px 3px tomato',
      },
    },
    '&$intermediate': {
      '&:before': {
        width: 'calc(60% - 10px)',
        boxShadow: '0px 0px 3px tomato',
      },
    },
    '&$advanced': {
      '&:before': {
        width: 'calc(80% - 10px)',
        boxShadow: '0px 0px 3px tomato',
      },
    },
    '&$expert': {
      '&:before': {
        width: 'calc(100% - 10px)',
        boxShadow: '0px 0px 3px tomato',
      },
    },
  },
  learning: {},
  basic: {},
  intermediate: {},
  advanced: {},
  expert: {},
  float: {
    boxShadow: '0px 0px 8px tan',
    top: '0px',
    transition: 'all 0.5s ease',
    '&:hover': {
      boxShadow: '0 80px 50px -60px tomato',
      position: 'relative',
      top: '-10px',
    },
  },
}));
