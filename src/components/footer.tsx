import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: 3, 
        px: 2, 
        mt: 'auto', 
        backgroundColor: 'black', 
        textAlign: 'center' 
      }}
    >
      <Typography 
        variant="body2" 
        sx={{ color: 'white' }}
      >
        © 2026 Márton Magyar
      </Typography>
    </Box>
  );
}