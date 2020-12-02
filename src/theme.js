import { createMuiTheme, responsiveFontSizes  }  from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green';
let theme = createMuiTheme({
    palette: {
      primary: {
        main: '#6a1b9a',
        light: '#ffffff',
        dark: '#000000'
      },
      secondary: {
        main: green[500],
      },
      background: {
        default: '#ffffff',
      },
    },
    typography: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
      
  });
theme = responsiveFontSizes(theme);
export default theme