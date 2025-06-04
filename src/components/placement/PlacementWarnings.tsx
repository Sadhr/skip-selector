import { Box, Alert, Typography, Button } from '@mui/material';
import { Warning, Schedule, ErrorOutline } from '@mui/icons-material';

interface PlacementWarningsProps {
  selectedOption: 'private' | 'public' | null;
  roadAllowed: boolean;
  onBackToSelection: () => void;
}

const PlacementWarnings = ({ 
  selectedOption, 
  roadAllowed, 
  onBackToSelection 
}: PlacementWarningsProps) => {
  return (
    <>
      {!roadAllowed && (
        <Alert 
          severity="warning" 
          icon={<ErrorOutline />}
          sx={{ 
            mb: 4,
            width: '100%'
          }}
        >
          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
            Road Placement Not Available
          </Typography>
          <Typography variant="body2">
            The skip size that you've chosen can not be placed on public roads due to road safety regulations. 
            Please ensure you have adequate private space or choose a different skip size.
          </Typography>
          <Button
            variant="outlined"
            color="warning"
            size="small"
            onClick={onBackToSelection}
            sx={{ mt: 2, textTransform: 'none' }}
          >
            Choose Different Skip
          </Button>
        </Alert>
      )}

      {selectedOption === 'public' && roadAllowed && (
        <Box sx={{ mb: 4, width: '100%' }}>
          <Alert 
            severity="warning" 
            icon={<Warning />}
            sx={{ mb: 2 }}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
              Permit Required
            </Typography>
            <Typography variant="body2">
              A permit is required when placing a skip on a public road. We'll handle the permit application process for you.
            </Typography>
          </Alert>

          <Alert 
            severity="info" 
            icon={<Schedule />}
          >
            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
              Processing Time
            </Typography>
            <Typography variant="body2">
              The council requires 5 working days notice to process permit applications. Please plan your delivery date accordingly.
            </Typography>
          </Alert>
        </Box>
      )}
    </>
  );
};

export default PlacementWarnings; 