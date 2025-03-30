import { useLocation, NavLink } from 'react-router';
import { Box, GlobalStyles } from "@mui/material";
import {
  Logo,
  Sidebar as MUI_Sidebar,
  Menu,
  MenuItem,
  Submenu,
} from "react-mui-sidebar";
import { IconPoint } from '@tabler/icons-react';
import Menuitems from "./MenuItems";
import logoicn from "../../../assets/images/logos/logo-dark.svg";


const renderMenuItems = (items, pathDirect, isChild = false) => {
  return items.map((item) => {
    const Icon = item.icon ? item.icon : IconPoint;
    const itemIcon = (
      <Icon
        stroke={1.5}
        size={isChild ? "1rem" : "1.3rem"} // 👈 Nhỏ hơn nếu là con
        style={{ marginLeft: isChild ? "4px" : 0 }} // 👈 Dịch vào chút
      />
    );

    if (item.subheader) {
      return (
        <Box sx={{ margin: "0 -24px", textTransform: 'uppercase' }} key={item.subheader}>
          <Menu subHeading={item.subheader} />
        </Box>
      );
    }

    if (item.children) {
      return (
        <Submenu
          key={item.id}
          title={item.title}
          icon={itemIcon}
        >
          {renderMenuItems(item.children, pathDirect, true)} {/* 👈 đánh dấu là mục con */}
        </Submenu>
      );
    }

    return (
      <MenuItem
        key={item.id}
        isSelected={pathDirect === item?.href}
        icon={itemIcon}
        component={NavLink}
        link={item.href || "#"}
        target={item.href?.startsWith("https") ? "_blank" : "_self"}
        badge={!!item.chip}
        badgeContent={item.chip || ""}
        badgeColor="secondary"
        badgeTextColor="#1a97f5"
        disabled={item.disabled}
        borderRadius="9px"
        sx={{
          pl: isChild ? 4 : 2, // 👈 Thụt lề nếu là con
        }}
      >
        {item.title}
      </MenuItem>
    );
  });
};


const SidebarItems = () => {
  const location = useLocation();
  const pathDirect = location.pathname;

  return (
    <>
      {/* ✅ THÊM NÀY Ở ĐÂY MỚI ĐÚNG CHỖ */}
      <GlobalStyles styles={{
        '.rms-submenu.rms-active': {
          backgroundColor: 'transparent !important',
          boxShadow: 'none !important',
          color: 'inherit !important',
        }
      }} />

      <Box sx={{ px: "24px", overflowX: 'hidden' }}>
        <MUI_Sidebar
          width={"100%"}
          showProfile={false}
          themeColor={"#1e4db7"}
          themeSecondaryColor={'#1a97f51a'}
        >
          <Box sx={{ margin: "0 -24px" }}>
            <Logo img={logoicn} component={NavLink} to="/" >Flexy</Logo>
          </Box>
          {renderMenuItems(Menuitems, pathDirect)}
        </MUI_Sidebar>
       
      </Box>
    </>
  );
};

export default SidebarItems;
