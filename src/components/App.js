import React from "react"
import Header from "./ui/Header"
import { ThemeProvider } from "@mui/material/styles"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import theme from "./ui/Theme"
import LandingPage from "../components/LandingPage"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
