import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  Box,
  Chip,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Pagination,
  TextField,
  Stack,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Menu,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  RadioGroup,
  Radio,
  FormControlLabel,

  Grid,
  InputAdornment
} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CheckIcon from '@mui/icons-material/Check';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';
import ListIcon from '@mui/icons-material/List';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityIcon from '@mui/icons-material/Visibility';
import UpdateIcon from '@mui/icons-material/Update';
import CancelIcon from '@mui/icons-material/Cancel';
const orders = [
  { id: 315, email: "khainqpc08388@gmail.com", date: "2025-03-03", total: 2471000, status: "Chờ xác nhận", payment: "Chưa thanh toán" },
  { id: 314, email: "user2@gmail.com", date: "2025-03-02", total: 444000, status: "Đã xác nhận", payment: "Chưa thanh toán" },
];

const statusFilters = [
  { label: "Tất cả", icon: <ListIcon />, value: "" },
  { label: "Chờ Xác Nhận", icon: <CalendarMonthIcon />, value: "Chờ xác nhận" },
  { label: "Đã Xác Nhận", icon: <CheckIcon />, value: "Đã xác nhận" },
  { label: "Đang Giao", icon: <LocalShippingIcon />, value: "Đang giao" },
  { label: "Đã Giao", icon: <HomeIcon />, value: "Đã giao" },
  { label: "Đã Hủy", icon: <CloseIcon />, value: "Đã hủy" },
];

const OrderList = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [openStatusDialog, setOpenStatusDialog] = useState(false);
  const [openCancelDialog, setOpenCancelDialog] = useState(false);
  const [cancelReason, setCancelReason] = useState("");
  const [otherReason, setOtherReason] = useState("");
  const [newStatus, setNewStatus] = useState("");

  const handleMenuOpen = (event, orderId) => {
    setAnchorEl(event.currentTarget);
    setSelectedOrderId(orderId);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedOrderId(null);
  };

  const filteredOrders = orders
    .filter(order => {
      const matchSearch =
        order.email.toLowerCase().includes(search.toLowerCase()) ||
        order.id.toString().includes(search);
      const matchStatus = filterStatus ? order.status === filterStatus : true;
      return matchSearch && matchStatus;
    })
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
    });

  const handleUpdateStatus = () => {
    alert(`Đơn ${selectedOrderId} đã cập nhật trạng thái thành: ${newStatus}`);
    setOpenStatusDialog(false);
    handleMenuClose();
    setNewStatus("");
  };

  const handleCancelOrder = () => {
    const reason = cancelReason === "Khác" ? otherReason : cancelReason;
    alert(`Đã hủy đơn ${selectedOrderId} với lý do: ${reason}`);
    setOpenCancelDialog(false);
    handleMenuClose();
    setCancelReason("");
    setOtherReason("");
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5" mb={2}>Danh sách đơn hàng</Typography>

      <Stack direction="row" spacing={2} alignItems="center" flexWrap="wrap" mb={2}>
        {statusFilters.map((filter) => (
          <Button
            key={filter.label}
            startIcon={filter.icon}
            variant={filterStatus === filter.value ? "contained" : "outlined"}
            color={filterStatus === filter.value ? "primary" : "inherit"}
            onClick={() => setFilterStatus(filter.value)}
          >
            {filter.label}
          </Button>
        ))}

      
      </Stack>
      <Grid container spacing={2} mb={2} alignItems="center">
        <Grid item xs={12} md={6}>
          <TextField
            fullWidth
            placeholder="Tìm theo email hoặc mã đơn hàng"
            variant="outlined"
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <FormControl fullWidth size="small">
            <InputLabel>Sắp xếp theo ngày</InputLabel>
            <Select
              value={sortOrder}
              label="Sắp xếp"
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <MenuItem value="desc">Mới nhất</MenuItem>
              <MenuItem value="asc">Cũ nhất</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={2}>
          <TextField
            fullWidth
            size="small"
            type="date"
            label="Từ ngày"
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
        <Grid item xs={6} sm={2}>
          <FormControl fullWidth size="small">
            <InputLabel>Thanh toán</InputLabel>
            <Select
              value=""
              label="Thanh toán"
              // onChange={} // optional handler
            >
              <MenuItem value="">Tất cả</MenuItem>
              <MenuItem value="Chưa thanh toán">Chưa thanh toán</MenuItem>
              <MenuItem value="Đã thanh toán">Đã thanh toán</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Mã đơn</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Ngày đặt</TableCell>
              <TableCell>Tổng tiền</TableCell>
              <TableCell>Trạng thái</TableCell>
              <TableCell>Thanh toán</TableCell>
              <TableCell>Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredOrders.map(order => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.email}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>{order.total.toLocaleString()} VNĐ</TableCell>
                <TableCell>
                  <Chip label={order.status} color="warning" />
                </TableCell>
                <TableCell>{order.payment}</TableCell>
                <TableCell>
                  <IconButton onClick={(e) => handleMenuOpen(e, order.id)}>
                    <MoreVertIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box display="flex" justifyContent="center" mt={3}>
        <Pagination count={5} color="primary" />
      </Box>

      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
  <MenuItem
    onClick={() => {
      navigate(`/admin/orders/${selectedOrderId}`);
      handleMenuClose();
    }}
  >
    <VisibilityIcon fontSize="small" style={{ marginRight: 8 }} />
    Xem chi tiết
  </MenuItem>

  <MenuItem
    onClick={() => {
      setOpenStatusDialog(true);
      handleMenuClose();
    }}
  >
    <UpdateIcon fontSize="small" style={{ marginRight: 8 }} />
    Cập nhật trạng thái
  </MenuItem>

  <MenuItem
    onClick={() => {
      setOpenCancelDialog(true);
      handleMenuClose();
    }}
  >
    <CancelIcon fontSize="small" style={{ marginRight: 8 }} />
    Hủy đơn
  </MenuItem>
</Menu>
<Dialog open={openStatusDialog} onClose={() => setOpenStatusDialog(false)}>
  <DialogTitle sx={{ fontSize: '20px', fontWeight: 'bold' }}>Cập nhật trạng thái</DialogTitle>
  <DialogContent sx={{ minWidth: 400 }}>
    <FormControl fullWidth sx={{ mt: 1 }}>
      <InputLabel>Trạng thái mới</InputLabel>
      <Select
        value={newStatus}
        label="Trạng thái mới"
        onChange={(e) => setNewStatus(e.target.value)}
      >
        <MenuItem value="Chờ xác nhận">Chờ xác nhận</MenuItem>
        <MenuItem value="Đã xác nhận">Đã xác nhận</MenuItem>
        <MenuItem value="Đang giao">Đang giao</MenuItem>
        <MenuItem value="Đã giao">Đã giao</MenuItem>
        <MenuItem value="Đã hủy">Đã hủy</MenuItem>
      </Select>
    </FormControl>
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setOpenStatusDialog(false)}>Hủy</Button>
    <Button variant="contained" onClick={handleUpdateStatus} disabled={!newStatus}>
      Xác nhận
    </Button>
  </DialogActions>
