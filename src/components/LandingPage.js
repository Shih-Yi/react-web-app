import React from "react"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}))

const LandingPage = () => {
  return (
    <Grid
      sx={{
        padding: "24px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Box
            sx={{
              background:
                "linear-gradient(38deg, rgba(41,28,116,1) 0%, rgba(33,30,50,1) 35%, rgba(33,30,50,1) 60%, rgba(57,18,128,1) 100%)",
            }}
          >
            <Box sx={{ height: "640px", padding: "7.5rem" }}>
              <h1>
                Unrealos — Experiential 3D Metaverses for Business Solutions
              </h1>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default LandingPage
