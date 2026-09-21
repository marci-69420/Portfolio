import { Box } from '@mui/material';
import Navbar from '../components/navbar';
import Profile from '../components/profile';

export default function About() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      
      <Box component="main" id="main" sx={{ flexGrow: 1, p: 4 }}>
        <Profile />
      </Box>
      
    </Box>
  );
}