import {
  Drawer,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Collapse,
  List,
} from "@mui/material";
import {
  Casino,
  ExpandMore,
  ExpandLess,
  ViewInAr
} from "@mui/icons-material";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const data = [
  {
    name: "Home",
    icon: <HomeRoundedIcon />,
    link: "/home"
  },
  {
    name: "Simulations",
    icon: <ViewInAr/>,
    link: "/simulations"
  },
  {
    name: "Activities",
    icon: <Casino />,
    link: "/activities"
  },
];

function NavBar1() {

const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);

  const handleMenuClick = () => {
    setOpenSubMenu(!openSubMenu);
  };

  const handleItemClick = (item) => {
    navigate(item.link)
  };

  const getList = () => (
    <div style={{ width: 250 }}>
      {data.map((item, index) => (
          <div>
            <ListItemButton
              key={index}
              onClick={item.submenu ? () => handleMenuClick(item) : () => handleItemClick(item)}
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
      ))}
      <Collapse in={openSubMenu} timeout="auto" unmountOnExit>
        {data.map((item) =>
          item.submenu?.map((subItem, index2) => (
              <List component="div" disablePadding>
                <ListItemButton key={index2}>
                  <ListItemText primary={subItem.name} sx={{ color: "#CBE4DE" }} />
                </ListItemButton>
              </List>
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
        <MenuRoundedIcon sx={{ color: "white", fontSize: 40, marginLeft: '20px'}} />
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
