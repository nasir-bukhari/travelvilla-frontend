import { createMuiTheme, responsiveFontSizes  }  from '@material-ui/core/styles'

let theme = createMuiTheme({
    palette: {
      primary: {
        main: '#388e3c',
        light: '#5fa463',
        dark: '#27632a'
      },
      secondary: {
        main: '#ffca28',
        light: '#ffd453',
        dark: '#b28d1c'
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