import { useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Chip, IconButton, Menu, MenuItem, TextField, Select, MenuItem as MuiMenuItem, Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ConfirmDialog from "../../components/ConfirmDialog"; // Import hộp thoại xác nhận
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded'; // thay cho Edit
import DeleteForeverRoundedIcon from '@mui/icons-material/DeleteForeverRounded'; // thay cho Delete

const ProductList = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [products, setProducts] = useState([
    { id: 1, name: "Đĩa KingSpeed 260mm", price: 2500000, discountPrice: 2200000, category: "Đĩa xe máy", quantity: 15, status: "Còn hàng", image: "https://shop2banh.vn/images/thumbs/2022/04/che-ket-nuoc-cnc-anode-cho-honda-shvn-2020-products-1727.jpg" },
    { id: 2, name: "Phuộc xe máy", price: 500000, discountPrice: 450000, category: "Phuộc xe máy", quantity: 30, status: "Hết hàng", image: "https://shop2banh.vn/images/thumbs/2024/10/tay-thang-gh-racing-cnc-cho-honda-sh-products-2337.jpg" },
  ]);
const [fromDate, setFromDate] = useState(null);


  const handleClick = (event, product) => {
    setAnchorEl(event.currentTarget);
    setSelectedProduct(product);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedProduct(null);
  };

  const handleDelete = () => {
    ConfirmDialog({
      title: "Xác nhận xóa",
      text: `Bạn có chắc chắn muốn xóa sản phẩm "${selectedProduct?.name}" không?`,
      onConfirm: () => {
        setProducts(products.filter((product) => product.id !== selectedProduct.id));
      }
    });
    handleClose();
  };

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
  <div style={{ 
    display: "grid", 
    gridTemplateColumns: "3fr 2fr 2fr 2fr 2fr",

    gap: "10px", 
    marginBottom: "10px" 
  }}>
    <TextField
      label="Tìm kiếm sản phẩm"
      variant="outlined"
      placeholder="Nhập tên sản phẩm..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      fullWidth
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="action" />
          </InputAdornment>
        ),
      }}
    />

    <Select
      value={categoryFilter}
      onChange={(e) => setCategoryFilter(e.target.value)}
      displayEmpty
      variant="outlined"
      fullWidth
    >
      <MuiMenuItem value="">Tất cả danh mục</MuiMenuItem>
      <MuiMenuItem value="Đĩa xe máy">Đĩa xe máy</MuiMenuItem>
      <MuiMenuItem value="Phuộc xe máy">Phuộc xe máy</MuiMenuItem>
    </Select>

    <Select
      value={""}
      onChange={() => {}}
      displayEmpty
      variant="outlined"
      fullWidth
    >
      <MuiMenuItem value="">Sắp xếp theo giá</MuiMenuItem>
      <MuiMenuItem value="asc">Giá tăng dần</MuiMenuItem>
      <MuiMenuItem value="desc">Giá giảm dần</MuiMenuItem>
    </Select>
    <Select
  value={""} // Cần thêm state nếu cần xử lý thật
  onChange={() => {}} // Placeholder
  displayEmpty
  variant="outlined"
  fullWidth
>
  <MuiMenuItem value="">Tất cả trạng thái</MuiMenuItem>
  <MuiMenuItem value="Còn hàng">Còn hàng</MuiMenuItem>
  <MuiMenuItem value="Hết hàng">Hết hàng</MuiMenuItem>
</Select>

    <DatePicker
      label="Ngày tạo"
      value={fromDate}
      onChange={(newValue) => setFromDate(newValue)}
      renderInput={(params) => <TextField {...params} fullWidth />}
    />
  </div>
</LocalizationProvider>


<Button
  variant="contained"
  color="error"
  startIcon={<DeleteOutlineIcon />}
  onClick={() => navigate("/admin/products/trash")}

>
  Thùng rác
</Button>

      <TableContainer component={Paper} sx={{ marginTop: 2 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Hình ảnh</TableCell>
              <TableCell>Tên sản phẩm</TableCell>
              <TableCell>Giá</TableCell>
              <TableCell>Giá giảm</TableCell>
              <TableCell>Danh mục</TableCell>
              <TableCell>Số lượng</TableCell>
              <TableCell>Trạng thái</TableCell>
              <TableCell>Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product, index) => (
              <TableRow key={product.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
  <img
    src={product.image}
    alt={product.name}
    style={{
      width: 60,
      height: 60,
      objectFit: 'cover',
      borderRadius: 8, // 👈 nếu muốn bo góc nhẹ
      border: '1px solid #eee'
    }}
  />
</TableCell>

                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price.toLocaleString()} VND</TableCell>
                <TableCell>{product.discountPrice.toLocaleString()} VND</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.quantity} cái</TableCell>
                <TableCell>
                  <Chip label={product.status} color={product.status === "Còn hàng" ? "success" : "warning"} />
                </TableCell>
                <TableCell>
                  <IconButton onClick={(event) => handleClick(event, product)}>
                    <MoreVertIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Pagination count={5} color="primary" />
      </div>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
  <MenuItem
    onClick={() => navigate(`/admin/products/edit/${selectedProduct?.id}`)}
    sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 1.5,
      fontWeight: 500,
      color: '#1e88e5',
      px: 2,
      py: 1.5,
    }}
  >
    <BorderColorRoundedIcon sx={{ fontSize: 20 }} />
    Sửa
  </MenuItem>

  <MenuItem
    onClick={handleDelete}
    sx={{
      display: 'flex',
      alignItems: 'center',
      gap: 1.5,
      fontWeight: 500,
      color: 'red',
      px: 2,
      py: 1.5,
    }}
  >
    <DeleteForeverRoundedIcon sx={{ fontSize: 20 }} />
    Xóa
  </MenuItem>
</Menu>

    </div>
  );
};

export default ProductList;
