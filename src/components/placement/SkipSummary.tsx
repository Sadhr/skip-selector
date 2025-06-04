import { Box, Paper, Typography } from '@mui/material';
import type { Skip } from '../../types/Skip';
import { calculateTotalPrice, formatPrice } from '../../utils/skipHelpers';

interface SkipSummaryProps {
  selectedSkip: Skip;
}

const SkipSummary = ({ selectedSkip }: SkipSummaryProps) => {
  return (
    <Paper 
      elevation={2}
      sx={{ 
        p: 3, 
        mb: 4,
        width: '100%',
        borderRadius: 2,
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Typography variant="h6" color="text.primary">
          Selected Skip: {selectedSkip.size} Yard
        </Typography>
        <Typography variant="h5" fontWeight="bold" color="success.main">
          {formatPrice(calculateTotalPrice(selectedSkip))}
        </Typography>
      </Box>
    </Paper>
  );
};

export default SkipSummary; 