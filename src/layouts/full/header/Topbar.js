
import { AppBar, Toolbar, styled } from '@mui/material';

const AppBarStyled = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  background: theme.palette.grey[900], // Background đen
  zIndex: "50",
  justifyContent: 'center',
  backdropFilter: 'blur(4px)',
  [theme.breakpoints.up('lg')]: {
    minHeight: '61px',
  },
}));

const ToolbarStyled = styled(Toolbar)(({ theme }) => ({
  width: '100%',
  color: theme.palette.text.secondary,
}));

const Topbar = () => {
  return (
    <AppBarStyled position="sticky" color="default">
      <ToolbarStyled></ToolbarStyled> {/* Thanh đen trống */}
    </AppBarStyled>
  );
};

export default Topbar;
