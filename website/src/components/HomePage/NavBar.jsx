import {
    Drawer,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
    ListItemButton,
  } from "@mui/material";
  import {
    CheckBoxOutlineBlankOutlined,
    DraftsOutlined,
    HomeOutlined,
    InboxOutlined,
    MailOutline,
    ReceiptOutlined,
  } from "@mui/icons-material";
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
  
  function NavBar() {
    const [open, setOpen] = useState(false);
  
    const getList = () => (
      <div style={{ width: 250 }} onClick={() => setOpen(false)}>
        {data.map((item, index) => (
          <ListItemButton key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItemButton>
        ))}
      </div>
    );
    return (
      <div>
        <Button onClick={() => setOpen(true)}>Click me</Button>
        <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
          {getList()}
        </Drawer>
      </div>
    );
  }
  
  export default NavBar;