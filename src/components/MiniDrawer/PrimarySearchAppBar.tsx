import * as React from "react";
import { styled, alpha, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MailIcon from "@mui/icons-material/Mail";
import MoreIcon from "@mui/icons-material/MoreVert";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Divider, Stack } from "@mui/material";

const drawerWidth = 150;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

type PrimarySearchAppBarProps = {
  handleToggleDrawer: () => void;
  sx: object;
};

export default function PrimarySearchAppBar(props: PrimarySearchAppBarProps) {
  const theme = useTheme();

  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{ ...props.sx, ...{ backgroundColor: "inherit" } }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{ mr: 2, color: theme.palette.gray.main }}
            onClick={props.handleToggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Search
            sx={{
              borderRadius: "19px",
              backgroundColor: "#fffffd",
              width: { sm: "100%", md: "auto" },
            }}
          >
            <SearchIconWrapper>
              <SearchIcon sx={{ color: theme.palette.gray.main }} />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ "aria-label": "search" }}
              sx={{
                "& .MuiInputBase-input": { width: { md: "30ch", sm: "100%" } },
                color: theme.palette.gray.main,
              }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            <Box>
              <IconButton
                size="large"
                edge="end"
                sx={{ color: theme.palette.gray.main }}
              >
                <NotificationsIcon />
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                sx={{ color: theme.palette.gray.main }}
              >
                <CalendarMonthIcon />
              </IconButton>
            </Box>
            <Box>
              <IconButton
                size="large"
                edge="end"
                sx={{ color: theme.palette.gray.main }}
              >
                <AccountCircleIcon />
              </IconButton>
            </Box>
          </Stack>
          {/* <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size='large'
              aria-label='show more'
              aria-controls='sidebar-menu'
              aria-haspopup='true'
              onClick={props.handleToggleDrawer}
              color='inherit'
            >
              <MoreIcon />
            </IconButton>
          </Box> */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
