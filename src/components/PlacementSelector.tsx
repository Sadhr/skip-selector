import { 
  Box, 
  Container 
} from '@mui/material';
import { useState, useEffect } from 'react';
import type { Skip } from '../types/Skip';
import PlacementHeader from './placement/PlacementHeader';
import PlacementOptions from './placement/PlacementOptions';
import PlacementWarnings from './placement/PlacementWarnings';
import SkipSummary from './placement/SkipSummary';
import ActionButtons from './placement/ActionButtons';
import PhotoUploadModal from './PhotoUploadModal';
import SuccessToast from './SuccessToast';

interface PlacementSelectorProps {
  selectedSkip: Skip;
  onBack: () => void;
  onContinue: (placement: 'private' | 'public') => void;
}

const PlacementSelector = ({ selectedSkip, onBack }: PlacementSelectorProps) => {
  const roadAllowed = selectedSkip.allowed_on_road;
  
  const [selectedOption, setSelectedOption] = useState<null | 'private' | 'public'>(null);
  
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  
  const [showSuccessToast, setShowSuccessToast] = useState(false);
  
  useEffect(() => {
    if (!roadAllowed) {
      setSelectedOption('private');
    }
  }, [roadAllowed]);
  
  const handleOptionSelect = (option: 'private' | 'public') => {
    if (option === 'public' && !roadAllowed) return;
    setSelectedOption(option);
  };
  
  const handleContinueToPhoto = () => {
    if (selectedOption) {
      setShowPhotoModal(true);
    }
  };
  
  const handlePhotoSuccess = () => {
    setShowPhotoModal(false);
    setShowSuccessToast(true);
    
    setTimeout(() => {
      onBack();
    }, 1500);
  };
  
  const continueDisabled = !selectedOption;

  return (
    <Box sx={{ 
      minHeight: '100vh',
      backgroundColor: '#fafafa',
      py: { xs: 2, sm: 4 }
    }}>
      <Container 
        maxWidth="xl" 
        sx={{ 
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          minHeight: '100vh'
        }}
      >
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          width: '100%',
          maxWidth: '800px',
          mx: 'auto'
        }}>
          <PlacementHeader />
          
          <PlacementOptions 
            selectedOption={selectedOption}
            roadAllowed={roadAllowed}
            onOptionSelect={handleOptionSelect}
          />
          
          <PlacementWarnings 
            selectedOption={selectedOption}
            roadAllowed={roadAllowed}
            onBackToSelection={onBack}
          />
          
          <SkipSummary selectedSkip={selectedSkip} />
          
          <ActionButtons 
            onBack={onBack}
            onContinue={handleContinueToPhoto}
            continueDisabled={continueDisabled}
          />
        </Box>
      </Container>
      
      <PhotoUploadModal 
        open={showPhotoModal}
        onClose={() => setShowPhotoModal(false)}
        onSuccess={handlePhotoSuccess}
      />
      
      <SuccessToast 
        open={showSuccessToast}
        onClose={() => setShowSuccessToast(false)}
        message="Skip placement confirmed successfully!"
      />
    </Box>
  );
};

export default PlacementSelector; 