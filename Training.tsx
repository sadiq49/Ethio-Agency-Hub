import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Button, 
  Paper,
  Tabs,
  Tab,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Training: React.FC = () => {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const trainingModules = [
    {
      title: "Travel Agency Management",
      description: "Comprehensive training on managing a successful travel agency",
      image: "https://source.unsplash.com/random/600x400/?office",
      duration: "4 weeks",
      price: "$299",
      features: [
        "Business operations fundamentals",
        "Customer service excellence",
        "Booking systems training",
        "Marketing strategies",
        "Financial management"
      ]
    },
    {
      title: "Hajj & Umrah Guide Certification",
      description: "Become a certified guide for pilgrims performing Hajj and Umrah",
      image: "https://source.unsplash.com/random/600x400/?mecca",
      duration: "6 weeks",
      price: "$499",
      features: [
        "Rituals and procedures",
        "Historical and religious significance",
        "Group management skills",
        "Emergency protocols",
        "Cultural sensitivity training"
      ]
    },
    {
      title: "Digital Marketing for Travel Agencies",
      description: "Master digital marketing strategies specific to the travel industry",
      image: "https://source.unsplash.com/random/600x400/?marketing",
      duration: "3 weeks",
      price: "$249",
      features: [
        "Social media marketing",
        "SEO for travel websites",
        "Email campaign management",
        "Content creation strategies",
        "Analytics and performance tracking"
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
          backgroundImage: 'url(https://source.unsplash.com/random/1600x900/?classroom)',
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
            Professional Training Programs
          </Typography>
          <Typography variant="h5" color="inherit" paragraph>
            Enhance your skills and knowledge with our specialized training modules for travel and tourism professionals
          </Typography>
        </Container>
      </Paper>

      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
          <Tabs value={tabValue} onChange={handleTabChange} centered>
            <Tab label="Training Modules" />
            <Tab label="Upcoming Workshops" />
            <Tab label="Online Courses" />
          </Tabs>
        </Box>

        {tabValue === 0 && (
          <>
            <Typography variant="h4" component="h2" gutterBottom>
              Professional Training Modules
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 4 }}>
              Our training modules are designed by industry experts to provide practical skills and knowledge that can be immediately applied in your career. Each module includes hands-on exercises, case studies, and comprehensive learning materials.
            </Typography>

            <Grid container spacing={4}>
              {trainingModules.map((module, index) => (
                <Grid item key={index} xs={12} md={4}>
                  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={module.image}
                      alt={module.title}
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h3">
                        {module.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {module.description}
                      </Typography>
                      <Divider sx={{ my: 2 }} />
                      <Box sx={{ mb: 2 }}>
                        <Typography variant="subtitle2" color="text.secondary">
                          Duration: {module.duration}
                        </Typography>
                        <Typography variant="h6" color="primary">
                          {module.price}
                        </Typography>
                      </Box>
                      <Typography variant="subtitle2" gutterBottom>
                        What you'll learn:
                      </Typography>
                      <List dense>
                        {module.features.slice(0, 3).map((feature, idx) => (
                          <ListItem key={idx} disablePadding>
                            <ListItemIcon sx={{ minWidth: 30 }}>
                              <CheckCircleIcon color="success" fontSize="small" />
                            </ListItemIcon>
                            <ListItemText primary={feature} />
                          </ListItem>
                        ))}
                      </List>
                      <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                        Enroll Now
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </>
        )}

        {tabValue === 1 && (
          <Typography variant="h6" align="center" sx={{ py: 5 }}>
            Upcoming workshops schedule will be posted soon. Please check back later.
          </Typography>
        )}

        {tabValue === 2 && (
          <Typography variant="h6" align="center" sx={{ py: 5 }}>
            Our online courses are currently being developed. Registration will open next month.
          </Typography>
        )}
      </Container>
    </Box>
  );
};

export default Training;