import React, { useState } from "react";
import ConfirmDialog from "../../components/ConfirmDialog";
import useToast from "../../components/Toast";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Checkbox,
  IconButton,
  TablePagination,
  Menu,
  Button,
  useTheme,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const initialData = [
  {
    id: 1,
    uname: "Ốp pô xe",
    imageUrl:
      "https://shop2banh.vn/images/thumbs/2024/05/tay-thang-cnc-cho-honda-wave-2303-slide-products-6646dbdfd57c6.JPG",
    status: 1,
    selected: false,
    createdAt: "2024-03-01",
  },
  {
    id: 2,
    uname: "Đèn led",
    imageUrl:
      "https://shop2banh.vn/images/thumbs/2024/09/tay-thang-gh-racing-cnc-cho-honda-lead-2361-slide-products-66f4d30b965ff.jpg",
    status: 0,
    selected: false,
    createdAt: "2024-03-05",
  },
  {
    id: 3,
    uname: "Kính chắn gió",
    imageUrl:
      "https://shop2banh.vn/images/thumbs/2022/07/dia-kingspeed-260mm-mau-moi-4-lo-products-1860.jpg",
    status: 1,
    selected: false,
    createdAt: "2024-03-10",
  },
];

const CategoryPage = () => {
  const toast = useToast();
  const navigate = useNavigate();
  const theme = useTheme();

  const [searchText, setSearchText] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [data, setData] = useState(initialData);
  const [trash, setTrash] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuRow, setMenuRow] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
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
    if (menuRow) navigate(`/category/edit/${menuRow.id}`);
    handleCloseMenu();
  };

  const handleDelete = () => {
    ConfirmDialog({
      title: "Xác nhận xóa",
      text: `Bạn có chắc chắn muốn xóa \"${menuRow?.uname}\"?`,
      onConfirm: () => {
        setData((prev) => prev.filter((item) => item.id !== menuRow.id));
        setTrash((prev) => [...prev, { ...menuRow, selected: false }]);
        toast("Đã chuyển vào thùng rác", "info");
      },
    });
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
    const matchText = item.uname.toLowerCase().includes(searchText);
    const matchStatus =
      filterStatus === "all" || item.status.toString() === filterStatus;
    return matchText && matchStatus;
  });

  return (
    <Card elevation={4} sx={{ borderRadius: 4, p: 2 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
          <Typography variant="h5" fontWeight="bold">
            📂 Danh sách các danh mục
          </Typography>
          <Button
            variant="outlined"
            color="error"
            onClick={() => navigate("/category/trash")}
            startIcon={<DeleteIcon />}
            sx={{ fontSize: "14px", py: 1.2, px: 2 }}
          >
            Xem thùng rác
          </Button>
        </Box>

        <Box
  display="flex"
  alignItems="center"
  justifyContent="space-between"
  gap={2}
  flexWrap="wrap"
  mb={3}
>
  <TextField
    placeholder="🔍 Tìm kiếm danh mục..."
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
    sx={{ minWidth: 250, flex: 1 }}
  />

  <Select
    value={filterStatus}
    onChange={handleFilterChange}
    size="small"
    sx={{ minWidth: 180 }}
  >
    <MenuItem value="all">Tất cả trạng thái</MenuItem>
    <MenuItem value="1">Đang hoạt động</MenuItem>
    <MenuItem value="0">Dừng hoạt động</MenuItem>
  </Select>
</Box>


        <Table>
          <TableHead>
            <TableRow sx={{ backgroundColor: theme.palette.grey[100] }}>
              <TableCell padding="checkbox">
                <Checkbox
                  onChange={handleSelectAll}
                  checked={
                    filteredData.length > 0 &&
                    filteredData.every((item) => item.selected)
                  }
                  indeterminate={
                    filteredData.some((item) => item.selected) &&
                    !filteredData.every((item) => item.selected)
                  }
                />
              </TableCell>
              <TableCell>#</TableCell>
              <TableCell>Hình ảnh</TableCell>
              <TableCell>Tên danh mục</TableCell>
              <TableCell>Trạng thái</TableCell>
              <TableCell align="right">Hành động</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {filteredData
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, i) => (
                <TableRow key={row.id} hover>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={row.selected || false}
                      onChange={() => handleSelectOne(row.id)}
                    />
                  </TableCell>
                  <TableCell>{page * rowsPerPage + i + 1}</TableCell>
                  <TableCell>
                    <img
                      src={row.imageUrl}
                      alt={row.uname}
                      width="80"
                      height="80"
                      style={{ objectFit: "cover", borderRadius: 8 }}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography fontWeight={600} fontSize="16px">
                      {row.uname}
                    </Typography>
                    <Typography fontSize="13px" color="text.secondary">
                      Ngày tạo: {new Date(row.createdAt).toLocaleDateString("vi-VN")}
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
                  <TableCell align="right">
                    <IconButton onClick={(e) => handleOpenMenu(e, row)}>
                      <MoreVertIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>

        <TablePagination
          component="div"
          count={filteredData.length}
          page={page}
          onPageChange={(_, newPage) => setPage(newPage)}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={(e) => {
            setRowsPerPage(parseInt(e.target.value, 10));
            setPage(0);
          }}
        />

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
