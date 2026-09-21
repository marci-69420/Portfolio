import { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleMobileNavigation = (path: string) => {
    handleCloseNavMenu();
    navigate(path);
  };

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: 'transparent',
          boxShadow: 'none',
          marginTop: 3,
          zIndex: (theme) => theme.zIndex.appBar,
        }}
      >
        <Toolbar
          sx={{
            width: '100%',
            maxWidth: 1100,
            minHeight: { xs: 72, md: 88 },
            mx: 'auto',
            backgroundColor: 'rgba(0, 0, 0, 0.29)',
            backdropFilter: { xs: 'none', lg: 'blur(16px)' },
            WebkitBackdropFilter: { xs: 'none', lg: 'blur(16px)' },
            border: '1px solid rgba(0, 0, 0, 0.29)',
            borderRadius: 2,
            px: { xs: 2, sm: 3, md: 0 },
          }}
        >
        {/* Left side text - Always visible */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, paddingLeft: 2 }}>
          Márton Magyar
        </Typography>

        {/* DESKTOP VIEW: Links on the right */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 , paddingRight: 2 }}>
          <Button component={Link} to="/about" sx={{ color: 'white', '&:hover': { color: '#00ff1578' } }}>
            About
          </Button>
          <Button component={Link} to="/projects" sx={{ color: 'white', '&:hover': { color: '#00ff1578' } }}>
            Projects
          </Button>
        </Box>

        {/* MOBILE VIEW: Hamburger Menu */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size="large"
            aria-label="menu"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
            sx={{ color: '#00ff1578' }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            transitionDuration={{ enter: 120, exit: 80 }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            disableScrollLock
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiPaper-root': {
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
                backdropFilter: { xs: 'none', lg: 'blur(16px)' },
                WebkitBackdropFilter: { xs: 'none', lg: 'blur(16px)' },
                border: '1px solid rgba(0, 0, 0, 0.2)',
                borderRadius: 2,
                boxShadow: 'none',
                '& .MuiMenuItem-root': {
                  color: 'white',
                },
              },
            }}
          >
            <MenuItem onClick={() => handleMobileNavigation('/about')}>
              <Typography sx={{ textAlign: 'center', color: 'white' }}>About</Typography>
            </MenuItem>
            <MenuItem onClick={() => handleMobileNavigation('/projects')}>
              <Typography sx={{ textAlign: 'center', color: 'white' }}>Projects</Typography>
            </MenuItem>
          </Menu>
        </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ height: { xs: 72, md: 88 } }} />
    </>
  );
}