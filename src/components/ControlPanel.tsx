import { Box, Button, Paper, useTheme, useMediaQuery, ButtonGroup } from '@mui/material';
import { Refresh, FilterList, Sort, ArrowUpward, ArrowDownward } from '@mui/icons-material';
import type { SortConfig, SortField, SortDirection } from '../types/Skip';

interface ControlPanelProps {
  sortConfig: SortConfig;
  setSortConfig: (config: SortConfig) => void;
  filterByRoad: boolean | null;
  setFilterByRoad: (filter: boolean | null) => void;
  onRefresh: () => void;
}

const ControlPanel = ({ 
  sortConfig, 
  setSortConfig, 
  filterByRoad, 
  setFilterByRoad, 
  onRefresh 
}: ControlPanelProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleSortFieldChange = (field: SortField) => {
    setSortConfig({ ...sortConfig, field });
  };

  const handleSortDirectionChange = (direction: SortDirection) => {
    setSortConfig({ ...sortConfig, direction });
  };

  return (
    <Paper 
      elevation={2} 
      sx={{ 
        p: 3, 
        mb: 4, 
        borderRadius: 3,
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        width: '100%'
      }}
    >
      <Box sx={{ 
        display: 'flex', 
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: isMobile ? 'stretch' : 'center',
        justifyContent: 'space-between',
        gap: 2
      }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            <Button
              variant={sortConfig.field === 'size' ? 'contained' : 'outlined'}
              startIcon={<Sort />}
              onClick={() => handleSortFieldChange('size')}
              sx={{ 
                textTransform: 'none',
                fontWeight: sortConfig.field === 'size' ? 700 : 600
              }}
            >
              Sort by Size
            </Button>
            <Button
              variant={sortConfig.field === 'price' ? 'contained' : 'outlined'}
              startIcon={<Sort />}
              onClick={() => handleSortFieldChange('price')}
              sx={{ 
                textTransform: 'none',
                fontWeight: sortConfig.field === 'price' ? 700 : 600
              }}
            >
              Sort by Price
            </Button>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <ButtonGroup size="small" variant="outlined">
              <Button
                variant={sortConfig.direction === 'asc' ? 'contained' : 'outlined'}
                startIcon={<ArrowUpward />}
                onClick={() => handleSortDirectionChange('asc')}
                sx={{ textTransform: 'none' }}
              >
                Low to High
              </Button>
              <Button
                variant={sortConfig.direction === 'desc' ? 'contained' : 'outlined'}
                startIcon={<ArrowDownward />}
                onClick={() => handleSortDirectionChange('desc')}
                sx={{ textTransform: 'none' }}
              >
                High to Low
              </Button>
            </ButtonGroup>
          </Box>
        </Box>
        
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          </Box>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'flex-start',  }}>
            <Button
              variant={filterByRoad === true ? 'contained' : 'outlined'}
              startIcon={<FilterList />}
              onClick={() => setFilterByRoad(filterByRoad === true ? null : true)}
              sx={{ 
                textTransform: 'none',
                fontWeight: filterByRoad === true ? 700 : 600
              }}
            >
              Road Allowed Only
            </Button>
            <Button
              variant="outlined"
              startIcon={<Refresh />}
              onClick={onRefresh}
              sx={{ textTransform: 'none' }}
            >
              Refresh
            </Button>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default ControlPanel; 