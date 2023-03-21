import React from "react"
import { useTheme } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"

import favicon from "../assets/favicon.svg"

const LandingPage = () => {
  const theme = useTheme()

  return (
    <Grid
      sx={{
        padding: "24px",
      }}
    >
      <Grid
        container
        sx={{
          height: "700px",
          padding: "7.5rem",
          borderRadius: "24px",
          background:
            "linear-gradient(38deg, rgba(41,28,116,1) 0%, rgba(33,30,50,1) 35%, rgba(33,30,50,1) 60%, rgba(57,18,128,1) 100%)",
        }}
      >
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={6}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "2.5rem",
                }}
              >
                <img alt="favicon" src={favicon} />
                <Typography
                  color="secondary"
                  sx={{
                    fontSize: "1.25rem",
                    fontFamily: "Inter, sans-serif",
                    letterSpacing: "0.15px",
                    fontWeight: 600,
                    lineHeight: "normal",
                    textTransform: "uppercase",
                    margin: "0px 0px 0px 1rem",
                  }}
                >
                  Unrealos
                </Typography>
              </Box>
              <Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "2.9991rem",
                      color: "#FFFFFF",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 500,
                      lineHeight: 1.167,
                      lineSpace: 0,
                      letterSpacing: 0,
                      marginBottom: "0.5rem",
                    }}
                  >
                    Unrealos — Experiential 3D Metaverses for Business Solutions
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "1rem",
                      color: "rgba(231, 227, 252, 0.87)",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 400,
                      lineHeight: 1.5,
                      letterSpacing: "0.15px",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Discover the power of 3D metaverses powered by Unreal Engine
                    and drive your business forward. Our team is equipped to
                    develop creative 3D environments that are tailored to your
                    individual needs, taking into account all elements such as
                    visuals, user experience, interactivity, and more.
                  </Typography>
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      fontSize: "0.9375rem",
                      fontFamily: "Inter, sans-serif",
                      backgroundColor: theme.palette.common.blue,
                      color: "white",
                      textDecoration: "none",
                      marginTop: "2.5rem",
                      padding: "0.53125rem 1.625rem",
                      fontWeight: 600,
                      borderRadius: "12px",
                      lineHeight: 1.71,
                      letterSpacing: "0.3px",
                      minHeight: "56px",
                      "&:hover": {
                        backgroundColor: "#804BDF",
                      },
                    }}
                  >
                    Requets Demo
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box>
                <h1>
                  Unrealos — Experiential 3D Metaverses for Business Solutions
                </h1>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default LandingPage
