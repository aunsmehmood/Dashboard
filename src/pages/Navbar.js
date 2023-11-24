import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import SettingsIcon from "@mui/icons-material/Settings";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ChatIcon from "@mui/icons-material/Chat";
import EmailIcon from "@mui/icons-material/Email";
import AppsIcon from "@mui/icons-material/Apps";
import AddLinkIcon from "@mui/icons-material/AddLink";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Button from "@mui/material/Button";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import PeopleIcon from "@mui/icons-material/People";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import img1 from "../Images/avatar.jpg";
import img2 from '../Images/Logo.png';
import "./Navbar.scss";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import { ArrowDropDown } from "@mui/icons-material";

const drawerWidth = 240;

function ResponsiveDrawer({ children }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box>
      <List>
        <img src={img2} alt="Newimage"/>
      </List>
      <List>
        {["Dashboard", "Loyality", "Gift Cards", "Prepaid"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <Link
                to={
                  text === "Dashboard"
                    ? "/"
                    : text === "Loyality"
                    ? "/Hello"
                    : "/newPage"
                }
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItemButton className="list-item">
                  <ListItemIcon>
                    {index % 4 === 0 ? (
                      <DashboardIcon />
                    ) : index % 4 === 1 ? (
                      <LoyaltyIcon />
                    ) : index % 4 === 2 ? (
                      <CardGiftcardIcon />
                    ) : (
                      <ViewInArIcon />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                  />
                  {text !== "Dashboard" && (
                    <ArrowDropDownIcon
                      id="basic-button"
                      aria-controls={open ? "basic-menu" : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? "true" : undefined}
                      onClick={handleClick}
                    />
                  )}
                </ListItemButton>
              </Link>
            </ListItem>
          )
        )}
      </List>
      <List
        sx={{
          paddingTop: "500px",
        }}
      >
        {["Setting", "Logout"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton className="list-item">
              <ListItemIcon>
                {index % 2 === 0 ? <SettingsIcon /> : <LogoutIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />
      <AppBar className="appbar"
        position="fixed"
        sx={{
          background: "white",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          justifyContent: "space-between",
        }}
      >
        <Toolbar className="Toolbar">
          <IconButton
          className="menu-icon"
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <div className="search">
            <SearchIcon/>
          </div>
          <Box
            className="icons"
            >
            <Box className="icon-box">
              <LocalPhoneIcon />
              <Divider className="divider"
                orientation="vertical"
                flexItem
              />
              <ChatIcon />
              <Divider className="divider"
                orientation="vertical"
                flexItem
              />
              <PeopleIcon />
              <Divider
              className="divider"
                orientation="vertical"
                flexItem
              />
              <EmailIcon />
            </Box>
            <Box
              sx={{
                marginRight: "20px",
              }}
            >
              <AppsIcon />
            </Box>
            <Box className="addlinkicon">
              <AddLinkIcon />
            </Box>
            <Box className="notification">
              <NotificationsIcon />
            </Box>
            <Typography className="orcalo">
              Orcalo Limited
            </Typography>
          </Box>
          <Box>
            <Avatar alt="img1" src={img1} />
          </Box>
          <Box>
            <ArrowDropDown/>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: "#F7F9FB",
        }}
      >
        <Toolbar />
        <Box
          className="dashboard">
          <h2>Dashboard</h2>
          <Button className="datepicker">
            This Month
            <ArrowDropDown />
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Menu Item 1</MenuItem>
            <MenuItem onClick={handleClose}>Menu Item 2</MenuItem>
            <MenuItem onClick={handleClose}>Menu Item 3</MenuItem>
          </Menu>
        </Box>
        <Box>{children}</Box>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  window: PropTypes.func,
};

export default ResponsiveDrawer;
