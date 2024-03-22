import { createTheme,responsiveFontSizes } from "@mui/material"

const theme = createTheme({
    palette:{
      primary:{
        main: '#ff4d30'
      } 
    },
    typography: {
      button: {
        textTransform: 'none'
      }
    }
  
  })
export default responsiveFontSizes(theme)