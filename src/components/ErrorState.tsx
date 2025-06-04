import { Container, Alert, Button } from '@mui/material';

interface ErrorStateProps {
  error: string;
  onRetry: () => void;
}

const ErrorState = ({ error, onRetry }: ErrorStateProps) => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Alert 
        severity="error" 
        action={
          <Button color="inherit" size="small" onClick={onRetry}>
            Try Again
          </Button>
        }
      >
        {error}
      </Alert>
    </Container>
  );
};

export default ErrorState; 