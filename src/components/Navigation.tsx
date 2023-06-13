import React from 'react';

// Material UI Imports
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Navigation = (): JSX.Element => {
  return (
    <Paper sx={{ height: '20vh' }} elevation={3}>
      <Grid container sx={{ height: '50%' }}>
        <Grid
          item
          xs={6}
          display={'flex'}
          justifyContent={'flex-start'}
          sx={{ alignItems: 'center' }}
        >
          <img
            src="../logo.png"
            alt="react-cinema-logo"
            style={{ width: 45, height: 45, margin: '0 10px 0 20px' }}
          />
          <Typography variant="h5">ReactCinema</Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <TextField
            variant="outlined"
            id="search-input"
            sx={{ width: '60%', mr: '20px' }}
            size="small"
            placeholder="Search"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
      </Grid>
      <Divider variant="fullWidth" />
      <Grid container>
        <Grid item xs={2}>
          Home
        </Grid>
        <Grid item xs={2}>
          Favourites
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Navigation;
