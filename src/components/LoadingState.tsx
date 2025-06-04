import { Container, Box, CircularProgress, Typography } from '@mui/material';

const LoadingState = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box 
        display="flex" 
        flexDirection="column" 
        alignItems="center" 
        justifyContent="center" 
        minHeight="60vh"
      >
        <CircularProgress size={60} sx={{ mb: 3 }} />
        <Typography variant="h6" color="text.secondary">
          Loading available skips...
        </Typography>
      </Box>
    </Container>
  );
};

export default LoadingState; 