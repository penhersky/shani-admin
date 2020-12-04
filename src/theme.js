import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#6C4BFF',
      light: '#ffff',
      dark: '#494f5d',
      contrastText: '#ffff',
    },
    secondary: {
      main: '#3d3d3d',
      light: '#ffff',
      dark: '#546e7aa8',
      contrastText: '#C5C5C5',
    },
    background: {
      paper: '#444444',
    },
  },
});

export default theme;
