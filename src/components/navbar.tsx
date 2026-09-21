import { useEffect, useRef, useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const navbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsidePointerDown = (event: PointerEvent) => {
      if (anchorElNav && navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        setAnchorElNav(null);
      }
    };

    document.addEventListener('pointerdown', handleOutsidePointerDown);

    return () => document.removeEventListener('pointerdown', handleOutsidePointerDown);
  }, [anchorElNav]);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <AppBar
        ref={navbarRef}
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
            position: 'relative',
            backgroundColor: 'rgba(0, 0, 0, 0.29)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(0, 0, 0, 0.29)',
            borderRadius: 2,
            px: { xs: 2, sm: 3, md: 0 },
          }}
        >
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
          {anchorElNav && (
          <Box
            id="menu-appbar"
            role="menu"
            sx={{
              position: 'absolute',
              top: '100%',
              right: 0,
              minWidth: 150,
              p: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.50)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(0, 0, 0, 0.29)',
              borderRadius: 2,
              boxShadow: 'none',
            }}
          >
            <Button
              component={Link}
              to="/about"
              role="menuitem"
              onClick={handleCloseNavMenu}
              sx={{ display: 'block', width: '100%', color: 'white', textAlign: 'left' }}
            >
              About
            </Button>
            <Button
              component={Link}
              to="/projects"
              role="menuitem"
              onClick={handleCloseNavMenu}
              sx={{ display: 'block', width: '100%', color: 'white', textAlign: 'left' }}
            >
              Projects
            </Button>
          </Box>
          )}
        </Box>
        </Toolbar>
      </AppBar>
      <Box sx={{ height: { xs: 72, md: 88 } }} />
    </>
  );
}