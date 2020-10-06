import React, { useReducer } from 'react';
import { useStyles } from '../styles/useStyles';
import { TextField, Typography, Button, Grid, Box, Snackbar, IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import Close from '@material-ui/icons/Close';
import { reducer } from '../reducers/inputReducer';
import useToggleState from '../hooks/useToggleState';

const initialState = { 
    name: "",
    email: "",
    company: "",
    body: ""
};

const Contact = () => {
    const classes = useStyles();
    const [open, toggleSnackbar] = useToggleState();
    const [state, dispatch] = useReducer(reducer, initialState);
    const { name, email, company, body } = state;

    const handleChange = (evt) => {
        dispatch({ type: "UPDATE_INPUT", payload: {field: evt.target.name, value: evt.target.value} });
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        try {
            dispatch({ type: "SEND_EMAIL", payload: {...state} })
            dispatch({ type: "RESET_INPUT", payload: initialState }); 
        } catch (error) {
            console.log(error);
        }
        
    }; 

    return (
        <Box component="div" style={{ background: "#233", height: "100vh" }}>
            <Grid container justify="center" >
                <Box component="form" className={classes.formContainer} onSubmit={handleSubmit} style={{ boxShadow: "0px 0px 8px tan", padding: "2rem", borderRadius: "15px" }}>
                    <Typography variant="h5" style={{ color: "tomato", textAlign: "center" }}>
                        Email Me Directly
                    </Typography>
                    <TextField className={classes.inputField} name="name" value={name} onChange={handleChange} 
                        fullWidth label="Name" variant="outlined" margin="dense" size="medium" required
                        inputProps={{ style: { color: "white"}}}/>
                    <TextField className={classes.inputField} name="email" value={email} onChange={handleChange} 
                        fullWidth label="Email" variant="outlined" margin="dense" size="medium" required
                        inputProps={{ style: { color: "white"}}} />
                    <TextField className={classes.inputField} name="company" value={company} onChange={handleChange} 
                        fullWidth label="Company" variant="outlined" margin="dense" size="medium" required
                        inputProps={{ style: { color: "white"}}} />
                    <TextField className={classes.inputField} name="body" value={body} onChange={handleChange} 
                        fullWidth label="Message" variant="outlined" multiline rowsMax={22} margin="dense" size="medium" required
                        inputProps={{ style: { color: "white" }}} />
                    <Button className={classes.button} variant="contained" type="submit" fullWidth endIcon={<SendIcon/>}>Contact Me</Button>
                </Box>
            </Grid>
            <Snackbar 
                anchorOrigin={{vertical: "bottom", horizontal: "left"}} 
                open={open} 
                autoHideDuration={3000}
                onClose={toggleSnackbar} 
                message={<span id="message-id">Test</span>}
                ContentProps={{
                    "aria-describedby": "message-id"
                }}
                action={[
                    <IconButton onClick={toggleSnackbar} color="inherit" key="close" aria-label="close">
                        <Close />
                    </IconButton>
                ]} 
            />
        </Box>
    );
};

export default Contact;