</Dialog>

<Dialog open={openCancelDialog} onClose={() => setOpenCancelDialog(false)}>
  <DialogTitle sx={{ fontSize: '20px', fontWeight: 'bold' }}>Hủy đơn hàng</DialogTitle>
  <DialogContent sx={{ minWidth: 400 }}>
    <Typography mb={1}>Chọn lý do hủy đơn:</Typography>
    <RadioGroup value={cancelReason} onChange={(e) => setCancelReason(e.target.value)}>
      <FormControlLabel value="Không liên hệ được" control={<Radio />} label="Không liên hệ được" />
      <FormControlLabel value="Khách đổi ý" control={<Radio />} label="Khách đổi ý" />
      <FormControlLabel value="Hết hàng" control={<Radio />} label="Hết hàng" />
      <FormControlLabel value="Khác" control={<Radio />} label="Khác" />
    </RadioGroup>
    {cancelReason === "Khác" && (
      <TextField
        fullWidth
        placeholder="Nhập lý do khác"
        size="small"
        sx={{ mt: 2 }}
        value={otherReason}
        onChange={(e) => setOtherReason(e.target.value)}
      />
    )}
  </DialogContent>
  <DialogActions>
    <Button onClick={() => setOpenCancelDialog(false)}>Hủy</Button>
    <Button
      variant="contained"
      color="error"
      onClick={handleCancelOrder}
      disabled={!cancelReason || (cancelReason === "Khác" && !otherReason)}
    >
      Xác nhận hủy
    </Button>
  </DialogActions>
</Dialog>

    </Box>
  );
};

export default OrderList;
