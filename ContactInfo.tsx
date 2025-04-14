import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import { Phone, Email, LocationOn } from '@mui/icons-material';
import { socialMediaConfig } from '../config/social-media';

const ContactInfo: React.FC = () => {
  const { contact } = socialMediaConfig;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Phone color="primary" />
        <Link href={`tel:${contact.phone}`} color="inherit" underline="hover">
          <Typography variant="body1">{contact.phone}</Typography>
        </Link>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Email color="primary" />
        <Link href={`mailto:${contact.email}`} color="inherit" underline="hover">
          <Typography variant="body1">{contact.email}</Typography>
        </Link>
      </Box>

      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
        <LocationOn color="primary" />
        <Typography variant="body1">{contact.address}</Typography>
      </Box>
    </Box>
  );
};

export default ContactInfo; 