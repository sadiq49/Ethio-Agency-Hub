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
  Chip,
  Divider,
  CardActions
} from '@mui/material';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import TimerIcon from '@mui/icons-material/Timer';

const Promotions: React.FC = () => {
  const currentPromotions = [
    {
      title: "Early Bird Hajj 2024",
      description: "Book your Hajj 2024 package before December 31st and save 15% on our premium packages.",
      image: "https://source.unsplash.com/random/600x400/?kaaba",
      discount: "15% OFF",
      validUntil: "December 31, 2023",
      code: "HAJJ2024EARLY",
      featured: true
    },
    {
      title: "Family Umrah Package",
      description: "Special discount for family groups of 4 or more. Children under 12 receive additional 10% off.",
      image: "https://source.unsplash.com/random/600x400/?family,travel",
      discount: "Family Discount",
      validUntil: "Ongoing",
      code: "FAMILYUMRAH",
      featured: false
    },
    {
      title: "Last Minute Umrah",
      description: "Special rates for last-minute Umrah bookings within 30 days of departure.",
      image: "https://source.unsplash.com/random/600x400/?mosque",
      discount: "Up to 20% OFF",
      validUntil: "Limited availability",
      code: "LASTMINUTE",
      featured: true
    },
    {
      title: "Group Booking Discount",
      description: "Organizing a group of 10 or more? Receive special group rates and one free package for the group leader.",
      image: "https://source.unsplash.com/random/600x400/?group,travel",
      discount: "Group Rates + Free Package",
      validUntil: "Ongoing",
      code: "GROUP10PLUS",
      featured: false
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
          backgroundImage: 'url(https://source.unsplash.com/random/1600x900/?promotion)',
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
            Special Promotions & Offers
          </Typography>
          <Typography variant="h5" color="inherit" paragraph>
            Take advantage of our limited-time offers and exclusive deals
          </Typography>
          <Button variant="contained" color="secondary" size="large" sx={{ mt: 2 }}>
            View All Offers
          </Button>
        </Container>
      </Paper>

      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          Current Promotions
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 4 }}>
          Browse our current special offers and promotions. Don't miss these opportunities to save on your next trip or service.
        </Typography>

        <Grid container spacing={4}>
          {currentPromotions.map((promo, index) => (
            <Grid item key={index} xs={12} md={6}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  position: 'relative',
                  border: promo.featured ? '2px solid' : 'none',
                  borderColor: 'secondary.main'
                }}
              >
                {promo.featured && (
                  <Chip 
                    label="Featured Offer" 
                    color="secondary" 
                    sx={{ 
                      position: 'absolute', 
                      top: 10, 
                      right: 10, 
                      zIndex: 1 
                    }} 
                  />
                )}
                <CardMedia
                  component="img"
                  height="200"
                  image={promo.image}
                  alt={promo.title}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                    <Typography gutterBottom variant="h5" component="h3">
                      {promo.title}
                    </Typography>
                    <Chip 
                      icon={<LocalOfferIcon />} 
                      label={promo.discount} 
                      color="primary" 
                      variant="outlined" 
                    />
                  </Box>
                  <Typography variant="body2" paragraph>
                    {promo.description}
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <TimerIcon fontSize="small" sx={{ mr: 1, color: 'text.secondary' }} />
                    <Typography variant="body2" color="text.secondary">
                      Valid until: {promo.validUntil}
                    </Typography>
                  </Box>
                  <Box sx={{ bgcolor: 'grey.100', p: 1, borderRadius: 1, mt: 2 }}>
                    <Typography variant="body2" align="center">
                      Promo Code: <strong>{promo.code}</strong>
                    </Typography>
                  </Box>
                </CardContent>
                <Divider />
                <CardActions>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                  <Button size="small" variant="contained" sx={{ ml: 'auto' }}>
                    Book Now
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Promotions;