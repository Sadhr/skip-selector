import { Box, Card, CardContent, Typography, useTheme } from '@mui/material';
import { Home, DirectionsCar } from '@mui/icons-material';

interface PlacementOptionsProps {
  selectedOption: 'private' | 'public' | null;
  roadAllowed: boolean;
  onOptionSelect: (option: 'private' | 'public') => void;
}

const PlacementOptions = ({ 
  selectedOption, 
  roadAllowed, 
  onOptionSelect 
}: PlacementOptionsProps) => {
  const theme = useTheme();

  return (
    <Box sx={{ 
      display: 'grid',
      gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
      gap: 3,
      mb: 4,
      width: '100%'
    }}>
      <Card 
        sx={{ 
          border: selectedOption === 'private' 
            ? `2px solid ${theme.palette.primary.main}` 
            : '1px solid #e0e0e0',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          '&:hover': {
            boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
            transform: 'translateY(-2px)'
          },
          boxShadow: selectedOption === 'private'
            ? `0 8px 25px rgba(25, 118, 210, 0.15)` 
            : '0 2px 8px rgba(0,0,0,0.05)'
        }}
        onClick={() => onOptionSelect('private')}
      >
        <CardContent sx={{ p: 3, textAlign: 'center' }}>
          <Home sx={{ 
            fontSize: 48, 
            color: theme.palette.success.main, 
            mb: 2 
          }} />
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 600, 
              mb: 1,
              color: 'text.primary'
            }}
          >
            Private Property
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ mb: 2 }}
          >
            Driveway or private land
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ fontSize: '0.9rem' }}
          >
            No permit required when placed on your private property
          </Typography>
        </CardContent>
      </Card>
      <Card 
        sx={{ 
          border: selectedOption === 'public' 
            ? `2px solid ${theme.palette.primary.main}` 
            : '1px solid #e0e0e0',
          cursor: roadAllowed ? 'pointer' : 'not-allowed',
          transition: 'all 0.2s ease',
          '&:hover': roadAllowed ? {
            boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
            transform: 'translateY(-2px)'
          } : {},
          boxShadow: selectedOption === 'public'
            ? `0 8px 25px rgba(25, 118, 210, 0.15)` 
            : '0 2px 8px rgba(0,0,0,0.05)',
          opacity: roadAllowed ? 1 : 0.6
        }}
        onClick={() => roadAllowed && onOptionSelect('public')}
      >
        <CardContent sx={{ p: 3, textAlign: 'center' }}>
          <DirectionsCar sx={{ 
            fontSize: 48, 
            color: theme.palette.primary.main, 
            mb: 2 
          }} />
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: 600, 
              mb: 1,
              color: 'text.primary'
            }}
          >
            Public Road
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ mb: 2 }}
          >
            Council or public property
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{ fontSize: '0.9rem' }}
          >
            Permit required for placement on public roads
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PlacementOptions; 