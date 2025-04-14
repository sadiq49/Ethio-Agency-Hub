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
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ToggleButtonGroup,
  ToggleButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import LanguageIcon from '@mui/icons-material/Language';

// Language translations
const translations = {
  en: {
    pageTitle: 'Our Packages & Pricing',
    pageSubtitle: 'Transparent pricing with packages designed to suit different needs and budgets',
    hajjPackages: 'Hajj Packages',
    umrahPackages: 'Umrah Packages',
    hajjDescription: 'Choose the Hajj package that best suits your needs and budget. All packages include essential services for a fulfilling pilgrimage.',
    umrahDescription: 'Select from our range of Umrah packages designed to provide a spiritually enriching experience with varying levels of comfort and service.',
    mostPopular: 'Most Popular',
    selectPackage: 'Select Package',
    customPackageTitle: 'Need a custom package?',
    customPackageDesc: 'We can create a tailored package to meet your specific requirements and preferences.',
    contactCustom: 'Contact Us for Custom Packages',
    standardHajj: 'Standard Hajj Package',
    premiumHajj: 'Premium Hajj Package',
    vipHajj: 'VIP Hajj Package',
    basicUmrah: 'Basic Umrah Package',
    standardUmrah: 'Standard Umrah Package',
    premiumUmrah: 'Premium Umrah Package',
    language: 'Language'
  },
  am: {
    pageTitle: 'የእኛ ፓኬጆች እና ዋጋዎች',
    pageSubtitle: 'ለተለያዩ ፍላጎቶች እና በጀቶች የተዘጋጁ ግልጽ ዋጋዎች ያሉት ፓኬጆች',
    hajjPackages: 'የሐጅ ፓኬጆች',
    umrahPackages: 'የዑምራህ ፓኬጆች',
    hajjDescription: 'ለፍላጎትዎ እና በጀትዎ የሚስማማውን የሐጅ ፓኬጅ ይምረጡ። ሁሉም ፓኬጆች ለሙሉ ጉዞ አስፈላጊ አገልግሎቶችን ያካትታሉ።',
    umrahDescription: 'በተለያዩ የምቾት እና አገልግሎት ደረጃዎች መንፈሳዊ ልምድ ለመስጠት የተዘጋጁ የዑምራህ ፓኬጆችን ይምረጡ።',
    mostPopular: 'በጣም ታዋቂ',
    selectPackage: 'ፓኬጅ ይምረጡ',
    customPackageTitle: 'ልዩ ፓኬጅ ይፈልጋሉ?',
    customPackageDesc: 'ለእርስዎ ልዩ ፍላጎቶች እና ምርጫዎች የተዘጋጀ ፓኬጅ መፍጠር እንችላለን።',
    contactCustom: 'ለልዩ ፓኬጆች ያግኙን',
    standardHajj: 'መደበኛ የሐጅ ፓኬጅ',
    premiumHajj: 'ፕሪሚየም የሐጅ ፓኬጅ',
    vipHajj: 'ቪአይፒ የሐጅ ፓኬጅ',
    basicUmrah: 'መሰረታዊ የዑምራህ ፓኬጅ',
    standardUmrah: 'መደበኛ የዑምራህ ፓኬጅ',
    premiumUmrah: 'ፕሪሚየም የዑምራህ ፓኬጅ',
    language: 'ቋንቋ'
  },
  om: {
    pageTitle: 'Paakejoota fi Gatii Keenya',
    pageSubtitle: 'Gatii ifaa fedhii fi baajata adda addaatiif kan qophaa\'e',
    hajjPackages: 'Paakejoota Hajjii',
    umrahPackages: 'Paakejoota Umraa',
    hajjDescription: 'Paakejii Hajjii fedhii fi baajata keessaniif mijatu filadha. Paakejoota hundi tajaajila barbaachisaa imala guutuu qabu.',
    umrahDescription: 'Paakejoota Umraa sadarkaa qulqullina fi tajaajilaa adda addaan muuxannoo hafuuraa guutuu kennuuf qophaa\'e filadha.',
    mostPopular: 'Kan Irra Jireessa',
    selectPackage: 'Paakejii Filadhu',
    customPackageTitle: 'Paakejii dhuunfaa barbaadduu?',
    customPackageDesc: 'Fedhii fi filannoo keessaniif paakejii dhuunfaa uumuu ni dandeenya.',
    contactCustom: 'Paakejoota Dhuunfaaf Nu Quunnamaa',
    standardHajj: 'Paakejii Hajjii Idilee',
    premiumHajj: 'Paakejii Hajjii Filatamaa',
    vipHajj: 'Paakejii Hajjii VIP',
    basicUmrah: 'Paakejii Umraa Bu\'uuraa',
    standardUmrah: 'Paakejii Umraa Idilee',
    premiumUmrah: 'Paakejii Umraa Filatamaa',
    language: 'Afaan'
  },
  ar: {
    pageTitle: 'باقاتنا والأسعار',
    pageSubtitle: 'أسعار شفافة مع باقات مصممة لتناسب الاحتياجات والميزانيات المختلفة',
    hajjPackages: 'باقات الحج',
    umrahPackages: 'باقات العمرة',
    hajjDescription: 'اختر باقة الحج التي تناسب احتياجاتك وميزانيتك. تشمل جميع الباقات الخدمات الأساسية لحج مرضي.',
    umrahDescription: 'اختر من بين مجموعة باقات العمرة المصممة لتوفير تجربة روحانية غنية بمستويات متفاوتة من الراحة والخدمة.',
    mostPopular: 'الأكثر شعبية',
    selectPackage: 'اختر الباقة',
    customPackageTitle: 'هل تحتاج إلى باقة مخصصة؟',
    customPackageDesc: 'يمكننا إنشاء باقة مخصصة لتلبية متطلباتك وتفضيلاتك المحددة.',
    contactCustom: 'اتصل بنا للباقات المخصصة',
    standardHajj: 'باقة الحج القياسية',
    premiumHajj: 'باقة الحج المميزة',
    vipHajj: 'باقة الحج VIP',
    basicUmrah: 'باقة العمرة الأساسية',
    standardUmrah: 'باقة العمرة القياسية',
    premiumUmrah: 'باقة العمرة المميزة',
    language: 'اللغة'
  }
};

