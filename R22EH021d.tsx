import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Container,
  Chip,
} from '@mui/material';
import { Link as LinkIcon, Rocket as RocketIcon } from '@mui/icons-material';

const Navigation: React.FC = () => {
  return (
    <AppBar 
      position="static" 
      elevation={0}
      sx={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderBottom: '3px solid rgba(255,255,255,0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ py: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', mr: 2 }}>
            <RocketIcon sx={{ mr: 1, fontSize: 32, color: '#ffd700' }} />
            <LinkIcon sx={{ mr: 1, fontSize: 28, color: '#ffffff' }} />
          </Box>
          
          <Typography 
            variant="h5" 
            component="div" 
            sx={{ 
              flexGrow: 1, 
              fontWeight: 700,
              background: 'linear-gradient(45deg, #ffffff 30%, #ffd700 90%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}
          >
            URL Shortener Pro
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <Chip 
              label="Fast & Secure" 
              size="small"
              sx={{
                backgroundColor: 'rgba(255,255,255,0.2)',
                color: 'white',
                fontWeight: 600,
                border: '1px solid rgba(255,255,255,0.3)',
              }}
            />
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'rgba(255,255,255,0.9)',
                fontWeight: 500,
                display: { xs: 'none', sm: 'block' },
              }}
            >
              Professional URL Management
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
