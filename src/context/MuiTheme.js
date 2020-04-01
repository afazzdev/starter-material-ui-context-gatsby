import React from "react"
import { createMuiTheme } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/styles"

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
          "body": {
            backgroundColor: "#fff",
          },
          a: {
            textShadow: "unset",
          },
        },
      },
    },
  })

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export default MuiGlobalTheme
