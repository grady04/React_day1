import { createTheme } from "@mui/material/styles";

export const themeOptions = {
    palette: {
      type: 'light',
      primary: {
        main: '#247ba0',
      },
      secondary: {
        main: '#731963',
      },
      error: {
        main: '#FF1654',
      },
      warning: {
        main: '#FFD97D',
      },
      success: {
        main: '#053225',
      },
      info: {
        main: '#70C1B3',
      },
    },
  };

  const theme=createTheme(themeOptions);
  export default theme