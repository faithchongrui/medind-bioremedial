import {
  Drawer,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  createTheme,
  ThemeProvider,
  IconButton,
  Divider,
  Collapse,
  List,
} from "@mui/material";
import {
  Casino,
  DraftsOutlined,
  HomeOutlined,
  InboxOutlined,
  MailOutline,
  ReceiptOutlined,
  ExpandMore,
  ExpandLess,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const data = [
  {
    name: "Home",
    icon: <HomeOutlined />,
  },
  {
    name: "Activities",
    icon: <Casino />,
    submenu: [
      {
        name: "U1.1",
      },
      {
        name: "U1.2",
      },
      {
        name: "U1.3",
      },
    ],
  },
];

const theme = createTheme({
  typography: {
    fontFamily: "Inter",
  },
});

function NavBar1() {
  const [open, setOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const handleMenuClick = () => {
    setOpenSubMenu(!openSubMenu);
  };

  const handleItemClick = () => {};

  const getList = () => (
    <div style={{ width: 250 }}>
      {data.map((item, index) => (
        <ThemeProvider theme={theme}>
          <div>
            <ListItemButton
              key={index}
              onClick={item.submenu ? handleMenuClick : handleItemClick}
            >
              <ListItemIcon sx={{ color: "#CBE4DE" }}>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} sx={{ color: "#CBE4DE" }} />
              {item.submenu && // if item has submenu property, then render submenu
                (openSubMenu ? ( // if openSubMenu true then ExpandLess, else ExpandMore
                  <ExpandLess sx={{ color: "#CBE4DE" }} />
                ) : (
                  <ExpandMore sx={{ color: "#CBE4DE" }} />
                ))}
            </ListItemButton>
            <Divider sx={{ backgroundColor: "#2C3333", borderBottomWidth: 3}} />
          </div>
        </ThemeProvider>
      ))}
      <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
        {data.map((item) =>
          item.submenu?.map((subItem, index2) => (
            <ThemeProvider theme={theme}>
              <List component="div" disablePadding>
                <ListItemButton key={index2}>
                  <ListItemText primary={subItem.name} sx={{ color: "#CBE4DE" }} />
                </ListItemButton>
              </List>
            </ThemeProvider>
          ))
        )}
      </Collapse>
    </div>
  );

  return (
    <div>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ padding: 3 }} // Add padding of 8 pixels to all sides
        onClick={() => setOpen(true)}
      >
        <MenuIcon sx={{ color: "white", fontSize: 40 }} />
      </IconButton>
      <Drawer
        open={open}
        anchor={"left"}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "#2C3333",
          },
        }}
      >
        {getList()}
      </Drawer>
    </div>
  );
}

export default NavBar1;
