import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Paper,
  Stack,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import SpeedIcon from '@mui/icons-material/Speed';
import VerifiedIcon from '@mui/icons-material/Verified';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const MarketingHub: React.FC = () => {
  const successMetrics = [
    {
      title: "Operational Efficiency",
      value: "85%",
      icon: <SpeedIcon sx={{ fontSize: 40 }} color="primary" />,
      description: "Increase in processing speed"
    },
    {
      title: "Cost Reduction",
      value: "40%",
      icon: <MonetizationOnIcon sx={{ fontSize: 40 }} color="primary" />,
      description: "Decrease in operational costs"
    },
    {
      title: "Success Rate",
      value: "95%",
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} color="primary" />,
      description: "Placement success rate"
    },
    {
      title: "Client Satisfaction",
      value: "98%",
      icon: <VerifiedIcon sx={{ fontSize: 40 }} color="primary" />,
      description: "Agency satisfaction rate"
    }
  ];

  const testimonials = [
    {
      name: "Abebe Trading PLC",
      role: "Employment Agency",
      image: "https://source.unsplash.com/random/100x100/?ceo",
      quote: "This platform has revolutionized our operations. We've seen a 50% increase in successful placements."
    },
    {
      name: "Selam International Agency",
      role: "Recruitment Agency",
      image: "https://source.unsplash.com/random/100x100/?manager",
      quote: "The digital transformation has made our work incredibly efficient. Documentation and tracking are now seamless."
    },
    {
      name: "Ethiopian Staffing Solutions",
      role: "Employment Agency",
      image: "https://source.unsplash.com/random/100x100/?director",
      quote: "Outstanding platform for managing foreign employment operations. Highly recommended!"
    }
  ];

  const benefits = [
    {
      title: "Digital Transformation",
      points: [
        "Paperless documentation system",
        "Automated workflow management",
        "Real-time tracking and monitoring",
        "Digital contract management"
      ]
    },
    {
      title: "Operational Excellence",
      points: [
        "Streamlined visa processing",
        "Automated candidate matching",
        "Integrated training management",
        "Performance analytics"
      ]
    },
    {
      title: "Financial Benefits",
      points: [
        "Reduced operational costs",
        "Increased revenue potential",
        "Transparent financial tracking",
        "Automated billing system"
      ]
    }
  ];

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
          backgroundImage: 'url(https://source.unsplash.com/random/1600x900/?digital,success)',
          height: '500px',
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
            backgroundColor: 'rgba(0,0,0,.6)',
          }}
        />
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <Typography
            component="h1"
            variant="h2"
            color="inherit"
            gutterBottom
            sx={{ fontWeight: 'bold' }}
          >
            Transform Your Agency Operations
          </Typography>
          <Typography variant="h5" color="inherit" paragraph>
            Join Ethiopia's leading digital platform for foreign employment agencies
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button variant="contained" color="primary" size="large">
              Start Free Trial
            </Button>
            <Button variant="outlined" color="inherit" size="large">
              Watch Demo
            </Button>
          </Stack>
        </Container>
      </Paper>

      <Container maxWidth="lg" sx={{ mb: 8 }}>
        {/* Success Metrics */}
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {successMetrics.map((metric, index) => (
            <Grid item key={index} xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', textAlign: 'center' }}>
                <CardContent>
                  {metric.icon}
                  <Typography variant="h3" color="primary" sx={{ my: 2 }}>
                    {metric.value}
                  </Typography>
                  <Typography variant="h6" gutterBottom>
                    {metric.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {metric.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Benefits Section */}
        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
          Why Choose Our Platform?
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {benefits.map((benefit, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {benefit.title}
                  </Typography>
                  <List>
                    {benefit.points.map((point, idx) => (
                      <ListItem key={idx} disablePadding>
                        <ListItemIcon>
                          <CheckCircleIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={point} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Testimonials */}
        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
          Success Stories
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {testimonials.map((testimonial, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                    <Box
                      component="img"
                      src={testimonial.image}
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                      }}
                    />
                    <Box>
                      <Typography variant="h6">
                        {testimonial.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Stack>
                  <Typography variant="body1" paragraph>
                    "{testimonial.quote}"
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', p: 6, bgcolor: 'primary.main', color: 'white', borderRadius: 2 }}>
          <Typography variant="h4" gutterBottom>
            Ready to Grow Your Agency?
          </Typography>
          <Typography variant="body1" paragraph>
            Join hundreds of successful agencies using our platform
          </Typography>
          <Button variant="contained" color="secondary" size="large">
            Get Started Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default MarketingHub;