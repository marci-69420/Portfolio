import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 3, 
        px: 2, 
        mt: 'auto', 
        backgroundColor: '#f5f5f5', 
        textAlign: 'center' 
      }}
    >
      <Typography 
        variant="body2" 
        sx={{ color: 'text.secondary' }}
      >
        Lorem ipsum
      </Typography>
    </Box>
  );
}