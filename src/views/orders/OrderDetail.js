import { useNavigate, useParams } from "react-router-dom";
import { Box, TextField, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const orderDetails = {
  id: 315,
  date: "2025-03-03",
  customer: "Khải Nguyễn Quốc",
  phone: "0901234567",
  email: "khainqpc08388@gmail.com",
  status: "Đã hủy",
  total: 2471000,
  reasonCancel: "Khách không nhận hàng",
  products: [
    {
      image: "/images/phuoc-rcb.jpg",
      name: "Phuộc RCB Flow Pro",
      quantity: 2,
      originalPrice: 1200000,
      salePrice: 990000,
    },
    {
      image: "/images/disc-brake.jpg",
      name: "Đĩa KingSpeed 260mm",
      quantity: 1,
      originalPrice: 550000,
      salePrice: 491000,
    }
  ]
};

const OrderDetail = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <Box sx={{ p: 3 }}>
      <Box display="flex" alignItems="center" mb={2}>
        <IconButton onClick={() => navigate("/orders")}>
          <ArrowBackIcon />
        </IconButton>
        <Typography variant="h5">Chi tiết đơn hàng #{id}</Typography>
      </Box>
      
      <Box mb={3}>
        <TextField fullWidth label="Mã đơn hàng" value={orderDetails.id} disabled margin="normal"/>
        <TextField fullWidth label="Ngày đặt hàng" value={orderDetails.date} disabled margin="normal"/>
        <TextField fullWidth label="Khách hàng" value={orderDetails.customer} disabled margin="normal"/>
        <TextField fullWidth label="Trạng thái" value={orderDetails.status} disabled margin="normal"/>
        <TextField fullWidth label="Số điện thoại" value={orderDetails.phone} disabled margin="normal"/>
        <TextField fullWidth label="Email" value={orderDetails.email} disabled margin="normal"/>
        <TextField fullWidth label="Tổng tiền" value={orderDetails.total.toLocaleString()} disabled margin="normal"/>
        {orderDetails.status === "Đã hủy" && (
          <TextField fullWidth label="Lý do hủy đơn" value={orderDetails.reasonCancel} disabled margin="normal"/>
        )}
      </Box>

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
            {orderDetails.products.map((product, index) => (
              <TableRow key={index}>
                <TableCell>
                  <img src={product.image} alt={product.name} width={60} />
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell><del>{product.originalPrice.toLocaleString()}</del></TableCell>
                <TableCell style={{color: "red"}}>{product.salePrice.toLocaleString()} VNĐ</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default OrderDetail;
