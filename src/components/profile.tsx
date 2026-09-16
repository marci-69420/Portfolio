import { Box, Typography, Button, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
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
      
      {/* Social & Contact Buttons */}
      <Stack 
        direction="row" 
        spacing={2} 
        sx={{ mb: 5, flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}
      >
        <Button 
          variant="outlined" 
          startIcon={<LinkedInIcon />} 
          href="https://linkedin.com/in/yourprofile" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          LinkedIn
        </Button>
        <Button 
          variant="outlined" 
          startIcon={<GitHubIcon />} 
          href="https://github.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          GitHub
        </Button>
        <Button 
          variant="contained" 
          startIcon={<EmailIcon />} 
          href="mailto:your.email@example.com"
        >
          Email
        </Button>

        <Button 
          variant="outlined" 
          startIcon={<PhoneIcon />} 
          href="tel:+258469487277"
        >
          Phone
        </Button>
      </Stack>

      {/* Tech Stack Grid */}
      <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center', marginTop: 10 }}>
          Tech Stack
      </Typography>
      <Box
        sx={{
          display: 'grid',
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

      {/* Education Section */}
      <Box sx={{ width: '100%', textAlign: 'left' }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center', marginTop: 10 }}>
          Education
        </Typography>

        {aboutData.schools.map((school, index) => (
          <Box 
            key={index} 
            sx={{ 
              mb: 3, 
              p: 3, 
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2 
            }}
          >
            {/* School Name */}
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {school.name}
            </Typography>
            
            {/* Year */}
            <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary', mb: 1 }}>
              {school.year}
            </Typography>
            
            {/* Degree */}
            <Typography variant="subtitle1" sx={{ fontWeight: 'medium', mb: 1 }}>
              {school.degree}
            </Typography>
            
            {/* Description */}
            <Typography variant="body1">
              {school.description}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* CV Button */}
      <Button 
        variant="contained" 
        size="large"
        color="primary"
        href="/docs/CV.pdf" 
        download="Marton_Magyar_CV.pdf" 
        sx={{ mt: 2, mb: 4, px: 4, py: 1.5, fontWeight: 'bold' }}
      >
        Download CV
      </Button>

    </Box>
  );
}