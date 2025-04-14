import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
  Paper,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import BusinessIcon from '@mui/icons-material/Business';
import HandshakeIcon from '@mui/icons-material/Handshake';
import StarIcon from '@mui/icons-material/Star';

const featuredAgencies = [
  {
    id: '1',
    name: 'Digital Marketing Pro',
    image: 'https://source.unsplash.com/random/300x200/?marketing',
    description: 'Specialized in digital marketing strategies for businesses of all sizes.',
  },
  {
    id: '2',
    name: 'Creative Design Studio',
    image: 'https://source.unsplash.com/random/300x200/?design',
    description: 'Award-winning design studio creating stunning visuals and brand identities.',
  },
  {
    id: '3',
    name: 'Web Development Solutions',
    image: 'https://source.unsplash.com/random/300x200/?web',
    description: 'Expert web development services using the latest technologies.',
  },
];

const Home: React.FC = () => {
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
          backgroundImage: 'url(https://source.unsplash.com/random/1600x900/?ethiopia)',
          height: '500px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Increase the priority of the hero background image */}
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
            Find the Perfect Agency for Your Business
          </Typography>
          <Typography variant="h5" color="inherit" paragraph>
            Connect with top Ethiopian agencies specializing in marketing, design, development, and more.
          </Typography>
          <Box sx={{ mt: 4, display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              component={RouterLink}
              to="/agencies"
              startIcon={<SearchIcon />}
            >
              Find Agencies
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{ color: 'white', borderColor: 'white' }}
              component={RouterLink}
              to="/register"
            >
              Register Your Agency
            </Button>
          </Box>
        </Container>
      </Paper>

      {/* How It Works Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          How It Works
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
          Connecting businesses with the right agencies in three simple steps
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <SearchIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" component="h3" gutterBottom>
                Search
              </Typography>
              <Typography color="text.secondary">
                Browse through our extensive list of verified Ethiopian agencies filtered by service, location, and ratings.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <BusinessIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" component="h3" gutterBottom>
                Connect
              </Typography>
              <Typography color="text.secondary">
                Contact agencies directly through our platform to discuss your project requirements and get quotes.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: 'center', p: 2 }}>
              <HandshakeIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
              <Typography variant="h5" component="h3" gutterBottom>
                Collaborate
              </Typography>
              <Typography color="text.secondary">
                Work with your chosen agency and leave reviews to help others make informed decisions.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Featured Agencies Section */}
      <Box sx={{ bgcolor: 'grey.100', py: 6 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
            <Typography variant="h4" component="h2">
              Featured Agencies
            </Typography>
            <Button component={RouterLink} to="/agencies" variant="outlined">
              View All
            </Button>
          </Box>
          <Grid container spacing={4}>
            {featuredAgencies.map((agency) => (
              <Grid item key={agency.id} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={agency.image}
                    alt={agency.name}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h3">
                      {agency.name}
                    </Typography>
                    <Box sx={{ display: 'flex', mb: 1 }}>
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} sx={{ color: 'warning.main', fontSize: 20 }} />
                      ))}
                    </Box>
                    <Typography>{agency.description}</Typography>
                  </CardContent>
                  <Box sx={{ p: 2 }}>
                    <Button
                      component={RouterLink}
                      to={`/agencies/${agency.id}`}
                      variant="contained"
                      fullWidth
                    >
                      View Profile
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Call to Action Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography variant="h3" component="h2" gutterBottom>
            Ready to Grow Your Business?
          </Typography>
          <Typography variant="h6" paragraph>
            Join Ethio Agency Hub today and connect with the best agencies in Ethiopia.
          </Typography>
          <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
            <Button
              variant="contained"
              size="large"
              color="secondary"
              component={RouterLink}
              to="/register"
            >
              Register Now
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{ color: 'white', borderColor: 'white' }}
              component={RouterLink}
              to="/contact"
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;