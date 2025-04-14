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

  LinearProgress,
  Divider,
  IconButton,
  Tooltip,
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PeopleIcon from '@mui/icons-material/People';
import AssessmentIcon from '@mui/icons-material/Assessment';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import MosqueIcon from '@mui/icons-material/Mosque';
import InfoIcon from '@mui/icons-material/Info';

const ForeignEmploymentDashboard: React.FC = () => {
  const monthlyStats = {
    activeEmployees: 1250,
    pendingVisas: 180,
    completedPlacements: 95,
    revenueGrowth: "35%",
    documentProgress: 82,
    visaSuccess: 90,
    deploymentRate: 88,
    hajjApplications: 25
  };

  const performanceMetrics = [
    {
      title: "Document Processing",
      value: monthlyStats.documentProgress,
      icon: <DocumentScannerIcon />,
      color: "primary"
    },
    {
      title: "Visa Success Rate",
      value: monthlyStats.visaSuccess,
      icon: <FlightTakeoffIcon />,
      color: "success"
    },
    {
      title: "Deployment Rate",
      value: monthlyStats.deploymentRate,
      icon: <WorkIcon />,
      color: "info"
    }
  ];

  const quickActions = [
    {
      title: "Employee Management",
      icon: <PeopleIcon fontSize="large" />,
      link: "/employment/management",
      description: "Track and manage employee records"
    },
    {
      title: "Operations Control",
      icon: <WorkIcon fontSize="large" />,
      link: "/employment/operations",
      description: "Monitor daily operations"
    },
    {
      title: "Document Processing",
      icon: <DocumentScannerIcon fontSize="large" />,
      link: "/employment/documents",
      description: "Process and track documents"
    },
    {
      title: "Monthly Reports",
      icon: <AssessmentIcon fontSize="large" />,
      link: "/employment/reports",
      description: "View analytics and reports"
    },
    {
      title: "Deployment Status",
      icon: <FlightTakeoffIcon fontSize="large" />,
      link: "/employment/deployment",
      description: "Track employee deployments"
    },
    {
      title: "Subscription",
      icon: <MonetizationOnIcon fontSize="large" />,
      link: "/subscription",
      description: "Manage platform subscription"
    },
    {
      title: "Hajj Services",
      icon: <MosqueIcon fontSize="large" />,
      link: "/hajj-umrah",
      description: "Manage Hajj/Umrah applications"
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
          backgroundImage: 'url(https://source.unsplash.com/random/1600x900/?office)',
          height: '300px',
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
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h3" color="inherit" gutterBottom>
            Foreign Employment Management
          </Typography>
          <Typography variant="h6" color="inherit" paragraph>
            Complete operational control and reporting system
          </Typography>
        </Container>
      </Paper>

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Performance Metrics */}
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              Performance Metrics
              <Tooltip title="Real-time performance indicators">
                <IconButton size="small">
                  <InfoIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Typography>
            <Grid container spacing={3}>
              {performanceMetrics.map((metric, index) => (
                <Grid item xs={12} md={4} key={index}>
                  <Card>
                    <CardContent>
                      <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
                        {metric.icon}
                        <Typography variant="h6">{metric.title}</Typography>
                      </Stack>
                      <LinearProgress 
                        variant="determinate" 
                        value={metric.value} 
                        color={metric.color}
                        sx={{ height: 10, mb: 1 }}
                      />
                      <Typography variant="body2" color="text.secondary">
                        {metric.value}% Success Rate
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Monthly Statistics - Enhanced Layout */}
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
              Monthly Overview
            </Typography>
            <Grid container spacing={3}>
              {Object.entries(monthlyStats).slice(0, 4).map(([key, value], index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Stack spacing={2}>
                        <Typography color="textSecondary" variant="h6" sx={{ textTransform: 'capitalize' }}>
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </Typography>
                        <Typography variant="h4" color="primary">
                          {value}
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/* Quick Actions - Enhanced Layout */}
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
              Quick Actions
            </Typography>
            <Grid container spacing={3}>
              {quickActions.map((action, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card sx={{ height: '100%' }}>
                    <CardContent>
                      <Stack spacing={2} alignItems="center" sx={{ height: '100%' }}>
                        {action.icon}
                        <Typography variant="h6" align="center">
                          {action.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary" align="center">
                          {action.description}
                        </Typography>
                        <Button 
                          variant="contained" 
                          fullWidth 
                          href={action.link}
                          sx={{ mt: 'auto' }}
                        >
                          Access
                        </Button>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ForeignEmploymentDashboard;