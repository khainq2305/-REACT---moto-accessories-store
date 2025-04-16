import {
  Box,
  Typography,
  Stack,
  Button,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Chip,
  Menu,
} from "@mui/material";
import {
  List as ListIcon,
  CalendarMonth,
  Check,
  LocalShipping,
  Home,
  Close,
  Search,
  MoreVert,
  Visibility,
  Update,
  Cancel,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { adminOrderService } from "../../services/orderService";

import PaginationComponent from "../../components/Pagination";
import UpdateStatusDialog from "../../components/Dialog/UpdateStatusOrderDialog";
import CancelOrderDialog from "../../components/Dialog/CancelOrderDialog";
import { toast } from "react-toastify";

const statusFilters = [
  { label: "Tất cả", icon: <ListIcon />, value: "", color: "primary" },
  { label: "Chờ xác nhận", icon: <CalendarMonth />, value: 0, color: "warning" },
  { label: "Đã xác nhận", icon: <Check />, value: 1, color: "info" },
  { label: "Đang giao", icon: <LocalShipping />, value: 2, color: "secondary" },
  { label: "Đã giao", icon: <Home />, value: 3, color: "success" },
  { label: "Đã hủy", icon: <Close />, value: 4, color: "error" },
];

const OrderList = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [sortOrder, setSortOrder] = useState("desc");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [openCancel, setOpenCancel] = useState(false);
  const [openStatus, setOpenStatus] = useState(false);
  const [cancelReason, setCancelReason] = useState("");
  const [otherReason, setOtherReason] = useState("");
  const [newStatus, setNewStatus] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);

  const handleMenuClick = (event, id) => {
    setAnchorEl(event.currentTarget);
    setSelectedOrderId(id);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const fetchOrders = async (page = 1) => {
    try {
      const res = await adminOrderService.getOrders({
        search,
        status,
        sort: sortOrder,
        fromDate,
        toDate,
        payment_status: paymentStatus,
        page,
      });
      setOrders(res.data.data || []);
      setTotalPages(res.data.totalPages || 1);
      setCurrentPage(page);
    } catch (err) {
      toast.error("Lỗi khi tải đơn hàng");
    }
  };

  useEffect(() => {
    fetchOrders(currentPage);
  }, [search, status, sortOrder, fromDate, toDate, paymentStatus]);

  const mapStatus = (s) =>
    ({
      0: "Chờ xác nhận",
      1: "Đã xác nhận",
      2: "Đang giao",
      3: "Đã giao",
      4: "Đã hủy",
    }[s] || "Không rõ");

  const mapPayment = (s) =>
    ({
      paid: "Đã thanh toán",
      pending: "Chưa thanh toán",
      failed: "Thất bại",
    }[s] || "Không rõ");

  const handleCancel = async () => {
    const reason = cancelReason === "Khác" ? otherReason.trim() : cancelReason;
    if (!reason) {
      toast.error("Vui lòng nhập lý do hủy đơn");
      return;
    }

    try {
      await adminOrderService.cancelOrder(selectedOrderId, reason);
      toast.success("Đã hủy đơn");
      fetchOrders();
      setOpenCancel(false);
    } catch (err) {
      toast.error(err?.response?.data?.message || "Hủy đơn thất bại");
    }
  };

  const handleUpdate = async () => {
    if (newStatus === "") {
      toast.error("Vui lòng chọn trạng thái mới");
      return;
    }

    try {
      await adminOrderService.updateOrderStatus(selectedOrderId, parseInt(newStatus));
      toast.success("Cập nhật trạng thái thành công");
      fetchOrders();
      setOpenStatus(false);
    } catch (err) {
      toast.error(err?.response?.data?.message || "Lỗi cập nhật trạng thái");
    }
  };

  return (
    <Box p={3}>
      <Typography variant="h5" mb={2}>
        Danh sách đơn hàng
      </Typography>

      <Stack direction="row" spacing={2} mb={2} flexWrap="wrap">
        {statusFilters.map((f) => (
          <Button
            key={f.label}
            variant={status === f.value ? "contained" : "outlined"}
            color={f.color}
            onClick={() => setStatus(f.value)}
            startIcon={f.icon}
          >
            {f.label}
          </Button>
        ))}
      </Stack>

      <Grid container spacing={2} mb={2}>
        <Grid item xs={12} md={4}>
          <TextField
            fullWidth
            placeholder="Tìm theo email hoặc mã đơn"
            size="small"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={6} md={2}>
          <FormControl fullWidth size="small">
            <InputLabel>Sắp xếp</InputLabel>
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
        <Grid item xs={6} md={2}>
          <TextField
            fullWidth
            size="small"
            label="Từ ngày"
            type="date"
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setFromDate(e.target.value)}
          />
        </Grid>
        <Grid item xs={6} md={2}>
          <TextField
            fullWidth
            size="small"
            label="Đến ngày"
            type="date"
            InputLabelProps={{ shrink: true }}
            onChange={(e) => setToDate(e.target.value)}
          />
        </Grid>
        <Grid item xs={6} md={2}>
          <FormControl fullWidth size="small">
            <InputLabel>Thanh toán</InputLabel>
            <Select
              value={paymentStatus}
              label="Thanh toán"
              onChange={(e) => setPaymentStatus(e.target.value)}
            >
              <MenuItem value="">Tất cả</MenuItem>
              <MenuItem value="paid">Đã thanh toán</MenuItem>
              <MenuItem value="pending">Chưa thanh toán</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center" sx={{ width: "60px" }}>#</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Ngày đặt</TableCell>
              <TableCell>Tổng tiền</TableCell>
              <TableCell>Trạng thái</TableCell>
              <TableCell>Thanh toán</TableCell>
              <TableCell>Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} align="center">Không có kết quả nào</TableCell>
              </TableRow>
            ) : (
              orders.map((item, index) => (
                <TableRow key={item.id || index}>
                  <TableCell align="center">{index + 1}</TableCell>
                  <TableCell>{item.customer?.email}</TableCell>
                  <TableCell>{new Date(item.createdAt).toLocaleDateString()}</TableCell>
                  <TableCell>{item.total_price?.toLocaleString?.() ?? '0'} ₫</TableCell>
                  <TableCell>
                    <Chip
                      label={mapStatus(item.status)}
                      color={statusFilters.find(f => f.value === item.status)?.color || 'default'}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>{mapPayment(item.payment_status)}</TableCell>
                  <TableCell>
                    <IconButton onClick={(e) => handleMenuClick(e, item.id)}>
                      <MoreVert />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>

      <Menu anchorEl={anchorEl} open={openMenu} onClose={handleMenuClose}>
        <MenuItem onClick={() => {
          navigate(`/admin/orders/${selectedOrderId}`);
          handleMenuClose();
        }}>
          <Visibility fontSize="small" sx={{ mr: 1 }} /> Xem chi tiết
        </MenuItem>
        <MenuItem onClick={() => {
          setOpenStatus(true);
          handleMenuClose();
        }}>
          <Update fontSize="small" sx={{ mr: 1 }} /> Cập nhật trạng thái
        </MenuItem>
        <MenuItem onClick={() => {
          const order = orders.find((o) => o.id === selectedOrderId);
          if (!order) return toast.error("Không tìm thấy đơn hàng");

          if ([2, 3, 4].includes(order.status)) return toast.error("Không thể hủy đơn hàng ở trạng thái hiện tại");
          if (order.payment_status === "paid") return toast.error("Đơn đã thanh toán, không thể hủy");

          setOpenCancel(true);
          handleMenuClose();
        }}>
          <Cancel fontSize="small" sx={{ mr: 1 }} /> Hủy đơn
        </MenuItem>
      </Menu>

      <PaginationComponent
        totalPages={totalPages}
        currentPage={currentPage}
        onChange={(page) => fetchOrders(page)}
      />

      <UpdateStatusDialog
        open={openStatus}
        onClose={() => setOpenStatus(false)}
        orderId={selectedOrderId}
        value={newStatus}
        onChange={(e) => setNewStatus(e.target.value)}
        onConfirm={handleUpdate}
      />

      <CancelOrderDialog
        open={openCancel}
        onClose={() => setOpenCancel(false)}
        cancelReason={cancelReason}
        setCancelReason={setCancelReason}
        otherReason={otherReason}
        setOtherReason={setOtherReason}
        onConfirm={handleCancel}
      />
    </Box>
  );
};

export default OrderList;
