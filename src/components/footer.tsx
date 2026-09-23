import { Box, Typography } from '@mui/material';

export default function Footer() {
  return (
    <>
      <Box
        component="footer"
        sx={{
          position: 'fixed',
          bottom: 'calc(3px + env(safe-area-inset-bottom))',
          left: 0,
          right: 0,
          backgroundColor: 'transparent',
          zIndex: (theme) => theme.zIndex.appBar,
        }}
      >
        <Box
          sx={{
            width: { xs: 'calc(100% - 2rem)', md: '100%' },
            maxWidth: 1100,
            minHeight: { xs: 72, md: 88 },
            mx: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.42)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
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