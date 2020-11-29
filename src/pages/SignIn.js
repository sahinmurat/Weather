import React from "react";
import { Container, Grid, TextField, Button } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";
import {AccountBox, Email} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: "10rem",
  },
  
}));

export function SignIn() {
  const signInStyle = useStyles();
  return (
    <Container className={signInStyle.wrapper} maxWidth="sm">
      <form className={signInStyle.form}>
        <Grid container spacing={3}>
          <Grid className={signInStyle.input} item xs={12}>
            <AccountBox className={signInStyle.icon} />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Display Name"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
              <Email />
            <TextField
              fullWidth
              id="outlined-basic"
              label="Email"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth variant="contained" color="primary">
              Sign In
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth variant="contained" color="gray">
              Sign In With Google
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
