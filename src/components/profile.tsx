import { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button, Stack, LinearProgress } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import aboutData from '../data/about.json';

export default function Profile() {

  const [animateProgress, setAnimateProgress] = useState(false);
  const languagesSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = languagesSectionRef.current;

    if (!section || animateProgress) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateProgress(true);
          observer.unobserve(section);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [animateProgress]);

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        maxWidth: 1000, 
        mx: 'auto', 
        p: { xs: 2, md: 4 }
      }}
    >
      {/* Image & Text (wrapped) */}
      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', md: 'row' }, // Stacks on mobile, side-by-side on desktop
          alignItems: { xs: 'center', md: 'flex-start' },
          gap: { xs: 3, md: 5 }, // Space between image and text
          width: '100%',
          mb: 6
        }}
      >
        {/* Profile Image */}
        <Box 
          component="img"
          src={aboutData.profileImage}
          alt="Profile Image"
          sx={{
            width: { xs: 150, md: 200 }, // Slightly larger on desktop
            height: { xs: 150, md: 200 },
            borderRadius: '50%',
            objectFit: 'cover',
            boxShadow: 3,
            flexShrink: 0 // Prevents the image from squishing
          }}
        />

        {/* Text & Buttons */}
        <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
            {aboutData.title}
          </Typography>

          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.7 }}>
            {aboutData.paragraphText}
          </Typography>
          
          <Stack 
            direction="row" 
            spacing={2} 
            sx={{ 
              flexWrap: 'wrap', 
              gap: 1, 
              justifyContent: { xs: 'center', md: 'flex-start' } // Aligns buttons left on desktop
            }}
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
        </Box>
      </Box>

      {/* SKILLS SECTION */}
      <Box sx={{ width: '100%', mt: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, textAlign: 'left' }}>
            Skills
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
                fontSize: '0.875rem',
                transition: 'all 0.2s ease-in-out',
                cursor: 'default',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 3,
                  backgroundColor: 'primary.light'
                }
              }}
            >
              {tech}
            </Box>
          ))}
        </Box>
      </Box>

      {/* EDUCATION SECTION */}
      <Box sx={{ width: '100%', textAlign: 'left', mt: 6 }}>
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center' }}>
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
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {school.name}
            </Typography>
            <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary', mb: 1 }}>
              {school.year}
            </Typography>
            <Typography variant="subtitle1" sx={{ fontWeight: 'medium', mb: 1 }}>
              {school.degree}
            </Typography>
            <Typography variant="body1">
              {school.description}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* LANGUAGES SECTION */}
      <Box
        ref={languagesSectionRef}
        sx={{
          width: { xs: '100%', md: '80%' },
          alignSelf: { xs: 'center', md: 'flex-end' },
          mt: 4,
          mb: 5,
        }}
      >
        <Typography
          variant="h5"
          sx={{ fontWeight: 'bold', mb: 3, textAlign: { xs: 'center', md: 'right' } }}
        >
          Languages
        </Typography>

        {aboutData.languages.map((lang, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Box sx={{ display: 'flex', justifyContent: { xs: 'center', md: 'flex-end' }, mb: 0.5 }}>
              <Typography variant="body1" sx={{ fontWeight: 'bold', textAlign: { xs: 'center', md: 'right' } }}>
                {lang.name}
              </Typography>
            </Box>
            <LinearProgress 
              variant="determinate" 
              value={animateProgress ? lang.level * 10 : 0} 
              sx={{ 
                height: 10, 
                borderRadius: 5,
                backgroundColor: 'grey.300',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 5,
                  transition: 'transform 1s ease-out'
                }
              }} 
            />
          </Box>
        ))}
      </Box>

      {/* CV BUTTON */}
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