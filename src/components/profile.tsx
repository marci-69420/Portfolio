import { useState, useEffect, useRef } from 'react';
import { Box, Typography, Button, Stack, LinearProgress, Fade } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import aboutData from '../data/about.json';

export default function Profile() {

  const [animateProgress, setAnimateProgress] = useState(false);
  const languagesSectionRef = useRef<HTMLDivElement>(null);
  const [animateTopProfile, setAnimateTopProfile] = useState(false);
  const topProfileRef = useRef<HTMLDivElement>(null);
  const [allowSkillsReveal, setAllowSkillsReveal] = useState(false);
  const skillsTitleRef = useRef<HTMLHeadingElement | null>(null);
  const [animateSkillsTitle, setAnimateSkillsTitle] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const skillRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [animateSkills, setAnimateSkills] = useState<boolean[]>([]);

  const [animateEducation, setAnimateEducation] = useState(false);
  const educationRef = useRef<HTMLDivElement>(null);
  const educationTitleRef = useRef<HTMLHeadingElement | null>(null);
  const [animateEducationTitle, setAnimateEducationTitle] = useState(false);
  const schoolRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [animateSchools, setAnimateSchools] = useState<boolean[]>([]);

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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateEducation(true);
          if (educationRef.current) observer.unobserve(educationRef.current);
        }
      },
      { threshold: 0.2 } // Triggers when 20% of the section is visible
    );

    if (educationRef.current) observer.observe(educationRef.current);

    return () => {
      if (educationRef.current) observer.unobserve(educationRef.current);
    };
  }, []);

  useEffect(() => {
    if (!allowSkillsReveal) {
      return;
    }

    const title = educationTitleRef.current;

    if (!title || animateEducationTitle) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateEducationTitle(true);
          observer.unobserve(title);
        }
      },
      { threshold: isMobile ? 0.1 : 0.2 },
    );

    observer.observe(title);

    return () => observer.disconnect();
  }, [allowSkillsReveal, animateEducationTitle, isMobile]);

  useEffect(() => {
    if (!allowSkillsReveal) {
      return;
    }

    if (!schoolRefs.current.length) {
      setAnimateSchools(Array(aboutData.schools.length).fill(false));
      return;
    }

    const observers: IntersectionObserver[] = [];

    schoolRefs.current.forEach((school, index) => {
      if (!school || animateSchools[index]) {
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setAnimateSchools((prev) => {
              const next = [...prev];
              next[index] = true;
              return next;
            });
            observer.unobserve(school);
          }
        },
        { threshold: isMobile ? 0.08 : 0.2 },
      );

      observer.observe(school);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [allowSkillsReveal, aboutData.schools.length, animateSchools, isMobile]);

  useEffect(() => {
    const section = topProfileRef.current;

    if (!section || animateTopProfile) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateTopProfile(true);
          observer.unobserve(section);
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [animateTopProfile]);

  useEffect(() => {
    if (!animateTopProfile) {
      return;
    }

    const timer = window.setTimeout(() => {
      setAllowSkillsReveal(true);
    }, 500);

    return () => window.clearTimeout(timer);
  }, [animateTopProfile]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 600px)');

    const handleChange = () => setIsMobile(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (!allowSkillsReveal) {
      return;
    }

    const title = skillsTitleRef.current;

    if (!title || animateSkillsTitle) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimateSkillsTitle(true);
          observer.unobserve(title);
        }
      },
      { threshold: isMobile ? 0.1 : 0.2 },
    );

    observer.observe(title);

    return () => observer.disconnect();
  }, [allowSkillsReveal, animateSkillsTitle, isMobile]);

  useEffect(() => {
    if (!allowSkillsReveal) {
      return;
    }

    if (!skillRefs.current.length) {
      setAnimateSkills(Array(aboutData.techStack.length).fill(false));
      return;
    }

    const observers: IntersectionObserver[] = [];

    skillRefs.current.forEach((skill, index) => {
      if (!skill || animateSkills[index]) {
        return;
      }

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setAnimateSkills((prev) => {
              const next = [...prev];
              next[index] = true;
              return next;
            });
            observer.unobserve(skill);
          }
        },
        { threshold: isMobile ? 0.05 : 0.2 },
      );

      observer.observe(skill);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [allowSkillsReveal, aboutData.techStack.length, animateSkills, isMobile]);

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
      <Fade in={animateTopProfile} timeout={100} style={{ transitionDelay: animateTopProfile ? '100ms' : '0ms' }}>
        <Box 
          ref={topProfileRef}
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'center', md: 'flex-start' },
            gap: { xs: 3, md: 5 }, 
            width: '100%',
            mb: 6,
            transformOrigin: 'center center'
          }}
        >
          {/* Profile Image */}
          <Box 
            component="img"
            src={aboutData.profileImage}
            alt="Profile Image"
            sx={{
              width: { xs: 150, md: 200 }, 
              height: { xs: 150, md: 200 },
              borderRadius: '10%',
              objectFit: 'cover',
              boxShadow: 3,
              flexShrink: 0,
              marginTop: 8
            }}
          />

          {/* Text & Buttons */}
          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h4" component="h1" sx={{ fontWeight: 'bold', mb: 2 }}>
              Hi, I'm <Box component="span" sx={{ color: '#00ff1578' }}>Marci</Box>, software engineer student
            </Typography>

            <Typography variant="body1" sx={{ color: 'white', mb: 4, lineHeight: 1.7 }}>
              {aboutData.paragraphText}
            </Typography>
            
            <Stack 
              direction="row" 
              spacing={2} 
              sx={{ 
                flexWrap: 'wrap', 
                gap: 1, 
                justifyContent: { xs: 'center', md: 'flex-start' }
              }}
            >
              <Button 
                variant="outlined" 
                startIcon={<LinkedInIcon />} 
                href="https://www.linkedin.com/in/m%C3%A1rton-magyar/" 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ color: '#00ff1578', borderColor: '#00ff1578', '&:hover': { borderColor: '#00ff15', color: '#00ff15' } }}
              >
                LinkedIn
              </Button>
              <Button 
                variant="outlined" 
                startIcon={<GitHubIcon />} 
                href="https://github.com/marci-69420" 
                target="_blank" 
                rel="noopener noreferrer"
                sx={{ color: '#00ff1578', borderColor: '#00ff1578', '&:hover': { borderColor: '#00ff15', color: '#00ff15' } }}
              >
                GitHub
              </Button>
              <Button 
                variant="outlined" 
                startIcon={<EmailIcon />} 
                href="mailto:magyarmarci04@gmail.com"
                sx={{ color: '#00ff1578', borderColor: '#00ff1578', '&:hover': { borderColor: '#00ff15', color: '#00ff15' } }}
              >
                Email
              </Button>
              <Button 
                variant="outlined" 
                startIcon={<PhoneIcon />} 
                href="tel:+258469487277"
                sx={{ color: '#00ff1578', borderColor: '#00ff1578', '&:hover': { borderColor: '#00ff15', color: '#00ff15' } }}
              >
                Phone
              </Button>
            </Stack>
          </Box>
        </Box>
      </Fade>

      {/* SKILLS SECTION */}
      <Box sx={{ width: '100%', mt: 2 }}>
        <Fade in={allowSkillsReveal && animateSkillsTitle} timeout={600} style={{ transitionDelay: allowSkillsReveal && animateSkillsTitle ? '100ms' : '0ms' }}>
          <Typography
            ref={skillsTitleRef}
            variant="h5"
            sx={{ fontWeight: 'bold', mb: 3, textAlign: 'left' }}
          >
            Skills
          </Typography>
        </Fade>
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
          {aboutData.techStack.map((tech, index) => (
            <Fade
              key={tech}
              in={allowSkillsReveal && (isMobile ? animateSkillsTitle : animateSkills[index] ?? false)}
              timeout={600}
              style={{ transitionDelay: allowSkillsReveal && (isMobile ? animateSkillsTitle : animateSkills[index]) ? `${isMobile ? 100 : index * 80}ms` : '0ms' }}
            >
              <Box
                ref={(element) => {
                  skillRefs.current[index] = element;
                }}
                sx={{
                  py: 1.5,
                  px: 1,
                  border: '2px solid',
                  borderColor: '#00ff1578',
                  borderRadius: 1.5,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  fontSize: '0.7rem',
                  color: '#00ff1578',
                  transition: 'all 0.2s ease-in-out',
                  cursor: 'default',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: 3,
                    borderColor: '#00ff15',
                    color: '#00ff15',
                  },
                  width: '100%',
                }}
              >
                {tech}
              </Box>
            </Fade>
          ))}
        </Box>
      </Box>

      {/* EDUCATION SECTION */}
      <Box sx={{ width: '100%', textAlign: 'left', mt: 6 }}>
        <Fade in={allowSkillsReveal && animateEducationTitle} timeout={600} style={{ transitionDelay: allowSkillsReveal && animateEducationTitle ? '100ms' : '0ms' }}>
          <Typography
            ref={educationTitleRef}
            variant="h5"
            sx={{ fontWeight: 'bold', mb: 3, textAlign: 'center' }}
          >
            Education
          </Typography>
        </Fade>

        {aboutData.schools.map((school, index) => (
          <Fade
            key={index}
            in={allowSkillsReveal && (isMobile ? animateEducationTitle : animateSchools[index] ?? false)}
            timeout={600}
            style={{ transitionDelay: allowSkillsReveal && (isMobile ? animateEducationTitle : animateSchools[index]) ? `${isMobile ? 120 : index * 100}ms` : '0ms' }}
          >
            <Box
              ref={(element) => {
                schoolRefs.current[index] = element;
              }}
              sx={{
                mb: 3,
                p: 3,
                borderColor: 'divider',
                borderRadius: 2
              }}
            >
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                {school.name}
              </Typography>
              <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'white', mb: 1 }}>
                {school.year}
              </Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: 'medium', mb: 1, color: '#00ff1578' }}>
                {school.degree}
              </Typography>
              <Typography variant="body1">
                {school.description}
              </Typography>
            </Box>
          </Fade>
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
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 5,
                  backgroundColor: '#00ff1578',
                  transition: 'transform 1s ease-out'
                }
              }} 
            />
          </Box>
        ))}
      </Box>

      {/* CV BUTTON */}
      <Button 
        variant="outlined" 
        size="large"
        color="primary"
        href="/docs/CV.pdf" 
        download="Marton_Magyar_CV.pdf"
        sx={{ color: '#00ff1578', borderColor: '#00ff1578', '&:hover': { borderColor: '#00ff15', color: '#00ff15' } }}
      >
        Download CV
      </Button>
    </Box>
  );
}