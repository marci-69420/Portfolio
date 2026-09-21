import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <>
      <Box
        component="footer"
        sx={{
          position: 'fixed',
          bottom: 3,
          left: 0,
          right: 0,
          backgroundColor: 'transparent',
          zIndex: (theme) => theme.zIndex.appBar,
        }}
      >
        <Box
          sx={{
            width: '100%',
            maxWidth: 1100,
            minHeight: { xs: 72, md: 88 },
            mx: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.42)',
            backdropFilter: { xs: 'none', lg: 'blur(16px)' },
            WebkitBackdropFilter: { xs: 'none', lg: 'blur(16px)' },
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: 2,
            px: { xs: 2, sm: 3, md: 0 },
          }}
        >
          <Typography variant="body2" sx={{ color: 'white' }}>
            © 2026 Márton Magyar
          </Typography>
        </Box>
      </Box>
      <Box sx={{ height: { xs: 72, md: 88 } }} />
    </>
  );
}