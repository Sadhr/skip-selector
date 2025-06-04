import { Box, Typography, Button } from '@mui/material';

interface EmptyStateProps {
  onClearFilters?: () => void;
}

const EmptyState = ({ onClearFilters }: EmptyStateProps) => {
  return (
    <Box sx={{ textAlign: 'center', py: 8 }}>
      <Typography variant="h6" color="text.secondary" sx={{ mb: 2 }}>
        No skips match your current filters
      </Typography>
      {onClearFilters && (
        <Button 
          variant="outlined" 
          onClick={onClearFilters}
          sx={{ textTransform: 'none' }}
        >
          Clear Filters
        </Button>
      )}
    </Box>
  );
};

export default EmptyState; 