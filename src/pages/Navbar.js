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
import FoundationIcon from "@mui/icons-material/Foundation";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import PeopleIcon from "@mui/icons-material/People";
import img1 from "../Images/avatar.jpg";
import "./Navbar.css";
import { Avatar } from "@mui/material";

const drawerWidth = 240;

function ResponsiveDrawer({ children }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <List>
        {["Air Apple Cart"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <FoundationIcon sx={{ fontSize: "40px", color: "green" }} />
                ) : (
                  <LoyaltyIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <List>
        {["DashBoard", "Loyality", "Gift Cards", "Prepaid"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
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
                <ListItemText primary={text} />
              </ListItemButton>
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
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <SettingsIcon /> : <LogoutIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  // Remove this const when copying and pasting into your project.
  // const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          // width: "1680px",
          background: "white",
          color: "black",
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          justifyContent: "space-between",
        }}
      >
        <Toolbar
          sx={{
            color: "grey",
          }}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
          <div className="search">
            <SearchIcon />
          </div>
          <Box
            className="icons"
            sx={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              padding: "8px",
              marginRight: "10px",
            }}
          >
            <Box
              sx={{
                marginLeft: "auto",
                display: "flex",
                alignItems: "center",
                border: "1px solid #888",
                padding: "8px",
                borderRadius: "8px",
                marginRight: "20px",
              }}
            >
              <LocalPhoneIcon />
              <Divider
                orientation="vertical"
                flexItem
                sx={{ marginX: 1, backgroundColor: "#888" }}
              />
              <ChatIcon />
              <Divider
                orientation="vertical"
                flexItem
                sx={{ marginX: 1, backgroundColor: "#888" }}
              />
              <PeopleIcon />
              <Divider
                orientation="vertical"
                flexItem
                sx={{ marginX: 1, backgroundColor: "#888" }}
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
            <Box
              sx={{
                border: "1px solid #888",
                borderRadius: "8px",
                marginRight: "20px",
                width: "45px",
                height: "36px",
                display: "flex",
                padding: "8px",
                alignItems: "center",
              }}
            >
              <AddLinkIcon />
            </Box>
            <Box
              sx={{
                color: "#FFA000",
                marginRight: "20px",
              }}
            >
              <NotificationsIcon />
            </Box>
            <Typography
              sx={{
                color: "green",
                fontWeight: "500",
              }}
            >
              Orcalo Limited
            </Typography>
          </Box>
          <Box>
            <Avatar alt="img1" src={img1} />
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          // container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
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
          className="dashboardh"
          sx={{ color: "#888", display: "flex", alignItems: "center" }}
        >
          <h2>DashBoard</h2>
          <Button
            sx={{
              marginLeft: "auto",
              color: "#888",
              backgroundColor: "lightgrey",
            }}
          >
            This Month
          </Button>
        </Box>
        <Box>{children}</Box>
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
