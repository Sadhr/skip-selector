import { Box, Typography } from '@mui/material';

const PlacementHeader = () => {
  return (
    <Box sx={{ mb: 4, textAlign: 'center' }}>
      <Typography 
        variant="h3" 
        component="h1" 
        sx={{ 
          fontWeight: 700, 
          mb: 2,
          fontSize: { xs: '1.8rem', md: '2.5rem' }
        }}
      >
        Where will the skip be placed?
      </Typography>
      
      <Typography 
        variant="body1" 
        color="text.secondary"
        sx={{ 
          mb: 1, 
          fontSize: '1.1rem'
        }}
      >
        This helps us determine if you need a permit for your skip
      </Typography>
    </Box>
  );
};

export default PlacementHeader; 