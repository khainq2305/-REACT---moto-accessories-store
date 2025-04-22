import { useState, useEffect } from "react";
import ConfirmDialog from "../../components/ConfirmDialog";
import useToast from "../../components/Toast";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { Box, Card, CardContent, Typography, TextField, InputAdornment, Select, MenuItem, Table, TableBody, TableCell, TableHead, TableRow, Checkbox, IconButton, Menu, Button, useTheme } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
const API_IMAGE = import.meta.env.VITE_API_URL + "/uploads";
const DEFAULT_IMAGE = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5-I3nwE8w_QXqUKIaA9R5Rjr-l7UOVLdPWQ&s";

import { toast } from "react-toastify";
// Import the service to fetch categories
import PaginationComponent from "../../components/Pagination";
import { categoriesService } from "../../services/categoryServices";
import { useNavigate } from 'react-router-dom';

const CategoryPage = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [fromDate, setFromDate] = useState(null);
  const [data, setData] = useState([]);
  const [trash, setTrash] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuRow, setMenuRow] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchCategories = async () => {
    try {
      const filters = {
        page: currentPage,
        search: searchText,
        status: filterStatus !== "all" ? filterStatus : undefined,
        fromDate: fromDate ? fromDate.toISOString().split('T')[0] : undefined
      };
      const response = await categoriesService.getAllCategories(filters);
      setData(response.data?.data || []);
      setTotalPages(response.data?.totalPages || 1);
      setTrash(response.data?.trash || []);
      console.log("Fetched categories:", response.data?.data || []);
    } catch (error) {
      console.error("Failed to fetch categories", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [currentPage, searchText, filterStatus, fromDate]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value.toLowerCase());
    setCurrentPage(1); // Reset to first page on new search
  };

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const handleOpenMenu = (event, row) => {
    setAnchorEl(event.currentTarget);
    setMenuRow(row);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setMenuRow(null);
  };

  const handleEdit = () => {
    if (menuRow) navigate(`/admin/category/edit/${menuRow.id}`);
    handleCloseMenu();
  };

  const handleDelete = async () => {
    const isConfirmed = await ConfirmDialog({
      title: "Xác nhận xóa",
      text: `Bạn có chắc chắn muốn xóa "${menuRow?.name}"?`,
    });
  
    if (isConfirmed) {
      try {
        await categoriesService.deleteCategories(menuRow.id);
        setData((prev) => prev.filter((item) => item.id !== menuRow.id));
        setTrash((prev) => [...prev, { ...menuRow, selected: false }]);
        toast.success("Xóa thành công!");
      } catch (error) {
        toast.error(error.response?.data?.message || error.message);
      }
    }
  
    handleCloseMenu();
  };
  
  
  
  

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    setData((prev) => prev.map((item) => ({ ...item, selected: checked })));
  };

  const handleSelectOne = (id) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const filteredData = data.filter((item) => {
    const name = item.name ? item.name.toLowerCase() : "";
    const matchText = name.includes(searchText.toLowerCase());
    const matchStatus = filterStatus === "all" || item.status.toString() === filterStatus;
    const matchDate = !fromDate || new Date(item.createdAt) >= new Date(fromDate);
    return matchText && matchStatus && matchDate;
  });

  return (
    <Card elevation={4} sx={{ borderRadius: 4, p: 2 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h5" fontWeight="bold">
            Danh sách các danh mục
          </Typography>
          <Button
            variant="outlined"
            color="error"
            onClick={() => navigate("/admin/category/trash")}
            startIcon={<DeleteIcon />}
            sx={{ fontSize: "14px", py: 1.2, px: 2 }}
          >
            Xem thùng rác
          </Button>
        </Box>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Box
            display="grid"
            gridTemplateColumns="2fr 1fr 1fr"
            gap={2}
            mb={3}
          >
            <TextField
              placeholder="Tìm kiếm danh mục..."
              variant="outlined"
              size="small"
              onChange={handleSearchChange}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />

            <Select
              value={filterStatus}
              onChange={handleFilterChange}
              size="small"
              fullWidth
            >
              <MenuItem value="all">Tất cả trạng thái</MenuItem>
              <MenuItem value="1">Đang hoạt động</MenuItem>
              <MenuItem value="0">Dừng hoạt động</MenuItem>
            </Select>

            <DatePicker
              label="Lọc từ ngày tạo"
              value={fromDate}
              onChange={(date) => {
                setFromDate(date);
                setCurrentPage(1); // Reset to first page when date changes
              }}
              slotProps={{
                textField: { size: "small", fullWidth: true },
              }}
            />
          </Box>
        </LocalizationProvider>

        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: theme.palette.grey[100] }}>
              <TableCell padding="checkbox">
                <Checkbox
                  onChange={handleSelectAll}
                  checked={filteredData.length > 0 && filteredData.every((item) => item.selected)}
                  indeterminate={filteredData.some((item) => item.selected) && !filteredData.every((item) => item.selected)}
                />
              </TableCell>
              <TableCell>#</TableCell>
              <TableCell>Hình ảnh</TableCell>
              <TableCell>Tên danh mục</TableCell>
              <TableCell>Trạng thái</TableCell>
              <TableCell align="center">Tổng sản phẩm</TableCell>
              <TableCell align="right">Hành động</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredData.map((row, i) => (
              <TableRow key={row.id} hover>
                <TableCell padding="checkbox">
                  <Checkbox checked={row.selected || false} onChange={() => handleSelectOne(row.id)} />
                </TableCell>
                <TableCell>{(currentPage - 1) * 10 + i + 1}</TableCell>
                <TableCell>
                  <img
                    src={`${API_IMAGE}/${row.imageUrl}`}
                    alt={row.name}
                    width="80"
                    height="80"
                    style={{ objectFit: "cover", borderRadius: 8 }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = `${DEFAULT_IMAGE}`;
                    }}
                  />
                </TableCell>
                <TableCell>
                  <Typography fontWeight={600} fontSize="16px">
                    {row.name}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box display="flex" alignItems="center" gap={1}>
                    {row.status === 1 ? (
                      <>
                        <CheckCircleIcon fontSize="small" sx={{ color: "#388e3c" }} />
                        <Typography color="#388e3c" fontWeight={600}>Đang hoạt động</Typography>
                      </>
                    ) : (
                      <>
                        <CancelIcon fontSize="small" sx={{ color: "#d32f2f" }} />
                        <Typography color="#d32f2f" fontWeight={600}>Dừng hoạt động</Typography>
                      </>
                    )}
                  </Box>
                </TableCell>
                <TableCell align="center">
                  {row.productCount} sản phẩm
                </TableCell>
                <TableCell align="right">
                  <IconButton onClick={(e) => handleOpenMenu(e, row)}>
                    <MoreVertIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {data.length === 0 && (
          <Typography textAlign="center" p={2}>Không có danh mục phù hợp</Typography>
        )}
        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <PaginationComponent
            totalPages={totalPages}
            currentPage={currentPage}
            onChange={setCurrentPage}
          />
        </CardContent>


        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
          <MenuItem onClick={handleEdit}>
            <EditIcon fontSize="small" sx={{ mr: 1 }} />
            Chỉnh sửa
          </MenuItem>
          <MenuItem onClick={handleDelete}>
            <DeleteIcon fontSize="small" sx={{ mr: 1 }} />
            Xóa
          </MenuItem>
        </Menu>
      </CardContent>
    </Card>
  );
};

export default CategoryPage;