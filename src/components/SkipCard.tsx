import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Chip,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  LocalShipping,
  Schedule,
  AttachMoney,
  CheckCircle,
  Cancel,
  Construction,
} from '@mui/icons-material';
import type { SkipCardProps } from '../types/Skip';
import { 
  calculateTotalPrice, 
  calculateVatAmount, 
  getSkipDescription, 
  getCapacityDescription,
  formatPrice 
} from '../utils/skipHelpers';

const SkipCard: React.FC<SkipCardProps> = ({ skip, onSelect, isSelected }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const totalPrice = calculateTotalPrice(skip);
  const vatAmount = calculateVatAmount(skip);

  return (
    <Box sx={{ 
      position: 'relative', 
      width: '100%', 
      height: '100%',
      minHeight: '280px',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Box
        sx={{
          position: 'absolute',
          top: 8,
          left: 8,
          zIndex: 5,
        }}
      >
        <Chip 
          label={`ID: ${skip.id}`}
          size="small"
          sx={{ 
            fontSize: '0.7rem',
            height: 20,
            backgroundColor: 'rgba(0,0,0,0.1)',
            color: 'text.secondary'
          }}
        />
      </Box>

      {isSelected && (
        <Box
          sx={{
            position: 'absolute',
            top: -8,
            right: -8,
            zIndex: 10,
            backgroundColor: 'white',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 32,
            height: 32,
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          }}
        >
          <CheckCircle color="primary" sx={{ fontSize: 28 }} />
        </Box>
      )}

      <Card
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          transition: 'all 0.15s ease-in-out',
          cursor: 'pointer',
          border: isSelected ? `2px solid ${theme.palette.primary.main}` : '1px solid #e0e0e0',
          boxShadow: isSelected 
            ? `0 8px 25px rgba(25, 118, 210, 0.15)` 
            : '0 2px 8px rgba(0,0,0,0.1)',
          '&:hover': {
            boxShadow: '0 12px 30px rgba(0,0,0,0.15)',
            transform: 'translateY(-2px)',
          },
        }}
        onClick={() => onSelect(skip)}
      >
        <CardContent sx={{ 
          flexGrow: 1, 
          p: 3, 
          pt: 4,
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
            <Typography variant="h4" component="h2" fontWeight="bold" color="primary">
              {skip.size} Yard
            </Typography>
            <Typography variant="h5" component="div" fontWeight="bold" color="success.main">
              {formatPrice(totalPrice)}
            </Typography>
          </Box>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontStyle: 'italic', minHeight: '20px' }}>
            {getSkipDescription(skip.size)}
          </Typography>

          <Typography variant="body2" color="text.secondary" sx={{ mb: 3, minHeight: '20px' }}>
            {getCapacityDescription(skip.size)}
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: 2, mb: 2 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', minHeight: '24px' }}>
              <Schedule sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                {skip.hire_period_days} days hire
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', minHeight: '24px' }}>
              <AttachMoney sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
              <Typography variant="body2" color="text.secondary">
                +{formatPrice(vatAmount)} VAT
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2, minHeight: '32px' }}>
            <Chip
              icon={skip.allowed_on_road ? <CheckCircle /> : <Cancel />}
              label="Road Placement"
              size="small"
              color={skip.allowed_on_road ? 'success' : 'default'}
              variant={skip.allowed_on_road ? 'filled' : 'outlined'}
            />
            <Chip
              icon={skip.allows_heavy_waste ? <Construction /> : <Cancel />}
              label="Heavy Waste"
              size="small"
              color={skip.allows_heavy_waste ? 'success' : 'default'}
              variant={skip.allows_heavy_waste ? 'filled' : 'outlined'}
            />
          </Box>

          <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'flex-start' }}>
            {skip.transport_cost && (
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LocalShipping sx={{ fontSize: 16, mr: 1, color: 'text.secondary' }} />
                <Typography variant="body2" color="text.secondary">
                  Transport: {formatPrice(skip.transport_cost)}
                </Typography>
              </Box>
            )}
          </Box>
        </CardContent>

        <CardActions sx={{ p: 3, pt: 0, mt: 'auto' }}>
          <Button
            variant={isSelected ? "contained" : "outlined"}
            color="primary"
            fullWidth
            size="large"
            sx={{
              py: 1.5,
              fontWeight: 'bold',
              textTransform: 'none',
              fontSize: '1.1rem',
            }}
          >
            {isSelected ? 'Selected' : 'Select This Skip'}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default SkipCard; 