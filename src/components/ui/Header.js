import React from "react"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import useScrollTrigger from "@mui/material/useScrollTrigger"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Box from "@mui/material/Box"
import { useTheme } from "@mui/material/styles"
import SvgIcon from "@mui/material/SvgIcon"
import PublicIcon from "@mui/icons-material/Public"
import favicon from "../../assets/favicon.svg"

const ElevationScroll = (props) => {
  const { children, window } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  })
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

const Header = (props) => {
  const theme = useTheme()
  return (
    <ElevationScroll {...props}>
      <AppBar>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginRight: "2rem",
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
                margin: "0px 0px 0px 0.75rem",
              }}
            >
              Unrealos
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <PublicIcon sx={{ padding: "8px" }} />

            <Button
              variant="contained"
              sx={{
                backgroundColor: theme.palette.common.blue,
                color: "white",
                marginLeft: "1rem",
              }}
            >
              Login
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  )
}

export default Header