type LanguageKey = keyof typeof translations;

const PricePackages: React.FC = () => {
  const [packageType, setPackageType] = React.useState('hajj');
  const [language, setLanguage] = React.useState<LanguageKey>('en');

  const handlePackageTypeChange = (
    event: React.MouseEvent<HTMLElement>,
    newPackageType: string | null,
  ) => {
    if (newPackageType !== null) {
      setPackageType(newPackageType);
    }
  };

  const handleLanguageChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value as LanguageKey);
  };

  const t = translations[language];

  const getPackageTitle = (type: string, title: string) => {
    if (type === 'hajj') {
      if (title === "Standard Hajj Package") return t.standardHajj;
      if (title === "Premium Hajj Package") return t.premiumHajj;
      if (title === "VIP Hajj Package") return t.vipHajj;
    } else {
      if (title === "Basic Umrah Package") return t.basicUmrah;
      if (title === "Standard Umrah Package") return t.standardUmrah;
      if (title === "Premium Umrah Package") return t.premiumUmrah;
    }
    return title;
  };

  const hajjPackages = [
    {
      title: "Standard Hajj Package",
      price: "$3,500",
      description: "Our basic Hajj package with all essential services",
      features: [
        { included: true, text: "Visa processing assistance" },
        { included: true, text: "Round-trip flights" },
        { included: true, text: "Accommodation in Makkah and Madinah" },
        { included: true, text: "Transportation between holy sites" },
        { included: true, text: "Basic meals included" },
        { included: false, text: "Private transportation" },
        { included: false, text: "VIP access to facilities" },
        { included: false, text: "Premium accommodation locations" }
      ],
      popular: false
    },
    {
      title: "Premium Hajj Package",
      price: "$5,200",
      description: "Enhanced comfort and convenience for your pilgrimage",
      features: [
        { included: true, text: "Visa processing assistance" },
        { included: true, text: "Round-trip flights" },
        { included: true, text: "Superior accommodation in Makkah and Madinah" },
        { included: true, text: "Transportation between holy sites" },
        { included: true, text: "Full board meals" },
        { included: true, text: "Semi-private transportation" },
        { included: false, text: "VIP access to facilities" },
        { included: true, text: "Closer accommodation to Haram" }
      ],
      popular: true
    },
    {
      title: "VIP Hajj Package",
      price: "$7,800",
      description: "The ultimate Hajj experience with premium services",
      features: [
        { included: true, text: "Expedited visa processing" },
        { included: true, text: "Business class flights" },
        { included: true, text: "Luxury accommodation in Makkah and Madinah" },
        { included: true, text: "Private transportation between holy sites" },
        { included: true, text: "Gourmet meals and dining options" },
        { included: true, text: "Private transportation" },
        { included: true, text: "VIP access to facilities" },
        { included: true, text: "Premium accommodation closest to Haram" }
      ],
      popular: false
    }
  ];

  const umrahPackages = [
    {
      title: "Basic Umrah Package",
      price: "$1,200",
      description: "Essential services for your Umrah journey",
      features: [
        { included: true, text: "Visa processing assistance" },
        { included: true, text: "Round-trip flights" },
        { included: true, text: "Standard accommodation" },
        { included: true, text: "Transportation to holy sites" },
        { included: true, text: "Basic guidance" },
        { included: false, text: "Meals included" },
        { included: false, text: "Extended stay options" },
        { included: false, text: "Ziyarat tours" }
      ],
      popular: false
    },
    {
      title: "Standard Umrah Package",
      price: "$1,800",
      description: "Comfortable and convenient Umrah experience",
      features: [
        { included: true, text: "Visa processing assistance" },
        { included: true, text: "Round-trip flights" },
        { included: true, text: "Better accommodation near Haram" },
        { included: true, text: "Transportation to holy sites" },
        { included: true, text: "Experienced guides" },
        { included: true, text: "Some meals included" },
        { included: false, text: "Extended stay options" },
        { included: true, text: "Basic Ziyarat tours" }
      ],
      popular: true
    },
    {
      title: "Premium Umrah Package",
      price: "$2,500",
      description: "Premium services for a memorable Umrah experience",
      features: [
        { included: true, text: "Expedited visa processing" },
        { included: true, text: "Round-trip flights with better options" },
        { included: true, text: "Premium accommodation very close to Haram" },
        { included: true, text: "Private transportation" },
        { included: true, text: "Dedicated guides" },
        { included: true, text: "Full board meals" },
        { included: true, text: "Extended stay options" },
        { included: true, text: "Comprehensive Ziyarat tours" }
      ],
      popular: false
    }
  ];

  const displayPackages = packageType === 'hajj' ? hajjPackages : umrahPackages;

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
          backgroundImage: 'url(https://source.unsplash.com/random/1600x900/?mecca)',
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
            {t.pageTitle}
          </Typography>
          <Typography variant="h5" color="inherit" paragraph>
            {t.pageSubtitle}
          </Typography>
        </Container>
      </Paper>

      <Container maxWidth="lg" sx={{ mb: 8 }}>
        {/* Language Selector */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 3 }}>
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="language-select-label">
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LanguageIcon fontSize="small" sx={{ mr: 1 }} />
                {t.language}
              </Box>
            </InputLabel>
            <Select
              labelId="language-select-label"
              id="language-select"
              value={language}
              label={t.language}
              onChange={handleLanguageChange}
            >
              <MenuItem value="en">English</MenuItem>
              <MenuItem value="am">አማርኛ (Amharic)</MenuItem>
              <MenuItem value="om">Afaan Oromoo</MenuItem>
              <MenuItem value="ar">العربية (Arabic)</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <ToggleButtonGroup
            color="primary"
            value={packageType}
            exclusive
            onChange={handlePackageTypeChange}
            aria-label="Package Type"
            size="large"
          >
            <ToggleButton value="hajj">{t.hajjPackages}</ToggleButton>
            <ToggleButton value="umrah">{t.umrahPackages}</ToggleButton>
          </ToggleButtonGroup>
        </Box>

        <Typography variant="h4" component="h2" gutterBottom align="center">
          {packageType === 'hajj' ? t.hajjPackages : t.umrahPackages}
        </Typography>
        <Typography variant="body1" paragraph sx={{ mb: 4, textAlign: 'center' }}>
          {packageType === 'hajj' ? t.hajjDescription : t.umrahDescription}
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {displayPackages.map((pkg, index) => (
            <Grid item key={index} xs={12} md={4}>
              <Card 
                sx={{ 
                  height: '100%', 
                  display: 'flex', 
                  flexDirection: 'column',
                  position: 'relative',
                  border: pkg.popular ? '2px solid' : 'none',
                  borderColor: 'primary.main',
                  transform: pkg.popular ? 'scale(1.02)' : 'none',
                  zIndex: pkg.popular ? 1 : 'auto',
                  boxShadow: pkg.popular ? '0 8px 24px rgba(0,0,0,0.12)' : ''
                }}
              >
                {pkg.popular && (
                  <Box 
                    sx={{ 
                      position: 'absolute', 
                      top: 12, 
                      right: 0,
                      bgcolor: 'primary.main',
                      color: 'white',
                      py: 0.5,
                      px: 2,
                      borderTopLeftRadius: 4,
                      borderBottomLeftRadius: 4,
                      fontWeight: 'bold',
                      fontSize: '0.875rem'
                    }}
                  >
                    {t.mostPopular}
                  </Box>
                )}
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant="h5" component="h3" align="center">
                    {getPackageTitle(packageType, pkg.title)}
                  </Typography>
                  <Typography variant="h4" color="primary" align="center" sx={{ my: 2 }}>
                    {pkg.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" align="center" paragraph>
                    {pkg.description}
                  </Typography>
                  <Divider sx={{ my: 2 }} />
                  <List dense>
                    {pkg.features.map((feature, idx) => (
                      <ListItem key={idx} disablePadding sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          {feature.included ? (
                            <CheckIcon color="success" />
                          ) : (
                            <CloseIcon color="disabled" />
                          )}
                        </ListItemIcon>
                        <ListItemText 
                          primary={feature.text} 
                          sx={{ 
                            '& .MuiListItemText-primary': { 
                              color: feature.included ? 'text.primary' : 'text.disabled'
                            } 
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
                <Box sx={{ p: 2, pt: 0 }}>
                  <Button 
                    variant={pkg.popular ? "contained" : "outlined"} 
                    color="primary" 
                    fullWidth 
                    size="large"
                  >
                    {t.selectPackage}
                  </Button>
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 6, p: 3, bgcolor: 'background.paper', borderRadius: 2, textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>
            {t.customPackageTitle}
          </Typography>
          <Typography variant="body1" paragraph>
            {t.customPackageDesc}
          </Typography>
          <Button variant="outlined" color="primary">
            {t.contactCustom}
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default PricePackages;