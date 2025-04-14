import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Paper,
  Stack,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  LinearProgress,
} from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import PeopleIcon from '@mui/icons-material/People';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import TimelineIcon from '@mui/icons-material/Timeline';
import TaskIcon from '@mui/icons-material/Task';
import SettingsIcon from '@mui/icons-material/Settings';

const AgencyOperations: React.FC = () => {
  const operationalModules = [
    {
      title: "Employee Management",
      icon: <PeopleIcon fontSize="large" color="primary" />,
      features: [
        "Candidate Database",
        "Employee Tracking",
        "Contract Management",
        "Performance Monitoring",
        "Training Records"
      ],
      completion: 85
    },
    {
      title: "Document Processing",
      icon: <DocumentScannerIcon fontSize="large" color="primary" />,
      features: [
        "Digital Document Storage",
        "Automated Verification",
        "Visa Processing",
        "Legal Compliance",
        "Document Expiry Alerts"
      ],
      completion: 90
    },
    {
      title: "Financial Operations",
      icon: <AccountBalanceIcon fontSize="large" color="primary" />,
      features: [
        "Invoice Generation",
        "Payment Tracking",
        "Expense Management",
        "Financial Reports",
        "Budget Planning"
      ],
      completion: 95
    },
    {
      title: "Performance Analytics",
      icon: <TimelineIcon fontSize="large" color="primary" />,
      features: [
        "Real-time Metrics",
        "Success Rate Analysis",
        "ROI Tracking",
        "Market Trends",
        "Comparative Analysis"
      ],
      completion: 88
    }
  ];

  const reportingFeatures = [
    {
      title: "Daily Operations",
      reports: [
        "Employee Status Updates",
        "Document Processing Status",
        "Daily Transaction Summary",
        "Task Completion Reports"
      ]
    },
    {
      title: "Weekly Analysis",
      reports: [
        "Placement Success Rate",
        "Document Processing Time",
        "Revenue Analysis",
        "Client Satisfaction Metrics"
      ]
    },
    {
      title: "Monthly Overview",
      reports: [
        "Financial Performance",
        "Operational Efficiency",
        "Resource Utilization",
        "Market Position Analysis"
      ]
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
          backgroundImage: 'url(https://source.unsplash.com/random/1600x900/?dashboard,control)',
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
            backgroundColor: 'rgba(0,0,0,.6)',
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
            Complete Agency Control
          </Typography>
          <Typography variant="h5" color="inherit" paragraph>
            Streamline your operations with our comprehensive management platform
          </Typography>
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
            startIcon={<DashboardIcon />}
          >
            Access Dashboard
          </Button>
        </Container>
      </Paper>

      <Container maxWidth="lg" sx={{ mb: 8 }}>
        {/* Operational Modules */}
        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
          Operational Control Modules
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {operationalModules.map((module, index) => (
            <Grid item key={index} xs={12} md={6}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                    {module.icon}
                    <Typography variant="h5" component="h3">
                      {module.title}
                    </Typography>
                  </Stack>
                  <List dense>
                    {module.features.map((feature, idx) => (
                      <ListItem key={idx}>
                        <ListItemIcon>
                          <TaskIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={feature} />
                      </ListItem>
                    ))}
                  </List>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" color="text.secondary">
                      Process Automation Level
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <LinearProgress 
                        variant="determinate" 
                        value={module.completion} 
                        sx={{ flexGrow: 1 }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {module.completion}%
                      </Typography>
                    </Stack>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Reporting System */}
        <Typography variant="h4" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
          Comprehensive Reporting System
        </Typography>
        <Grid container spacing={4} sx={{ mb: 8 }}>
          {reportingFeatures.map((feature, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                    <AssessmentIcon color="primary" />
                    <Typography variant="h6" component="h3">
                      {feature.title}
                    </Typography>
                  </Stack>
                  <List dense>
                    {feature.reports.map((report, idx) => (
                      <ListItem key={idx}>
                        <ListItemIcon>
                          <TimelineIcon color="primary" />
                        </ListItemIcon>
                        <ListItemText primary={report} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* System Configuration */}
        <Box sx={{ textAlign: 'center', p: 4, bgcolor: 'background.paper', borderRadius: 2 }}>
          <SettingsIcon sx={{ fontSize: 40, color: 'primary.main', mb: 2 }} />
          <Typography variant="h5" gutterBottom>
            Customizable System Configuration
          </Typography>
          <Typography variant="body1" paragraph>
            Tailor the platform to match your agency's specific needs and workflows
          </Typography>
          <Button variant="contained" color="primary">
            Configure Your System
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default AgencyOperations;