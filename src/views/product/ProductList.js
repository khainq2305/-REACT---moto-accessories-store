import {
  Box, Button, Chip, Grid, IconButton, InputAdornment,
  Menu, MenuItem, Paper, Select, Stack, Table, TableBody,
  TableCell, TableContainer, TableHead, TableRow, TextField,
  Typography
} from "@mui/material";
import {
  Delete, Restore, Edit, DeleteForever, MoreVert,
  Search as SearchIcon
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { format } from "date-fns";

import ConfirmDialog from "../../components/ConfirmDialog";
import PaginationComponent from "../../components/Pagination";
import { productService } from "../../services/productService";

const ProductList = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [sortOrder, setSortOrder] = useState("");
  const [categories, setCategories] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [currentTab, setCurrentTab] = useState("all");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const openMenu = Boolean(anchorEl);

  const fetchCategories = async () => {
    try {
      const res = await productService.getCategories({ status: 1 }); // 💥 thêm filter status = 1
      setCategories(res.data?.data || []);
    } catch (err) {
      console.error("❌ Lỗi fetchCategories:", err);
    }
  };
  

  const fetchProducts = async () => {
    try {
      const filters = {
        page: currentPage,
        search: searchText,
        sort: sortOrder,
        category: selectedCategory,
        deleted: currentTab === "deleted" ? "true" : "",
        status: statusFilter || undefined,
      };

      if (selectedDate) {
        filters[currentTab === "deleted" ? "deletedAt" : "createdAt"] =
          format(selectedDate, "yyyy-MM-dd");
      }

      const res = await productService.getProductList(filters);
      const data = res.data?.data || [];
      setProducts(data.map(p => ({ ...p, finalPrice: p.price - p.discount })));
      setTotalPages(res.data?.totalPages || 1);
    } catch (err) {
      console.error("❌ Lỗi fetchProducts:", err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [searchText, selectedCategory, sortOrder, selectedDate, currentTab, statusFilter, currentPage]);

  const handleMenuClick = (e, product) => {
    console.log("📌 Click mở menu cho:", product); // 👈 THÊM LOG
    setAnchorEl(e.currentTarget);
    setSelectedProduct(product);
  };
  

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedProduct(null);
  };

  const handleTabChange = (tab) => {
    setCurrentTab(tab);
    setStatusFilter(tab === "active" ? "1" : tab === "inactive" ? "0" : "");
    setCurrentPage(1);
  };

  const handleDelete = async () => {
    console.log("🚨 Gọi handleDelete cho:", selectedProduct);
  
    if (!selectedProduct) {
      console.warn("⚠️ Không có sản phẩm nào được chọn");
      return;
    }
  
    const result = await ConfirmDialog({
      title: "Xác nhận xóa",
      text: `Bạn có chắc chắn muốn xóa sản phẩm "${selectedProduct.name}"?`,
    });
  
    if (result) {
      try {
        console.log("🔧 Đang gửi API xóa sản phẩm ID:", selectedProduct.id);
        await productService.deleteProduct(selectedProduct.id);
        toast.success("✅ Đã chuyển sản phẩm vào thùng rác");
        fetchProducts();
      } catch (error) {
        console.error("❌ Xóa thất bại:", error.response?.data || error.message);
        toast.error("❌ Xóa thất bại");
      }
    } else {
      console.log("❎ Hủy xóa sản phẩm");
    }
  
    handleMenuClose();
  };
  
  
  

  const handleRestore = async () => {
    await productService.restoreProduct(selectedProduct.id);
    toast.success("Đã khôi phục sản phẩm");
    fetchProducts();
    handleMenuClose();
  };

  const handlePermanentDelete = async () => {
    const result = await ConfirmDialog({
      title: "Xóa vĩnh viễn",
      text: `Bạn có chắc muốn xóa vĩnh viễn "${selectedProduct.name}"?`,
    });
    if (result) {
      await productService.permanentDeleteProduct(selectedProduct.id);
      toast.success("Đã xóa vĩnh viễn");
      fetchProducts();
    }
    handleMenuClose();
  };

  return (
    <Box p={3}>
      <Typography variant="h5" mb={2}>Danh sách sản phẩm</Typography>

      <Stack direction="row" spacing={1} mb={2}>
        {["all", "active", "inactive", "deleted"].map(tab => (
          <Button
            key={tab}
            variant={currentTab === tab ? "contained" : "outlined"}
            color={tab === "deleted" ? "error" : "primary"}
            onClick={() => handleTabChange(tab)}
          >
            {{
              all: "Tất cả",
              active: "Còn hàng",
              inactive: "Hết hàng",
              deleted: "Thùng rác"
            }[tab]}
          </Button>
        ))}
      </Stack>

      <Grid container spacing={2} mb={2}>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth size="small" label="Tìm kiếm"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            InputProps={{ startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment> }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Select fullWidth size="small" value={selectedCategory} displayEmpty onChange={(e) => setSelectedCategory(e.target.value)}>
            <MenuItem value="">Tất cả danh mục</MenuItem>
            {categories.map((cat) => <MenuItem key={cat.id} value={cat.id}>{cat.name}</MenuItem>)}
          </Select>
        </Grid>
        <Grid item xs={6} md={2}>
          <Select fullWidth size="small" value={sortOrder} displayEmpty onChange={(e) => setSortOrder(e.target.value)}>
            <MenuItem value="">Sắp xếp</MenuItem>
            <MenuItem value="asc">Giá tăng dần</MenuItem>
            <MenuItem value="desc">Giá giảm dần</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={6} md={2}>
          <Select fullWidth size="small" value={statusFilter} displayEmpty onChange={(e) => setStatusFilter(e.target.value)}>
            <MenuItem value="">Tất cả trạng thái</MenuItem>
            <MenuItem value="1">Còn hàng</MenuItem>
            <MenuItem value="0">Hết hàng</MenuItem>
          </Select>
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Hình</TableCell>
              <TableCell>Tên</TableCell>
              <TableCell>Giá</TableCell>
              <TableCell>Giảm</TableCell>
              <TableCell>Danh mục</TableCell>
              <TableCell>SL</TableCell>
              <TableCell>Trạng thái</TableCell>
              <TableCell>Thao tác</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((p, index) => (
              <TableRow key={p.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                <img
  src={`http://localhost:3000/uploads/${p.image}`}
  alt={p.name}
  
  style={{ width: 60, height: 60, objectFit: "cover", borderRadius: 4 }}
/>

                </TableCell>
                <TableCell>{p.name}</TableCell>
                <TableCell>{p.price.toLocaleString()} ₫</TableCell>
                <TableCell>{p.discount > 0 ? p.finalPrice.toLocaleString() + " ₫" : "—"}</TableCell>
                <TableCell>{p.category?.name}</TableCell>
                <TableCell>{p.quantity}</TableCell>
                <TableCell>
                  <Chip label={p.status ? "Còn hàng" : "Hết hàng"} color={p.status ? "success" : "warning"} />
                </TableCell>
                <TableCell>
                  <IconButton onClick={(e) => handleMenuClick(e, p)}><MoreVert /></IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        {products.length === 0 && (
          <Typography textAlign="center" p={2}>Không có sản phẩm phù hợp</Typography>
        )}
      </TableContainer>

      <Box mt={3} display="flex" justifyContent="center">
  <PaginationComponent
    totalPages={totalPages}
    currentPage={currentPage}
    onChange={setCurrentPage}
  />
</Box>


<Menu anchorEl={anchorEl} open={openMenu} onClose={handleMenuClose}>
  {currentTab !== "deleted" ? (
    <div>
      <MenuItem
        onClick={() => {
          console.log("📝 Click chỉnh sửa sản phẩm:", selectedProduct);
          navigate(`/admin/products/edit/${selectedProduct?.id}`);
        }}
      >
        <Edit fontSize="small" sx={{ mr: 1 }} /> Chỉnh sửa
      </MenuItem>

      <MenuItem
        onClick={() => {
          console.log("🗑 Click XÓA sản phẩm:", selectedProduct);
          handleDelete();
        }}
      >
        <Delete fontSize="small" sx={{ mr: 1 }} /> Xóa
      </MenuItem>
    </div>
  ) : (
    <div>
      <MenuItem
        onClick={() => {
          console.log("♻️ Click KHÔI PHỤC sản phẩm:", selectedProduct);
          handleRestore();
        }}
      >
        <Restore fontSize="small" sx={{ mr: 1 }} /> Khôi phục
      </MenuItem>

      <MenuItem
        onClick={() => {
          console.log("🔥 Click XÓA VĨNH VIỄN sản phẩm:", selectedProduct);
          handlePermanentDelete();
        }}
      >
        <DeleteForever fontSize="small" sx={{ mr: 1 }} /> Xóa vĩnh viễn
      </MenuItem>
    </div>
  )}
</Menu>

    </Box>
  );
};

export default ProductList;
