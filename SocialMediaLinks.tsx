import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import {
  Facebook,
  WhatsApp,
  Instagram,
  Telegram,
  YouTube,
  Twitter,
  LinkedIn
} from '@mui/icons-material';
import { socialMediaConfig } from '../config/social-media';

export const SocialMediaLinks: React.FC = () => {
  const { links } = socialMediaConfig;

  return (
    <Box sx={{ display: 'flex', gap: 1 }}>
      <Tooltip title="Facebook">
        <IconButton
          href={links.facebook}
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
        >
          <Facebook />
        </IconButton>
      </Tooltip>
      <Tooltip title="WhatsApp">
        <IconButton
          href={links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
        >
          <WhatsApp />
        </IconButton>
      </Tooltip>
      <Tooltip title="Instagram">
        <IconButton
          href={links.instagram}
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
        >
          <Instagram />
        </IconButton>
      </Tooltip>
      <Tooltip title="Telegram">
        <IconButton
          href={links.telegram}
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
        >
          <Telegram />
        </IconButton>
      </Tooltip>
      <Tooltip title="YouTube">
        <IconButton
          href={links.youtube}
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
        >
          <YouTube />
        </IconButton>
      </Tooltip>
      <Tooltip title="Twitter">
        <IconButton
          href={links.twitter}
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
        >
          <Twitter />
        </IconButton>
      </Tooltip>
      <Tooltip title="LinkedIn">
        <IconButton
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          color="primary"
        >
          <LinkedIn />
        </IconButton>
      </Tooltip>
    </Box>
  );
}; 