import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import LOGO from '../../assets/Image/logo192.png'
import AppBar from '@mui/material/AppBar';
import '../../assets/css/style.css'
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

function Header() {
  return (
    <header>
         <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img  style={{hight:'40px',width:'40px'}} src={LOGO}/>
                    <Typography  
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none'}}>
                                    Redbubble
                    </Typography>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                      <Search>
                        <SearchIconWrapper>
                          <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                          placeholder="Search…"
                          inputProps={{ 'aria-label': 'search' }}
                        />
                      </Search>
                      <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="error">
                          <MailIcon />
                        </Badge>
                      </IconButton>
                      <IconButton
                          size="large"
                          aria-label="show 17 new notifications"
                          color="inherit"
                        >
                          <Badge badgeContent={17} color="error">
                            <NotificationsIcon />
                          </Badge>
                      </IconButton>
                      <p>Admin</p>
                      <IconButton
                          size="large"
                          aria-label="show 17 new notifications"
                          color="inherit"
                        >
                          <ArrowDropDownIcon/>
                        </IconButton>
                      
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            //aria-controls={menuId}
                            aria-haspopup="true"
                            color="inherit"
                          >
                            <AccountCircle />
                        </IconButton>

                    </Box>
                    
                </Toolbar>
            </Container>
         </AppBar>
    </header>
    
  )
}

export default Header