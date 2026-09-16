import { Box, Typography, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import projectsData from '../data/projects.json'; // Make sure this path points to your JSON

export default function Projects() {
  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 4 }}>
      <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}>
        My Projects
      </Typography>

      {projectsData.projects.map((project) => (
        <Box 
          key={project.id} 
          sx={{ 
            mb: 4, 
            p: 3, 
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2 
          }}
        >
          {/* Header Area: Title and GitHub button */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              {project.name}
            </Typography>
            
            {/* GitHub button */}
            <Button 
              component="a" 
              href={project.GitHubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              variant="outlined"
              startIcon={<GitHubIcon sx={{ fontSize: '0.9rem' }} />}
              sx={{ 
                textTransform: 'none', 
                fontSize: '0.65rem', // Significantly smaller font
                py: 0.25,            // Minimal vertical padding
                px: 1,               // Minimal horizontal padding
                minWidth: 'auto',    // Prevents the button from forcing a default width
                mt: 0.25             // Pushes it down slightly to align with the title text
              }} 
            >
              View on GitHub
            </Button>
          </Box>

          {/* Project Description */}
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.7 }}>
            {project.description}
          </Typography>

          {/* Tech Stack Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { 
                xs: 'repeat(2, 1fr)', 
                sm: 'repeat(3, 1fr)', 
                md: 'repeat(4, 1fr)' 
              },
              gap: 1.5,
              width: '100%'
            }}
          >
            {project.techStack.map((tech, index) => (
              <Box
                key={index}
                sx={{
                  py: 1,
                  px: 1,
                  backgroundColor: 'primary.main',
                  color: 'primary.contrastText',
                  borderRadius: 1.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '0.8rem',

                transition: 'all 0.2s ease-in-out',
                cursor: 'default', // Keeps the standard arrow cursor
                  
                '&:hover': {
                    transform: 'scale(1.05)', // Enlarges the box by 5%
                    boxShadow: 3,             // Adds a Material UI drop shadow
                    backgroundColor: 'primary.light' // Slightly lightens the color
                }
                }}
              >
                {tech}
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
}