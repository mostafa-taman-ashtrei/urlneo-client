import React from 'react';
import { Typography, Link } from '@material-ui/core';

const Copyright = () => (
  <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link target="_blank" color="inherit" href="https://google.com">
      Your Website
    </Link>
    {' '}
    {new Date().getFullYear()}
    .
  </Typography>
);

export default Copyright;
