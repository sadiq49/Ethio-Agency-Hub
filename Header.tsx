import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { BRAND } from '../../shared/constants/branding';

const pages = [
  { title: 'Home', path: '/' },
  { title: 'Agencies', path: '/agencies' },
  { title: 'Foreign Employment', path: '/foreign-employment' },
  { title: 'Services', path: '/services' },
  { title: 'Hajj & Umrah', path: '/hajj-umrah' },
  { title: 'About', path: '/about' },
  { title: 'Contact', path: '/contact' },
];

const settings = [
  { title: 'Profile', path: '/profile' },
  { title: 'Dashboard', path: '/dashboard' },
  { title: 'Logout', path: '/logout' },
];

const Header: React.FC = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: BRAND.colors.primary }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Logo - Desktop */}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                mr: 1,
                bgcolor: 'secondary.main',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                fontWeight: 'bold'
              }}
            >
              EAH
            </Box>
            <Typography
              variant="h6"
              noWrap
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.2rem',
              }}
            >
              {BRAND.name}
            </Typography>
          </Box>

          {/* Mobile menu button */}
          <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleDrawerToggle}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Logo - Mobile */}
          <Box
            component={RouterLink}
            to="/"
            sx={{
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              alignItems: 'center',
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
            <Avatar 
              src="/assets/logo-small.png" 
              alt={BRAND.shortName}
              sx={{ width: 32, height: 32, mr: 1 }}
            />
            <Typography
              variant="h5"
              noWrap
              sx={{
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.2rem',
              }}
            >
              {BRAND.shortName}
            </Typography>
          </Box>

          {/* Desktop Navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, ml: 2 }}>
            {pages.map((page) => (
              <Button
                key={page.title}
                component={RouterLink}
                to={page.path}
                sx={{ 
                  my: 2, 
                  color: 'white', 
                  display: 'block',
                  mx: 0.5,
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }
                }}
              >
                {page.title}
              </Button>
            ))}
          </Box>

          {/* User Menu */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar src="/assets/female-employee.jpg">
                  <AccountCircleIcon />
                </Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem 
                  key={setting.title} 
                  onClick={handleCloseUserMenu}
                  component={RouterLink}
                  to={setting.path}
                >
                  <Typography textAlign="center">{setting.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Navigation Drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Box sx={{ p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Avatar 
              src="/assets/hajj-umrah-icon.jpg" 
              alt="Hajj & Umrah"
              sx={{ width: 50, height: 50, mb: 1 }}
            />
          </Box>
          <Typography variant="h6" sx={{ my: 1 }}>
            {BRAND.name}
          </Typography>
          <List>
            {pages.map((page) => (
              <ListItem key={page.title} disablePadding>
                <ListItemButton 
                  component={RouterLink} 
                  to={page.path}
                  sx={{ textAlign: 'center' }}
                >
                  <ListItemText primary={page.title} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;