import { Box } from '@mui/material';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Projects from '../components/projects';

export default function ProjectsPage() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <Projects />
      <Footer />
    </Box>
  );
}