import { Typography, Box, Paper } from '@mui/material';
import { LocationOn } from '@mui/icons-material';

interface HeaderProps {
  postcode?: string;
  area?: string;
}

const Header = ({ postcode = 'NR32', area = 'Lowestoft' }: HeaderProps) => {
  return (
    <Box sx={{ 
      textAlign: 'center', 
      mb: 4,
      width: '100%',
      maxWidth: '800px'
    }}>
      <Typography 
        variant="h1" 
        component="h1" 
        sx={{ 
          fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
          fontWeight: 700,
          color: 'text.primary',
          mb: 1,
          letterSpacing: '-0.02em',
          lineHeight: 1.2
        }}
      >
        Choose Your Skip Size
      </Typography>
      
      <Typography 
        variant="h2" 
        component="h2"
        sx={{ 
          fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.4rem' },
          fontWeight: 400,
          color: 'text.secondary',
          mb: 3,
          lineHeight: 1.4,
          maxWidth: '600px',
          mx: 'auto'
        }}
      >
        Find the perfect skip for your garden waste and home projects
      </Typography>

      <Paper
        elevation={1}
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          px: 2,
          py: 1,
          borderRadius: 2,
          backgroundColor: 'primary.50',
          border: '1px solid',
          borderColor: 'primary.200'
        }}
      >
        <LocationOn 
          sx={{ 
            fontSize: 18, 
            mr: 1, 
            color: 'primary.main' 
          }} 
        />
        <Typography 
          variant="body1" 
          sx={{ 
            fontWeight: 600,
            color: 'primary.main',
            fontSize: '0.95rem'
          }}
        >
          {area}, {postcode}
        </Typography>
      </Paper>
    </Box>
  );
};

export default Header; 