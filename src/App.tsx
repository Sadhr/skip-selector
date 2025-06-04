import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './theme/theme';
import SkipSelector from './components/SkipSelector';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SkipSelector />
    </ThemeProvider>
  );
}

export default App;
