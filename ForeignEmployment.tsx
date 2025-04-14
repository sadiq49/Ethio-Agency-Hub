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
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WorkIcon from '@mui/icons-material/Work';
import SecurityIcon from '@mui/icons-material/Security';
import SchoolIcon from '@mui/icons-material/School';

const ForeignEmployment: React.FC = () => {
  const destinations = [
    {
      country: "Saudi Arabia",
      positions: ["Housemaid", "Caregiver", "Hotel Staff", "Office Assistant"],
      requirements: ["Age: 23-38", "Experience: 1+ year preferred", "Basic Arabic: Advantage"],
      salary: "$300-500/month"
    },
    {
      country: "UAE",
      positions: ["Domestic Helper", "Nanny", "Restaurant Staff", "Cleaning Staff"],
      requirements: ["Age: 21-45", "Experience: Not mandatory", "English: Basic"],
      salary: "$350-600/month"
    },
    {
      country: "Kuwait",
      positions: ["House Worker", "Child Caretaker", "Hospital Assistant", "Office Cleaner"],
      requirements: ["Age: 21-40", "Experience: Preferred", "Language: Basic English/Arabic"],
      salary: "$400-550/month"
    }
  ];

  const services = [
    {
      title: "Pre-Departure Training",
      description: "Comprehensive training including language, culture, and job skills",
      duration: "4-6 weeks",
      icon: <SchoolIcon fontSize="large" color="primary" />
    },
    {
      title: "Legal Protection",
      description: "Full legal support and contract verification",
      duration: "Throughout employment",
      icon: <SecurityIcon fontSize="large" color="primary" />
    },
    {
      title: "Job Placement",
      description: "Guaranteed placement with reputable employers",
      duration: "2-3 months process",
      icon: <WorkIcon fontSize="large" color="primary" />
    }
  ];

  return (
    <Box>
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: 'url(https://source.unsplash.com/random/1600x900/?office,women)',
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
            Foreign Employment Opportunities
          </Typography>
          <Typography variant="h5" color="inherit" paragraph>
            Empowering Ethiopian women with safe and rewarding employment opportunities abroad
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Apply Now
          </Button>
        </Container>
      </Paper>

      <Container maxWidth="lg" sx={{ mb: 8 }}>
        {/* Our Services */}
        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
          Our Services
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {services.map((service, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                <CardContent>
                  <Box sx={{ mb: 2 }}>
                    {service.icon}
                  </Box>
                  <Typography gutterBottom variant="h5" component="h3">
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {service.description}
                  </Typography>
                  <Typography variant="body2" color="primary">
                    Duration: {service.duration}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Destination Countries */}
        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
          Employment Destinations
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {destinations.map((destination, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardMedia
                  component="img"
                  height="140"
                  image={`https://source.unsplash.com/random/400x200/?${destination.country}`}
                  alt={destination.country}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h3">
                    {destination.country}
                  </Typography>
                  <Typography variant="subtitle1" color="primary" gutterBottom>
                    Salary Range: {destination.salary}
                  </Typography>
                  <Typography variant="subtitle2" gutterBottom>
                    Available Positions:
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    {destination.positions.map((position, idx) => (
                      <Chip 
                        key={idx} 
                        label={position} 
                        size="small" 
                        sx={{ m: 0.5 }} 
                      />
                    ))}
                  </Box>
                  <Typography variant="subtitle2" gutterBottom>
                    Requirements:
                  </Typography>
                  <List dense>
                    {destination.requirements.map((req, idx) => (
                      <ListItem key={idx} disablePadding>
                        <ListItemIcon sx={{ minWidth: 30 }}>
                          <CheckCircleIcon color="success" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={req} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* FAQ Section */}
        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
          Frequently Asked Questions
        </Typography>
        <Box sx={{ mb: 8 }}>
          {[
            {
              question: "What documents are required for application?",
              answer: "Valid passport, Educational certificates, Medical certificate, Police clearance, and Previous work experience documents (if any)."
            },
            {
              question: "How long is the process?",
              answer: "The entire process typically takes 2-3 months from application to deployment, including training and documentation."
            },
            {
              question: "Is there any support after deployment?",
              answer: "Yes, we provide 24/7 support through our local representatives in each destination country and maintain regular contact with both employees and employers."
            },
            {
              question: "What training is provided?",
              answer: "We provide comprehensive training including language (Arabic/English), cultural orientation, job-specific skills, and safety awareness."
            }
          ].map((faq, index) => (
            <Accordion key={index}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1" fontWeight="bold">
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center', p: 4, bgcolor: 'background.paper', borderRadius: 2 }}>
          <Typography variant="h5" gutterBottom>
            Ready to Start Your Journey?
          </Typography>
          <Typography variant="body1" paragraph>
            Join thousands of successful Ethiopian women working abroad
          </Typography>
          <Button variant="contained" color="primary" size="large">
            Register Now
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ForeignEmployment;