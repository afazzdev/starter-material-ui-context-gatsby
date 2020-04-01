import React from "react"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core"

const MuiGlobalTheme = ({ children }) => {
  const theme = createMuiTheme({
    palette: {
      primary: { main: "#000" },
    },
    overrides: {
      MuiTypography: {
        root: {
          fontFamily: "unset !important",
        },
      },
      MuiCssBaseline: {
        "@global": {
          backgroundColor: '#fff'
        }
      }
    },
  })

  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
}

export default MuiGlobalTheme
