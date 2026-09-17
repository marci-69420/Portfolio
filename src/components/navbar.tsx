import { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        {/* Left side text - Always visible */}
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Márton Magyar
        </Typography>

        {/* DESKTOP VIEW: Links on the right */}
        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2 }}>
          <Button component={Link} to="/about" sx={{ color: 'white' }}>
            About
          </Button>
          <Button component={Link} to="/projects" sx={{ color: 'white' }}>
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
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: 'block', md: 'none' } }}
          >
            <MenuItem onClick={handleCloseNavMenu} component={Link} to="/about">
                <Typography sx={{ textAlign: 'center' }}>About</Typography>
            </MenuItem>
            <MenuItem onClick={handleCloseNavMenu} component={Link} to="/projects">
                <Typography sx={{ textAlign: 'center' }}>Projects</Typography>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}