import React from "react";
import { Button, TextField, Grid, Container } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      marginTop:'5rem'
    },
  });

function SignUp() {
    return (
        <Container className={useStyles.root} maxWidth="sm">
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    {" "}
                    <TextField  fullWidth id="outlined-basic" label="Email" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth  id="outlined-basic" label="Password" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                    {" "}
                    <TextField fullWidth 
                        id="outlined-basic"
                        label="Display Name"
                        variant="outlined"
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button  fullWidth variant="contained" color="primary">
                       SignUp
          </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button  fullWidth variant="contained" color="primary">
                        Sign Up With Google
          </Button>
                </Grid>
            </Grid>
        </Container>
    );
}

export { SignUp };
