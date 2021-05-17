import React from 'react';
import { useStyles } from '../styles/useStyles';
import {
  TextField,
  Typography,
  Button,
  Grid,
  Box,
  Snackbar,
  IconButton,
} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Close from '@material-ui/icons/Close';
import useToggleState from '../hooks/useToggleState';
import useInputState from '../hooks/useInputState';

const Contact = () => {
  const classes = useStyles();
  const [open, toggleSnackbar] = useToggleState();
  const [fields, setFields, reset] = useInputState({
    name: '',
    email: '',
    company: '',
    body: '',
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();

    reset();
    // try {
    // //   dispatch({ type: 'SEND_EMAIL', payload: { ...state } });
    // //   dispatch({ type: 'RESET_INPUT', payload: initialState });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <Box component='div' style={{ background: '#233', height: '100vh' }}>
      <Grid container justify='center'>
        <Box
          component='form'
          className={classes.formContainer}
          onSubmit={handleSubmit}
          style={{
            boxShadow: '0px 0px 8px tan',
            padding: '2rem',
            borderRadius: '15px',
          }}
        >
          <Typography
            variant='h5'
            style={{ color: 'tomato', textAlign: 'center' }}
          >
            Email Me Directly
          </Typography>
          <TextField
            className={classes.inputField}
            name='name'
            value={fields.name}
            onChange={setFields}
            fullWidth
            label='Name'
            variant='outlined'
            margin='dense'
            size='medium'
            required
            inputProps={{ style: { color: 'white' } }}
          />
          <TextField
            className={classes.inputField}
            name='email'
            value={fields.email}
            onChange={setFields}
            fullWidth
            label='Email'
            variant='outlined'
            margin='dense'
            size='medium'
            required
            inputProps={{ style: { color: 'white' } }}
          />
          <TextField
            className={classes.inputField}
            name='company'
            value={fields.company}
            onChange={setFields}
            fullWidth
            label='Company'
            variant='outlined'
            margin='dense'
            size='medium'
            required
            inputProps={{ style: { color: 'white' } }}
          />
          <TextField
            className={classes.inputField}
            name='body'
            value={fields.body}
            onChange={setFields}
            fullWidth
            label='Message'
            variant='outlined'
            multiline
            rowsMax={22}
            margin='dense'
            size='medium'
            required
            inputProps={{ style: { color: 'white' } }}
          />
          <Button
            className={classes.button}
            variant='contained'
            type='submit'
            fullWidth
            endIcon={<SendIcon />}
          >
            Contact Me
          </Button>
        </Box>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={open}
        autoHideDuration={3000}
        onClose={toggleSnackbar}
        message={<span id='message-id'>Test</span>}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        action={[
          <IconButton
            onClick={toggleSnackbar}
            color='inherit'
            key='close'
            aria-label='close'
          >
            <Close />
          </IconButton>,
        ]}
      />
    </Box>
  );
};

export default Contact;
