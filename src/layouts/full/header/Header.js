import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box, AppBar, Toolbar, styled, Stack, IconButton, Badge, Button, Menu,
  MenuItem, Typography
} from '@mui/material';

// components
import Profile from './Profile';
import { IconMenu, IconBell } from '@tabler/icons-react';

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  background: theme.palette.background.paper,
  justifyContent: 'center',
  backdropFilter: 'blur(4px)',
  [theme.breakpoints.up('lg')]: {
    minHeight: '70px',
  },
}));

const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  width: '100%',
  color: theme.palette.text.secondary,
}));

const Header = ({ toggleMobileSidebar }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuPosition, setMenuPosition] = useState(null);

  const handleClick = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    setMenuPosition({
      top: rect.bottom + window.scrollY,
      left: rect.left + window.scrollX,
    });
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled>
        {/* Nút mở Sidebar */}
        <IconButton
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileSidebar}
          sx={{ display: { lg: "none", xs: "inline" } }}
        >
          <IconMenu width="20" height="20" />
        </IconButton>

        {/* Nút thông báo */}
        <IconButton
          aria-label="show notifications"
          color="inherit"
          aria-controls="notification-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <Badge variant="dot" color="primary">
            <IconBell size="21" stroke="1.5" />
          </Badge>
        </IconButton>

        {/* Menu thông báo */}
        <Menu
          id="notification-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorReference="anchorPosition"
          anchorPosition={menuPosition ? { top: menuPosition.top, left: menuPosition.left } : undefined}
          PaperProps={{
            sx: { mt: 1, boxShadow: 9, minWidth: '200px' },
          }}
        >
          <MenuItem onClick={handleClose}>
            <Typography variant="body1">Thông báo 1</Typography>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Typography variant="body1">Thông báo 2</Typography>
          </MenuItem>
        </Menu>

        <Box flexGrow={1} />

        {/* Nút "Check Pro Template" + Profile */}
        <Stack spacing={1} direction="row" alignItems="center">
          <Button variant="contained" color="primary" target="_blank" href="https://www.wrappixel.com/templates/flexy-react-admin-template/?ref=376">
            Check Pro Template
          </Button>
          <Profile />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

// 🛠️ Thêm PropTypes để tránh lỗi ESLint
Header.propTypes = {
  toggleMobileSidebar: PropTypes.func,
};

export default Header;
