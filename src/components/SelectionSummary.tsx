import { Box, Typography, Button, Paper, Slide, Divider } from '@mui/material';
import { CheckCircle, ShoppingCart, ArrowForward } from '@mui/icons-material';
import type { Skip } from '../types/Skip';
import { calculateTotalPrice, formatPrice } from '../utils/skipHelpers';

interface SelectionSummaryProps {
  selectedSkips: Skip[];
  onContinue?: () => void;
}

const SelectionSummary = ({ selectedSkips, onContinue }: SelectionSummaryProps) => {
  const totalPrice = selectedSkips.reduce((sum, skip) => sum + calculateTotalPrice(skip), 0);
  const totalVat = selectedSkips.reduce((sum, skip) => sum + (skip.price_before_vat * skip.vat / 100), 0);
  const subtotal = totalPrice - totalVat;

  const handleProceed = () => {
    if (onContinue) {
      onContinue();
    } else {
      const summary = selectedSkips.map(skip => 
        `${skip.size} yard skip - ${formatPrice(calculateTotalPrice(skip))}`
      ).join('\n');
      alert(`Selected Skips:\n${summary}\n\nTotal: ${formatPrice(totalPrice)}`);
    }
  };

  return (
    <Slide in direction="up" timeout={500}>
      <Paper 
        elevation={4}
        sx={{ 
          p: 4, 
          borderRadius: 3,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          textAlign: 'center',
          width: '100%',
          mt: 4
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
          <ShoppingCart sx={{ mr: 1, fontSize: 28 }} />
          <Typography variant="h5" fontWeight="bold">
            {selectedSkips.length} Skip{selectedSkips.length > 1 ? 's' : ''} Selected
          </Typography>
        </Box>

        <Box sx={{ mb: 3 }}>
          {selectedSkips.map((skip) => (
            <Box key={skip.id} sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body1">
                {skip.size} Yard Skip
              </Typography>
              <Typography variant="body1" fontWeight="bold">
                {formatPrice(calculateTotalPrice(skip))}
              </Typography>
            </Box>
          ))}
          
          {selectedSkips.length > 1 && (
            <>
              <Divider sx={{ my: 2, bgcolor: 'rgba(255,255,255,0.3)' }} />
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                <Typography variant="body2">Subtotal:</Typography>
                <Typography variant="body2">{formatPrice(subtotal)}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="body2">VAT:</Typography>
                <Typography variant="body2">{formatPrice(totalVat)}</Typography>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h6" fontWeight="bold">Total:</Typography>
                <Typography variant="h6" fontWeight="bold">{formatPrice(totalPrice)}</Typography>
              </Box>
            </>
          )}
        </Box>

        <Button
          variant="contained"
          size="large"
          onClick={handleProceed}
          startIcon={onContinue ? <ArrowForward /> : <CheckCircle />}
          sx={{
            bgcolor: 'white',
            color: 'primary.main',
            fontWeight: 'bold',
            px: 4,
            py: 1.5,
            fontSize: '1.1rem',
            textTransform: 'none',
            '&:hover': {
              bgcolor: 'grey.100',
            }
          }}
        >
          {onContinue ? 'Continue' : 'Proceed to Checkout'}
        </Button>
      </Paper>
    </Slide>
  );
};

export default SelectionSummary; 