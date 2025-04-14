import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: (theme) => theme.palette.grey[900],
        color: 'white',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Ethio Agency Hub
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ color: 'grey.400' }}>
              Connecting Ethiopian agencies with clients worldwide. Find the perfect agency for your needs or showcase your services to potential clients.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton color="inherit" aria-label="Facebook">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Twitter">
                <TwitterIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Box>
              <Link component={RouterLink} to="/" color="inherit" display="block" sx={{ mb: 1 }}>
                Home
              </Link>
              <Link component={RouterLink} to="/agencies" color="inherit" display="block" sx={{ mb: 1 }}>
                Agencies
              </Link>
              <Link component={RouterLink} to="/services" color="inherit" display="block" sx={{ mb: 1 }}>
                Services
              </Link>
              <Link component={RouterLink} to="/about" color="inherit" display="block" sx={{ mb: 1 }}>
                About Us
              </Link>
              <Link component={RouterLink} to="/contact" color="inherit" display="block" sx={{ mb: 1 }}>
                Contact
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ color: 'grey.400', mb: 1 }}>
              Addis Ababa, Ethiopia
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ color: 'grey.400', mb: 1 }}>
              Email: info@ethioagencyhub.com
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ color: 'grey.400', mb: 1 }}>
              Phone: +251 911 123 456
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ mt: 3, borderTop: 1, borderColor: 'grey.800', pt: 2, textAlign: 'center' }}>
          <Typography variant="body2" color="text.secondary" sx={{ color: 'grey.500' }}>
            © {new Date().getFullYear()} Ethio Agency Hub. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;