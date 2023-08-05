import {
  Drawer,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
  Menu,
  IconButton,
} from "@mui/material";
import {
  CheckBoxOutlineBlankOutlined,
  DraftsOutlined,
  HomeOutlined,
  InboxOutlined,
  MailOutline,
  ReceiptOutlined,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import CssBaseline from "@mui/material/CssBaseline";
import { useState } from "react";

const data = [
  {
    name: "Home",
    icon: <HomeOutlined />,
  },
  { name: "Inbox", icon: <InboxOutlined /> },
  { name: "Outbox", icon: <CheckBoxOutlineBlankOutlined /> },
  { name: "Sent mail", icon: <MailOutline /> },
  { name: "Draft", icon: <DraftsOutlined /> },
  { name: "Trash", icon: <ReceiptOutlined /> },
];

function NavBar1() {
  const [open, setOpen] = useState(false);

  const getList = () => (
    <div style={{ width: 250 }}>
      {data.map((item, index) => (
        <ListItemButton key={index} >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.name} />
        </ListItemButton>
      ))}
    </div>
  );
  return (
    <div>
      <scopedCssBaseline enableColorScheme/>
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
        >
        {getList()}
      </Drawer>
    </div>
  );
}

export default NavBar1;
