import { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Box,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  Checkbox,
  Button,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RestoreIcon from '@mui/icons-material/RestoreFromTrash';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ConfirmDialog from '../../components/ConfirmDialog';
import { useNavigate } from 'react-router-dom';
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
const CategoryTrash = () => {
  const navigate = useNavigate();

  const [trashData, setTrashData] = useState([
    {
      id: 1,
      uname: "Ốp pô xe (đã xóa)",
      imageUrl: "https://shop2banh.vn/images/thumbs/2025/03/lop-goodride-h571-8090-14-9090-14-products-2420.jpg",
      status: 0,
      deletedAt: '2024-03-23',
      selected: false,
    },
    {
      id: 2,
      uname: "Kính chắn gió (đã xóa)",
      imageUrl: "https://shop2banh.vn/images/thumbs/2025/03/lop-goodride-h571-8090-14-9090-14-products-2420.jpg",
      status: 0,
      deletedAt: '2024-03-24',
      selected: false,
    },
   
  ]);

  const [searchText, setSearchText] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [page] = useState(0);
  const [rowsPerPage] = useState(5);

  const handleRestore = (item) => {
    ConfirmDialog({
      title: "Khôi phục danh mục",
      text: `Bạn có chắc chắn muốn khôi phục "${item.uname}"?`,
      onConfirm: () => {
        setTrashData(prev => prev.filter(p => p.id !== item.id));
      }
    });
  };

  const handlePermanentDelete = (item) => {
    ConfirmDialog({
      title: "Xóa vĩnh viễn",
      text: `Bạn có chắc muốn xóa vĩnh viễn "${item.uname}"?`,
      onConfirm: () => {
        setTrashData(prev => prev.filter(p => p.id !== item.id));
      }
    });
  };

  const handleSelectOne = (id) => {
    setTrashData(prev =>
      prev.map(item =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    const currentItems = paginatedData;
    const updated = trashData.map(item =>
      currentItems.includes(item)
        ? { ...item, selected: checked }
        : item
    );
    setTrashData(updated);
  };

  const handleRestoreSelected = () => {
    const selectedItems = trashData.filter(item => item.selected);
    if (selectedItems.length === 0) return;

    ConfirmDialog({
      title: "Khôi phục danh mục đã chọn",
      text: `Bạn có chắc muốn khôi phục ${selectedItems.length} danh mục đã chọn?`,
      onConfirm: () => {
        setTrashData(prev => prev.filter(item => !item.selected));
      }
    });
  };

  const filteredData = trashData
    .filter(item =>
      item.uname.toLowerCase().includes(searchText.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === 'nameAsc') return a.uname.localeCompare(b.uname);
      if (sortOption === 'nameDesc') return b.uname.localeCompare(a.uname);
      if (sortOption === 'dateAsc') return new Date(a.deletedAt) - new Date(b.deletedAt);
      if (sortOption === 'dateDesc') return new Date(b.deletedAt) - new Date(a.deletedAt);
      return 0;
    });

  const paginatedData = filteredData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Card sx={{ p: 3 }}>
      <CardContent>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Danh sách danh mục đã xóa
        </Typography>


        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Box
            display="grid"
            gridTemplateColumns="2fr 1fr 1fr"
            gap={2}
            mb={4}
            mt={3}
          >
            <TextField
              label="Tìm kiếm danh mục"
              placeholder="Nhập tên danh mục..."
              variant="outlined"
              fullWidth
              size="medium"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />

            <Select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              displayEmpty
              size="medium"
              fullWidth
            >
              <MenuItem value="">Sắp xếp theo</MenuItem>
              <MenuItem value="nameAsc">Tên A → Z</MenuItem>
              <MenuItem value="nameDesc">Tên Z → A</MenuItem>
              <MenuItem value="dateAsc">Ngày xóa cũ → mới</MenuItem>
              <MenuItem value="dateDesc">Ngày xóa mới → cũ</MenuItem>
            </Select>

            <DatePicker
              label="Lọc theo ngày xóa"
              value={null} // cần thêm state nếu muốn lọc thật
              onChange={() => { }} // xử lý khi chọn
              slotProps={{ textField: { fullWidth: true, size: 'medium' } }}
            />
          </Box>
        </LocalizationProvider>

        <Box overflow="auto">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={paginatedData.length > 0 && paginatedData.every(item => item.selected)}
                    indeterminate={paginatedData.some(item => item.selected) && !paginatedData.every(item => item.selected)}
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>#</TableCell>
                <TableCell>Hình ảnh</TableCell>
                <TableCell>Tên danh mục</TableCell>
                <TableCell>Ngày xóa</TableCell>
                <TableCell>Hành động</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.length > 0 ? (
                paginatedData.map((item, index) => (
                  <TableRow key={item.id}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={item.selected || false}
                        onChange={() => handleSelectOne(item.id)}
                      />
                    </TableCell>
                    <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                    <TableCell>
                      <img
                        src={item.imageUrl}
                        alt={item.uname}
                        width="60"
                        height="60"
                        style={{ objectFit: "cover", borderRadius: "8px" }}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography fontWeight={600}>{item.uname}</Typography>
                    </TableCell>
                    <TableCell>
                      {new Date(item.deletedAt).toLocaleDateString('vi-VN')}
                    </TableCell>
                    <TableCell>
                      <IconButton color="primary" onClick={() => handleRestore(item)}>
                        <RestoreIcon />
                      </IconButton>
                      <IconButton color="error" onClick={() => handlePermanentDelete(item)}>
                        <DeleteForeverIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    Không có dữ liệu trong thùng rác
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Box>

        <Box display="flex" justifyContent="center" gap={2} mt={4}>
          <IconButton disabled>
            <Typography fontSize="18px" color="text.secondary">❮</Typography>
          </IconButton>

          {[1, 2, 3, 4, 5].map((page) => (
            <Box
              key={page}
              width={36}
              height={36}
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="50%"
              bgcolor={page === 1 ? "primary.main" : "transparent"}
              color={page === 1 ? "#fff" : "text.primary"}
              sx={{
                cursor: "pointer",
                transition: "all 0.2s",
                "&:hover": {
                  bgcolor: page === 1 ? "primary.main" : "grey.100",
                },
              }}
            >
              <Typography fontSize="14px" fontWeight="bold">
                {page}
              </Typography>
            </Box>
          ))}

          <IconButton>
            <Typography fontSize="18px" color="text.secondary">❯</Typography>
          </IconButton>
        </Box>


        <Box mt={4} display="flex" justifyContent="space-between">
          <Button
            variant="outlined"
            color="inherit"
            onClick={() => navigate('/admin/category')}
          >
            ← Quay về danh sách
          </Button>

          <Button
            variant="contained"
            color="primary"
            startIcon={<RestoreIcon />}
            onClick={handleRestoreSelected}
          >
            Khôi phục đã chọn
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CategoryTrash;
