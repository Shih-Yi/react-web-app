import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  palette: {
    primary: {
      main: "#312D4B",
    },
    secondary: {
      main: "#e7e3fcde",
    },
    common: {
      blue: "#9155FD",
    },
  },
  typography: {
    h3: {
      fontFamily: "Inter",
    },
  },
})

export default theme
