// src/components/dialogs/ResetPasswordDialog.jsx
import {
    Dialog, DialogTitle, DialogContent, DialogActions,
    Typography, Button
  } from '@mui/material';
  import PropTypes from 'prop-types';

  const ResetPasswordDialog = ({ open, onClose, onConfirm, user }) => {
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Cấp lại mật khẩu</DialogTitle>
        <DialogContent>
          <Typography>Bạn có chắc muốn cấp lại mật khẩu cho <strong>{user?.name}</strong>?</Typography>
          <Typography fontSize={13} mt={1} color="text.secondary">
            Mật khẩu mới sẽ được gửi qua email: {user?.email}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Hủy</Button>
          <Button variant="contained" color="primary" onClick={onConfirm}>Xác nhận</Button>
        </DialogActions>
      </Dialog>
    );
  };
  ResetPasswordDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
    user: PropTypes.object,
  };
  
  export default ResetPasswordDialog;
  