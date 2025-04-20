import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  Typography, Button, FormControl, InputLabel, Select, MenuItem, TextField, Box
} from '@mui/material';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const UpdateStatusDialog = ({ open, onClose, onConfirm, user, newStatus, setNewStatus }) => {
  const [reason, setReason] = useState('');
  const [otherReason, setOtherReason] = useState('');

  const isSuspended = newStatus === '0';

  useEffect(() => {
    setReason('');
    setOtherReason('');
  }, [open, newStatus]);

  const handleSubmit = () => {
    const finalReason = reason === 'other' ? otherReason : reason;

    if (isSuspended && !finalReason.trim()) {
      alert("Vui lòng chọn hoặc nhập lý do tạm ngưng!");
      return;
    }

    onConfirm(finalReason);
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="xs">
  <DialogTitle>Cập nhật trạng thái</DialogTitle>
  <DialogContent>
    <Typography mb={1}>
      Chọn trạng thái mới cho <strong>{user?.name}</strong>:
    </Typography>
    <FormControl fullWidth size="small" sx={{ mb: 2 }}>
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

    {parseInt(newStatus) === 0 && (
      <Box>
        <FormControl fullWidth size="small" sx={{ mb: 2 }}>
          <InputLabel>Lý do</InputLabel>
          <Select
            value={reason}
            label="Lý do"
            onChange={(e) => setReason(e.target.value)}
          >
            <MenuItem value="">-- Chọn lý do --</MenuItem>
            <MenuItem value="Vi phạm chính sách">Vi phạm chính sách</MenuItem>
            <MenuItem value="Tài khoản nghi ngờ gian lận">Tài khoản nghi ngờ gian lận</MenuItem>
            <MenuItem value="other">Khác</MenuItem>
          </Select>
        </FormControl>

        {reason === "other" && (
          <TextField
            fullWidth
            size="small"
            placeholder="Nhập lý do khác"
            value={otherReason}
            onChange={(e) => setOtherReason(e.target.value)}
            sx={{ mt: 1 }}
          />
        )}
      </Box>
    )}
  </DialogContent>

  <DialogActions>
    <Button onClick={onClose}>Hủy</Button>
    <Button variant="contained" onClick={() => {
      const finalReason = reason === 'other' ? otherReason : reason;

      if (parseInt(newStatus) === 0 && !finalReason.trim()) {
        alert("Vui lòng chọn hoặc nhập lý do tạm ngưng!");
        return;
      }

      onConfirm(finalReason);
    }}>
      Cập nhật
    </Button>
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
