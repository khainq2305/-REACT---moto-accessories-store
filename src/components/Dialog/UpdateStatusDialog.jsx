import {
    Dialog, DialogTitle, DialogContent, DialogActions,
    Typography, Button, FormControl, InputLabel, Select, MenuItem
  } from '@mui/material';
  import PropTypes from 'prop-types';

  const UpdateStatusDialog = ({ open, onClose, onConfirm, user, newStatus, setNewStatus }) => {
    return (
      <Dialog open={open} onClose={onClose}>
        <DialogTitle>Cập nhật trạng thái</DialogTitle>
        <DialogContent>
          <Typography>Chọn trạng thái mới cho <strong>{user?.name}</strong>:</Typography>
          <FormControl fullWidth size="small" sx={{ mt: 2 }}>
            <InputLabel>Trạng thái</InputLabel>
            <Select
              value={newStatus}
              label="Trạng thái"
              onChange={(e) => setNewStatus(e.target.value)}
            >
              <MenuItem value="1">Hoạt động</MenuItem>
              <MenuItem value="0">Tạm ngưng</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Hủy</Button>
          <Button variant="contained" onClick={onConfirm}>Cập nhật</Button>
        </DialogActions>
      </Dialog>
    );
  };
  UpdateStatusDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
    user: PropTypes.object,
    newStatus: PropTypes.string.isRequired,
    setNewStatus: PropTypes.func.isRequired,
  };
  
  export default UpdateStatusDialog;
  