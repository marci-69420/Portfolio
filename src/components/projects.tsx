import { useRef, useState, useEffect } from 'react';
import { Box, Typography, Button, Fade } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import projectsData from '../data/projects.json';

export default function Projects() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const [animateTitle, setAnimateTitle] = useState(false);
  const projectRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [animateProjects, setAnimateProjects] = useState<boolean[]>([]);

  const getTechLabel = (tech: string | { name: string; color: string }) =>
    typeof tech === 'string' ? tech : tech.name;

  const getTechColor = (tech: string | { name: string; color: string }) =>
    typeof tech === 'string' ? 'primary.main' : tech.color;

  useEffect(() => {
    const title = titleRef.current;

    if (!title || animateTitle) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateTitle(true);
          observer.unobserve(title);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(title);

    return () => observer.disconnect();
  }, [animateTitle]);

  useEffect(() => {
    if (!projectRefs.current.length) {
      setAnimateProjects(Array(projectsData.projects.length).fill(false));
      return;
    }

    const observers: IntersectionObserver[] = [];

    projectRefs.current.forEach((projectNode, index) => {
      if (!projectNode || animateProjects[index]) {
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setAnimateProjects((prev) => {
              const next = [...prev];
              next[index] = true;
              return next;
            });
            observer.unobserve(projectNode);
          }
        },
        { threshold: 0.15 },
      );

      observer.observe(projectNode);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [animateProjects]);

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 4, marginTop: 6}}>
      <Fade in={animateTitle} timeout={600}>
        <Typography
          ref={titleRef}
          variant="h4"
          component="h1"
          sx={{ fontWeight: 'bold', mb: 4, textAlign: 'center' }}
        >
          My Projects
        </Typography>
      </Fade>

      {projectsData.projects.map((project, projectIndex) => (
        <Fade
          key={project.id}
          in={animateProjects[projectIndex] ?? false}
          timeout={600}
          style={{ transitionDelay: animateProjects[projectIndex] ? `${projectIndex * 100}ms` : '0ms' }}
        >
          <Box 
            ref={(element: HTMLDivElement | null) => {
              projectRefs.current[projectIndex] = element;
            }}
            sx={{ 
              mb: 4, 
              p: 3, 
              border: '1px solid',  
              borderColor: 'divider',
              borderRadius: 2,
              backdropFilter: { xs: 'none', lg: 'blur(16px)' },
              WebkitBackdropFilter: { xs: 'none', lg: 'blur(16px)' },
              backgroundColor: 'rgba(0, 0, 0, 0.13)',
            }}
          >
          {/* Header Area: Title and GitHub button */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2,  }}>
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
                fontSize: '0.65rem', 
                py: 0.25,
                minWidth: 'auto',
                mt: 0.25,
                color: '#00ff1578',
                borderColor: '#00ff1578',
                '& .MuiButton-startIcon': {
                  mr: { xs: 0, sm: 1 },
                },
                '& .MuiButton-label': {
                  display: { xs: 'none', sm: 'inline-flex' },
                },
                width: { xs: 40, sm: 'auto' },
                px: { xs: 0, sm: 1 },
                '&:hover': {
                  borderColor: '#00ff15',
                  color: '#00ff15',
                  backgroundColor: 'rgba(0, 255, 21, 0.04)'
                }
              }}
              aria-label="View project on GitHub"
            >
              <Box component="span" sx={{ display: { xs: 'none', sm: 'inline' } }}>
                View on GitHub
              </Box>
            </Button>
          </Box>

          {/* Project Description */}
          <Typography
            variant="body1"
            sx={{
              color: 'white',
              mb: 3,
              lineHeight: 1.7,
              whiteSpace: 'pre-line'
            }}
          >
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
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  color: getTechColor(tech),
                  border: '2px solid',
                  borderColor: getTechColor(tech),
                  borderRadius: 1.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '0.8rem',
                  transition: 'all 0.2s ease-in-out',
                  cursor: 'default',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 3,
                    borderColor: getTechColor(tech),
                    backgroundColor: 'rgba(255,255,255,0.04)',
                    filter: 'brightness(1.2)'
                  }
                }}
              >
                {getTechLabel(tech)}
              </Box>
            ))}
          </Box>
        </Box>
        </Fade>
      ))}
    </Box>
  );
}