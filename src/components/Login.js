import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit">Jeremy Andrades Parra</Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Login() {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div>
        <br></br>
        <br></br>
        <br></br>
        <center>
          <Avatar variant="circle" />
        </center>
        <br></br>
        <Typography component="h1" variant="h4">
          Sign in
        </Typography>
        <form noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Link href={"/home"}>
            <Button type="submit" fullWidth variant="contained" color="primary">
              Sign In
            </Button>
          </Link>
          <Typography component="text" variant="subtitle2">
            don't have an account?
          </Typography>
          <Link href={"/register"}>
            <Button type="submit" fullWidth variant="text" color="primary">
              Register Now
            </Button>
          </Link>
        </form>
        <br></br>
        <br></br>
        <Link href={"/home"}>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Entrar
          </Button>
        </Link>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
