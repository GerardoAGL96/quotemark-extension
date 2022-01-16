import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { StoriesList } from './StoriesList';
import { Stories } from './StoriesContext';
import { StoryView } from './StoryView';
import { HouseIcon } from '@shared/components/icons';
import theme, { palette } from '@shared/config/theme-popup';
import '@shared/config/scrollbar.css';

const StoriesPopup: React.FC = () => {
  return (
    <Box 
      width={350} 
      height={500}
      bgcolor="background.paper"
    >
      <Box 
        px={2}
        py={1}
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography sx={styles.label}>
          Stories
        </Typography>
        <IconButton 
          size="small"
          onClick={() => chrome.runtime.openOptionsPage()}
        >
          <HouseIcon size={20} color={palette.whiteLight} />
        </IconButton>
      </Box>
      <StoriesList />
    </Box>
  );
}

const styles = {
  label: {
    fontFamily: 'Poppins',
    fontWeight: 300,
    color: palette.whiteLight,
    fontSize: '0.9rem'
  }
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <Stories>
      <StoryView>
        <StoriesPopup />
        <CssBaseline />
      </StoryView>
    </Stories>
  </ThemeProvider>,
  document.getElementById('root'),
)