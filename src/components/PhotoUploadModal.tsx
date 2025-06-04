import { 
  Box, 
  Button, 
  Typography, 
  Modal, 
  Paper, 
  IconButton,
  Checkbox,
  FormControlLabel
} from '@mui/material';
import { Close, CloudUpload } from '@mui/icons-material';
import { useState } from 'react';

interface PhotoUploadModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const PhotoUploadModal = ({ open, onClose, onSuccess }: PhotoUploadModalProps) => {
  const [skipUpload, setSkipUpload] = useState(false);

  const handleContinue = () => {
    onSuccess();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="photo-upload-modal"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2
      }}
    >
      <Paper
        sx={{
          position: 'relative',
          maxWidth: 500,
          width: '100%',
          p: 3,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
        }}
      >
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: 8,
            right: 8,
            color: 'text.secondary'
          }}
        >
          <Close />
        </IconButton>

        <Typography 
          variant="h5" 
          component="h2" 
          id="photo-upload-modal"
          sx={{ 
            mb: 2,
            fontWeight: 600
          }}
        >
          Skip Placement Photo
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Please provide a photo of where you plan to place the skip. This helps us ensure proper placement and identify any potential access issues.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            py: 4,
            px: 2,
            mb: 3,
            border: '2px dashed',
            borderColor: 'primary.200',
            borderRadius: 2,
            backgroundColor: 'primary.50',
            cursor: 'pointer',
          }}
        >
          <CloudUpload 
            sx={{ 
              fontSize: 48, 
              color: 'primary.main',
              mb: 2
            }} 
          />
          <Button 
            variant="text" 
            color="primary"
            sx={{ 
              textTransform: 'none',
              fontWeight: 600
            }}
          >
            Upload Photo
          </Button>
        </Box>

        <FormControlLabel
          control={
            <Checkbox 
              checked={skipUpload}
              onChange={(e) => setSkipUpload(e.target.checked)}
            />
          }
          label="Skip this step to upload a photo"
          sx={{ mb: 3 }}
        />

        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
          <Button
            variant="outlined"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleContinue}
          >
            Continue
          </Button>
        </Box>
      </Paper>
    </Modal>
  );
};

export default PhotoUploadModal; 