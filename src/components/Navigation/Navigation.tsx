import React from 'react';

// Material UI Imports
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import TextField from '@mui/material/TextField';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import styled from '@mui/system/styled';

// Styled Components
const InactiveBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '20px',
  '&:hover': {
    backgroundColor: '#f2f2f2',
  },
  cursor: 'pointer',
});

const ActiveBox = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '20px',
  background: 'linear-gradient(45deg, #90caf9, #42a5f5)',
  color: 'white',
  cursor: 'pointer',
});

interface Props {
  activeNavigation: string;
  changeActiveNavigation: (data: string) => void;
}

const Navigation = (props: Props): JSX.Element => {
  const { activeNavigation, changeActiveNavigation } = props;

  const handleChangeNavigation: (data: string) => void = (
    navigation: string
  ) => {
    changeActiveNavigation(navigation);
  };

  return (
    <Paper
      sx={{
        height: '20vh',
        width: '100%',
        position: 'sticky',
        top: 0,
        zIndex: 2,
      }}
      elevation={3}
    >
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
      <Grid container sx={{ height: '50%' }}>
        <Grid
          item
          xs={1}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ml: 5,
            mr: 3,
          }}
        >
          {activeNavigation === 'home' ? (
            <ActiveBox sx={{ px: 4, py: 0.5 }}>
              <HomeOutlinedIcon fontSize="medium" sx={{ mr: 1 }} />
              <Typography variant="h6">Home</Typography>
            </ActiveBox>
          ) : (
            <InactiveBox
              sx={{ px: 4, py: 0.5 }}
              onClick={() => {
                handleChangeNavigation('home');
              }}
            >
              <HomeOutlinedIcon fontSize="medium" sx={{ mr: 1 }} />
              <Typography variant="h6">Home</Typography>
            </InactiveBox>
          )}
        </Grid>
        <Grid
          item
          xs={1}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ml: 5,
            mr: 3,
          }}
        >
          {activeNavigation === 'favourite' ? (
            <ActiveBox sx={{ px: 4, py: 0.5 }}>
              <FavoriteBorderIcon fontSize="medium" sx={{ mr: 1 }} />
              <Typography variant="h6">Favourite</Typography>
            </ActiveBox>
          ) : (
            <InactiveBox
              sx={{ px: 4, py: 0.5 }}
              onClick={() => {
                handleChangeNavigation('favourite');
              }}
            >
              <FavoriteBorderIcon fontSize="medium" sx={{ mr: 1 }} />
              <Typography variant="h6">Favourite</Typography>
            </InactiveBox>
          )}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Navigation;
