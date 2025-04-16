import {
  Box, Typography, Grid, TextField, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, Paper, IconButton
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { adminOrderService } from "../../services/orderService";

import toast from "react-hot-toast";

const OrderDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    if (id) {
      adminOrderService.getOrderById(id)
        .then((res) => {
          const data = res.data?.data;
          const formatted = {
            idOrder: data.idOrder,
            date: new Date(data.createdAt).toLocaleDateString(),
            customer: data.customer?.name,
            phone: data.customer?.phone,
            email: data.customer?.email,
            status: data.status,
            total: data.total_price,
            cancelReason: data.cancel_reason,
            products: data.orderDetails?.map((item) => ({
              image: item.product?.image || "/images/placeholder.jpg",
              name: item.product?.name,
              quantity: item.quantity,
              originalPrice: item.product?.price,
              salePrice: item.price,
            })),
          };
          setOrder(formatted);
        })
        .catch((err) => {
          toast.error("Không tìm thấy đơn hàng");
        });
    }
  }, [id]);

  const mapStatus = (code) => ({
    0: "Chờ xác nhận",
    1: "Đã xác nhận",
    2: "Đang giao",
    3: "Đã giao",
    4: "Đã hủy",
  }[code] || "Không rõ");

  if (!order) return null;

  return (
    <Box p={3}>
      <Box display="flex" alignItems="center" mb={3}>
        <IconButton onClick={() => navigate("/admin/orders")}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h5">Chi tiết đơn hàng #{id}</Typography>
      </Box>

      <Grid container spacing={2} mb={4}>
        <Grid item xs={12} md={6}>
          <TextField label="Mã đơn hàng" fullWidth value={order.idOrder} disabled margin="normal" />
          <TextField label="Ngày đặt hàng" fullWidth value={order.date} disabled margin="normal" />
          <TextField label="Khách hàng" fullWidth value={order.customer} disabled margin="normal" />
          <TextField label="Trạng thái" fullWidth value={mapStatus(order.status)} disabled margin="normal" />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField label="Số điện thoại" fullWidth value={order.phone} disabled margin="normal" />
          <TextField label="Email" fullWidth value={order.email} disabled margin="normal" />
          <TextField label="Tổng tiền" fullWidth value={order.total.toLocaleString()} disabled margin="normal" />
          {order.status === 4 && (
            <TextField
              label="Lý do hủy đơn"
              fullWidth
              value={order.cancelReason}
              disabled
              margin="normal"
              multiline
            />
          )}
        </Grid>
      </Grid>

      <Typography variant="h6" mb={2}>Danh sách sản phẩm</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Hình ảnh</TableCell>
              <TableCell>Tên sản phẩm</TableCell>
              <TableCell>Số lượng</TableCell>
              <TableCell>Giá gốc</TableCell>
              <TableCell>Giá giảm</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {order.products.map((product, idx) => (
              <TableRow key={idx}>
                <TableCell>
                  <img src={product.image} alt={product.name} width={60} />
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell><del>{product.originalPrice?.toLocaleString()} ₫</del></TableCell>
                <TableCell style={{ color: "red" }}>{product.salePrice?.toLocaleString()} ₫</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OrderDetail;
