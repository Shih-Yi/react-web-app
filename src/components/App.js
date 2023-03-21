import React from "react"
import Header from "./ui/Header"
import { ThemeProvider } from "@mui/material/styles"
import theme from "./ui/Theme"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <div>
        <h1>Hello World</h1>
        <br />
      </div>
    </ThemeProvider>
  )
}

export default App
