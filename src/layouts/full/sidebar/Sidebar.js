import { useMediaQuery, Box, Drawer } from '@mui/material';
import PropTypes from 'prop-types'; // Import PropTypes
import SidebarItems from './SidebarItems';
import Scrollbar from "../../../components/custom-scroll/Scrollbar";
import Upgrade from './Upgrade';

const Sidebar = (props) => {
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up("lg"));
  const sidebarWidth = '270px';

  if (lgUp) {
    return (
      <Box sx={{ width: sidebarWidth, flexShrink: 0 }}>
        {/* Sidebar for Desktop */}
        <Drawer
          anchor="left"
          open={props.isSidebarOpen}
          variant="permanent"
          PaperProps={{
            sx: { width: sidebarWidth, boxSizing: 'border-box' },
          }}
        >
          {/* Sidebar Items */}
          <Scrollbar sx={{ height: "calc(100% - 73px)" }}>
            <Box>
              <SidebarItems />
            </Box>
          </Scrollbar>
        </Drawer>
      </Box>
    );
  }

  return (
    <Drawer
      anchor="left"
      open={props.isMobileSidebarOpen}
      onClose={props.onSidebarClose}
      variant="temporary"
      PaperProps={{ sx: { boxShadow: (theme) => theme.shadows[8] } }}
    >
      {/* Sidebar for Mobile */}
      <Scrollbar sx={{ height: "calc(100% - 73px)" }}>
        <SidebarItems />
      </Scrollbar>
      <Upgrade />
    </Drawer>
  );
};

// 🛠️ Thêm PropTypes để tránh lỗi ESLint
Sidebar.propTypes = {
  isSidebarOpen: PropTypes.bool,
  isMobileSidebarOpen: PropTypes.bool,
  onSidebarClose: PropTypes.func,
};

export default Sidebar;
