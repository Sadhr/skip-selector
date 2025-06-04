import { Box, Grow } from '@mui/material';
import SkipCard from './SkipCard';
import type { Skip } from '../types/Skip';

interface SkipGridProps {
  skips: Skip[];
  selectedSkips: Skip[];
  onSkipSelect: (skip: Skip) => void;
}

const SkipGrid = ({ skips, selectedSkips, onSkipSelect }: SkipGridProps) => {
  return (
    <Box 
      sx={{ 
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)'
        },
        gap: { xs: 2, sm: 3 },
        mb: 4,
        width: '100%',
        justifyItems: 'center',
        alignItems: 'stretch',
        gridAutoRows: '1fr'
      }}
    >
      {skips.map((skip, index) => (
        <Grow 
          key={skip.id}
          in 
          timeout={300 + index * 50}
          style={{ 
            transitionDelay: `${index * 30}ms`,
            width: '100%',
            maxWidth: '380px',
            height: '100%'
          }}
        >
          <Box sx={{ 
            width: '100%', 
            height: '100%',
            display: 'flex'
          }}>
            <SkipCard
              skip={skip}
              onSelect={onSkipSelect}
              isSelected={selectedSkips.some(s => s.id === skip.id)}
            />
          </Box>
        </Grow>
      ))}
    </Box>
  );
};

export default SkipGrid; 