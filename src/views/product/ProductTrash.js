import { useState } from "react";
import {
  Box, Button, Checkbox, FormControl, Grid, IconButton, InputAdornment,
  MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, TextField, Typography, Avatar, Chip
} from "@mui/material";
import { Pagination } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import SearchIcon from "@mui/icons-material/Search";
import RestoreIcon from '@mui/icons-material/Restore';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const ProductTrash = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("");
  const [selected, setSelected] = useState([]);
  const [fromDate, setFromDate] = useState(null);

  const trashedProducts = [
    { id: 3, name: "Gương xe máy", category: "Phụ kiện", deletedAt: "2025-03-15", image: "/images/guong-xe-may.jpg" },
    { id: 4, name: "Vỏ xe máy", category: "Vỏ xe", deletedAt: "2025-03-20", image: "/images/vo-xe-may.jpg" },
  ];

  const handleSelect = (id) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const handleRestore = () => {
    alert(`Khôi phục sản phẩm: ${selected.join(", ")}`);
    setSelected([]);
  };

  const handleDeleteForever = () => {
    alert(`Xóa vĩnh viễn sản phẩm: ${selected.join(", ")}`);
    setSelected([]);
  };

  return (
    <Box sx={{ p: 3, maxWidth: "1200px", margin: "auto", background: "#fff", borderRadius: 2, boxShadow: 3 }}>
      <Box display="flex" alignItems="center" gap={1} mb={3}>
        <IconButton onClick={() => navigate("/products")}>
          <ArrowBackIcon />
        </IconButton>


<Typography variant="h5" fontWeight={600} display="flex" alignItems="center" gap={1}>
  <DeleteOutlineIcon />
  Thùng rác sản phẩm
</Typography>

      </Box>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
  <Grid container spacing={2} mb={2}>
  <Grid item xs={12} md={4.5}>
  <TextField
    fullWidth
    placeholder="Tìm kiếm sản phẩm..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      ),
    }}
  />
</Grid>

<Grid item xs={12} md={2.5}>
  <FormControl fullWidth>
    <Select value={filter} displayEmpty onChange={(e) => setFilter(e.target.value)}>
      <MenuItem value="">Tất cả danh mục</MenuItem>
      <MenuItem value="Phụ kiện">Phụ kiện</MenuItem>
      <MenuItem value="Vỏ xe">Vỏ xe</MenuItem>
    </Select>
  </FormControl>
</Grid>

<Grid item xs={12} md={2.5}>
  <FormControl fullWidth>
    <Select value={sort} displayEmpty onChange={(e) => setSort(e.target.value)}>
      <MenuItem value="">Sắp xếp ngày xóa</MenuItem>
      <MenuItem value="asc">Cũ nhất</MenuItem>
      <MenuItem value="desc">Mới nhất</MenuItem>
    </Select>
  </FormControl>
</Grid>

<Grid item xs={12} md={2.5}>
  <DatePicker
    label="Từ ngày"
    value={fromDate}
    onChange={(newValue) => setFromDate(newValue)}
    renderInput={(params) => <TextField {...params} fullWidth />}
  />
</Grid>

  </Grid>
</LocalizationProvider>


      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selected.length === trashedProducts.length}
                  onChange={(e) => setSelected(e.target.checked ? trashedProducts.map(p => p.id) : [])}
                />
              </TableCell>
              <TableCell>Hình ảnh</TableCell>
              <TableCell>Tên sản phẩm</TableCell>
              <TableCell>Danh mục</TableCell>
              <TableCell>Ngày xóa</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {trashedProducts.map(product => (
              <TableRow key={product.id} sx={{ height: 70 }}>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selected.includes(product.id)}
                    onChange={() => handleSelect(product.id)}
                  />
                </TableCell>
                <TableCell>
                  <Avatar src={product.image} alt={product.name} />
                </TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell><Chip label={product.category} /></TableCell>
                <TableCell>{product.deletedAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box mt={3} display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Button variant="contained" color="success" startIcon={<RestoreIcon />} disabled={!selected.length} onClick={handleRestore} sx={{ mr: 2 }}>
            Khôi phục
          </Button>
          <Button variant="outlined" color="error" startIcon={<DeleteForeverIcon />} disabled={!selected.length} onClick={handleDeleteForever}>
            Xóa vĩnh viễn
          </Button>
        </Box>
        <Pagination count={3} color="primary" />
      </Box>
    </Box>
  );
};

export default ProductTrash;