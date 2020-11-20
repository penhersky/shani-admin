import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#5238C5',
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
  },
});

export default theme;
