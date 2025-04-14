import React from 'react';
import { Box, Container, Typography, Grid, Card, CardMedia, CardContent, Button, Paper } from '@mui/material';

const HajjUmrah: React.FC = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: 'url(https://source.unsplash.com/random/1600x900/?kaaba)',
          height: '400px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.5)',
          }}
        />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            component="h1"
            variant="h2"
            color="inherit"
            gutterBottom
            sx={{ fontWeight: 'bold' }}
          >
            Hajj & Umrah Services
          </Typography>
          <Typography variant="h5" color="inherit" paragraph>
            Complete pilgrimage packages with experienced guides and comfortable accommodations
          </Typography>
        </Container>
      </Paper>

      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Our Hajj & Umrah Packages
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 4 }}>
          We offer comprehensive Hajj and Umrah packages designed to provide a spiritually fulfilling and comfortable pilgrimage experience. Our services include visa processing, transportation, accommodation, and experienced guides.
        </Typography>

        <Grid container spacing={4}>
          {[
            {
              title: 'Economy Umrah Package',
              image: 'https://source.unsplash.com/random/600x400/?mecca',
              description: 'Affordable 14-day Umrah package with standard accommodations and all necessary services.',
              price: 'Starting from $1,800',
            },
            {
              title: 'Premium Hajj Package',
              image: 'https://source.unsplash.com/random/600x400/?hajj',
              description: 'Complete 21-day Hajj package with premium accommodations close to the holy sites.',
              price: 'Starting from $4,500',
            },
            {
              title: 'Family Umrah Package',
              image: 'https://source.unsplash.com/random/600x400/?kaaba',
              description: 'Special package for families with children, including family-friendly accommodations and services.',
              price: 'Starting from $2,200 per person',
            },
          ].map((pkg, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={pkg.image}
                  alt={pkg.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {pkg.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {pkg.description}
                  </Typography>
                  <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
                    {pkg.price}
                  </Typography>
                  <Button variant="contained" fullWidth>
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HajjUmrah;