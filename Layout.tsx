import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { Box } from '@mui/material';
import { LanguageProvider } from '../context/LanguageContext';

const Layout: React.FC = () => {
  return (
    <LanguageProvider>
      <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </LanguageProvider>
  );
};

export default Layout;