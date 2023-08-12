import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import MenuIcon from "@mui/icons-material/Menu";
import CasinoIcon from '@mui/icons-material/Casino';
import { style } from '@mui/system';

import RecentActivities from './RecentActivities';

const TabBar = () => {
  // const { collapseSidebar, toggleSidebar, collapsed, toggled, broken, rtl } =
  // useProSidebar();

  return (
    <div>
      <Sidebar id="tabbar" style={{ height: "100%", position: "absolute", backgroundColor:"rgb(44, 51, 51)"}}>
        <Menu>
          <MenuItem 
            className='menu'
            icon={<MenuIcon />}
            onClick={() => {
              // collapseSidebar();
            }}
            style={{ textAlign: "center" }}
          >
          </MenuItem>
          <MenuItem className="home" icon={<HomeRoundedIcon />}>Home</MenuItem>
          <SubMenu className="activities" icon={<CasinoIcon />} label='Activities'
          onClick={() => {
            
          }}
          >
            <MenuItem className="subactivities" style={{textAlign: "center"}}>U1.1</MenuItem>
            <MenuItem className="subactivities" style={{textAlign: "center"}}>U1.2</MenuItem>
            <MenuItem className="subactivities" style={{textAlign: "center"}}>U1.3</MenuItem>
          </SubMenu>
        </Menu>
      </Sidebar>
      </div>
  );
}

export default TabBar;