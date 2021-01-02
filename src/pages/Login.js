import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LinearProgress from '@material-ui/core/LinearProgress';

import CopyRight from '../components/CopyRight';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    padding: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  loading: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const classes = useStyles();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      // await login(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch {
      setError('Failed to log in');
    }

    setLoading(false);
  }

  if (loading) return <div className={classes.loading}><LinearProgress /></div>;

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          {error ? <h1>{error}</h1> : ''}
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            inputRef={emailRef}
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
            inputRef={passwordRef}
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to="/forgot-password">Forgot Password?</Link>
            </Grid>
            <Grid item>
              <Link to="/signup">Sign Up</Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <CopyRight />
      </Box>
    </Container>
  );
};

export default Login;
