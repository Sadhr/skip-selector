import { Box, Button } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

interface ActionButtonsProps {
  onBack: () => void;
  onContinue: () => void;
  continueDisabled: boolean;
}

const ActionButtons = ({ onBack, onContinue, continueDisabled }: ActionButtonsProps) => {
  return (
    <Box sx={{ 
      display: 'flex', 
      gap: 2, 
      justifyContent: 'center',
      width: '100%'
    }}>
      <Button
        variant="outlined"
        startIcon={<ArrowBack />}
        onClick={onBack}
        sx={{
          px: 4,
          py: 1.5
        }}
      >
        Back
      </Button>
      
      <Button
        variant="contained"
        disabled={continueDisabled}
        onClick={onContinue}
        sx={{
          px: 4,
          py: 1.5
        }}
      >
        Continue
      </Button>
    </Box>
  );
};

export default ActionButtons; 