import { Box, Typography } from '@mui/material';
import aboutData from '../data/about.json';

export default function Profile() {
  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', // Centers everything horizontally
        textAlign: 'center',
        maxWidth: 800,
        mx: 'auto', // Margins left/right auto to center the whole container
        p: 4 
      }}
    >
      {/* Profile Image */}
      <Box 
        component="img"
        src={aboutData.profileImage}
        alt="Profile Image"
        sx={{
          width: 150,
          height: 150,
          borderRadius: '50%', // Makes the image circular
          objectFit: 'cover',
          mb: 3,
          boxShadow: 3 // Adds a subtle shadow
        }}
      />

      {/* Welcoming Title */}
      <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
        {aboutData.title}
      </Typography>

      {/* Paragraph Text */}
      <Typography variant="body1" sx={{ color: 'text.secondary', mb: 5, lineHeight: 1.7 }}>
        {aboutData.paragraphText}
      </Typography>

      {/* Tech Stack Grid */}
      <Box
        sx={{
          display: 'grid',
          // 2 columns on mobile, 4 on tablets, exactly 6 on desktop
          gridTemplateColumns: { 
            xs: 'repeat(2, 1fr)', 
            sm: 'repeat(4, 1fr)', 
            md: 'repeat(6, 1fr)' 
          },
          gap: 2,
          width: '100%'
        }}
      >
        {aboutData.techStack.map((tech) => (
          <Box
            key={tech}
            sx={{
              py: 1.5,
              px: 1,
              backgroundColor: 'primary.main',
              color: 'primary.contrastText',
              borderRadius: 1.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '0.875rem'
            }}
          >
            {tech}
          </Box>
        ))}
      </Box>
    </Box>
  );
}