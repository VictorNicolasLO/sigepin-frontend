import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      contained: {
        color: 'white !important',
        textTransform: 'none',
      },
    },
  },
  palette: {
    primary: {
      main: '#3EC9B7',
    },
    text: {
      primary: '#666666',
    },
  },
  typography: {
    allVariants: {
      fontFamily: "'Open Sans', sans-serif",
    },
    h2: {
      color: '#666666',
      fontWeight: '100',
    },
    button: {
      textTransform: 'none',
      paddingTop: '8px',
      fontSize: '1.1em',
    },
  },
});

export default theme;
