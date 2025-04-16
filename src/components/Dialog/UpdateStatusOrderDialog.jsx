import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  FormControl, InputLabel, Select, MenuItem, Button
} from '@mui/material';

const UpdateStatusDialog = ({ open, onClose, value, onChange, onConfirm }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ fontSize: '20px', fontWeight: 600 }}>
        Cập nhật trạng thái
      </DialogTitle>
      <DialogContent sx={{ minWidth: 360, pt: 1 }}>
        <FormControl fullWidth size="medium" sx={{ mt: 2 }}>
          <InputLabel shrink>Trạng thái mới</InputLabel>
          <Select
            value={value}
            label="Trạng thái mới"
            onChange={onChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Trạng thái mới' }}
          >
            <MenuItem disabled value="">
              <em>Chọn trạng thái</em>
            </MenuItem>
            <MenuItem value={0}>Chờ xác nhận</MenuItem>
            <MenuItem value={1}>Đã xác nhận</MenuItem>
            <MenuItem value={2}>Đang giao</MenuItem>
            <MenuItem value={3}>Đã giao</MenuItem>
          </Select>
        </FormControl>
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={onClose}>Hủy</Button>
        <Button variant="contained" onClick={onConfirm}>
          Xác nhận
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateStatusDialog;
