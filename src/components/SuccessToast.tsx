import { 
  Snackbar,
  Alert,
  Typography,
  Box
} from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

interface SuccessToastProps {
  open: boolean;
  onClose: () => void;
  message: string;
}

const SuccessToast = ({ open, onClose, message }: SuccessToastProps) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert 
        onClose={onClose}
        severity="success"
        variant="filled"
        icon={<CheckCircle fontSize="inherit" />}
        sx={{ 
          width: '100%',
          boxShadow: 2
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="body1" sx={{ fontWeight: 500 }}>
            {message}
          </Typography>
        </Box>
      </Alert>
    </Snackbar>
  );
};

export default SuccessToast; 