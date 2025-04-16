import {
  Dialog, DialogTitle, DialogContent, DialogActions,
  RadioGroup, FormControlLabel, Radio, TextField, Button, Box, Typography
} from '@mui/material';

const CancelOrderDialog = ({
  open, onClose, cancelReason, setCancelReason,
  otherReason, setOtherReason, onConfirm
}) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontSize: '1.4rem', fontWeight: 600 }}>Hủy đơn hàng</DialogTitle>
      <DialogContent>
        <Typography variant="subtitle1" sx={{ mb: 1 }}>Chọn lý do hủy:</Typography>
        <RadioGroup
          value={cancelReason}
          onChange={(e) => setCancelReason(e.target.value)}
        >
          <FormControlLabel value="Không liên hệ được" control={<Radio />} label="Không liên hệ được" />
          <FormControlLabel value="Khách đổi ý" control={<Radio />} label="Khách đổi ý" />
          <FormControlLabel value="Hết hàng" control={<Radio />} label="Hết hàng" />
          <FormControlLabel value="Khác" control={<Radio />} label="Khác" />
        </RadioGroup>

        {cancelReason === 'Khác' && (
          <TextField
            fullWidth
            size="medium"
            label="Lý do khác"
            sx={{ mt: 2 }}
            value={otherReason}
            onChange={(e) => setOtherReason(e.target.value)}
          />
        )}
      </DialogContent>
      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={onClose}>Hủy</Button>
        <Button
          variant="contained"
          color="error"
          onClick={onConfirm}
          disabled={!cancelReason || (cancelReason === 'Khác' && !otherReason)}
        >
          Xác nhận hủy
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CancelOrderDialog;
