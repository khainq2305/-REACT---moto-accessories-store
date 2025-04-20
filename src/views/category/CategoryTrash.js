import { useState, useEffect } from 'react';
import {
  Card, CardContent, Typography, Table, TableHead, TableRow, TableCell, TableBody,
  IconButton, Box, TextField, InputAdornment, Select, MenuItem, Checkbox, Button
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import RestoreIcon from '@mui/icons-material/RestoreFromTrash';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ConfirmDialog from '../../components/ConfirmDialog';
import { useNavigate } from 'react-router-dom';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { categoriesService } from '../../services/categoryServices';
const API_IMAGE = import.meta.env.VITE_API_URL + "/uploads";
const DEFAULT_IMAGE = "http://localhost:3000/uploads/default.jpg";
import { toast } from 'react-toastify';
import PaginationComponent from '../../components/Pagination';

const CategoryTrash = () => {
  const navigate = useNavigate();
  const [trashData, setTrashData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [sortOption, setSortOption] = useState('dateDesc');
  const [deleteDate, setDeleteDate] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [rowsPerPage] = useState(10);

  const fetchTrashData = async () => {
    try {
      const filters = {
        page: currentPage,
        limit: rowsPerPage,
        search: searchText,
        sort: sortOption,
        deleteDate: deleteDate && !isNaN(deleteDate) ? deleteDate.toISOString() : null,
      };
      
      const response = await categoriesService.getSoftDeletedCategories(filters);
      setTrashData(response.data?.data.map(item => ({ ...item, selected: false })) || []);
      setTotalPages(response.data?.totalPages || 1);
    } catch (error) {
      console.error('Failed to fetch trash categories:', error);
      toast.error('Không thể tải danh sách danh mục đã xóa');
    }
  };

  useEffect(() => {
    fetchTrashData();
  }, [currentPage, searchText, sortOption, deleteDate]);

  const handleRestore = async (item) => {
    ConfirmDialog({
      title: 'Khôi phục danh mục',
      text: `Bạn có chắc chắn muốn khôi phục "${item.name}"?`,
      onConfirm: async () => {
        try {
          await categoriesService.restoreCategories(item.id);
          await fetchTrashData();
          toast.success(`Đã khôi phục "${item.name}"`);
        } catch (error) {
          toast.error(`Lỗi khi khôi phục "${item.name}"`);
          console.error('Restore error:', error);
        }
      },
    });
  };

  const handlePermanentDelete = async (item) => {
    ConfirmDialog({
      title: 'Xóa vĩnh viễn',
      text: `Bạn có chắc muốn xóa vĩnh viễn "${item.name}"?`,
      onConfirm: async () => {
        try {
          await categoriesService.permanentDeleteCategories(item.id);
          await fetchTrashData();
          toast.success(`Đã xóa vĩnh viễn "${item.name}"`);
        } catch (error) {
          toast.error(`Lỗi khi xóa vĩnh viễn "${item.name}"`);
          console.error('Permanent delete error:', error);
        }
      },
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
    setTrashData(prev =>
      prev.map(item => ({ ...item, selected: e.target.checked }))
    );
  };

  const handleRestoreSelected = async () => {
    const selectedItems = trashData.filter(item => item.selected);
    if (!selectedItems.length) {
      toast.info('Vui lòng chọn ít nhất một danh mục');
      return;
    }

    ConfirmDialog({
      title: 'Khôi phục danh mục đã chọn',
      text: `Bạn có chắc muốn khôi phục ${selectedItems.length} danh mục?`,
      onConfirm: async () => {
        try {
          await Promise.all(
            selectedItems.map(item => categoriesService.restoreCategories(item.id))
          );
          await fetchTrashData();
          toast.success(`Đã khôi phục ${selectedItems.length} danh mục`);
        } catch (error) {
          toast.error('Lỗi khi khôi phục danh mục');
          console.error('Bulk restore error:', error);
        }
      },
    });
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    setCurrentPage(1);
  };

  const handleDateChange = (date) => {
    setDeleteDate(date);
    setCurrentPage(1);
  };

  return (
    <Card sx={{ p: 3 }}>
      <CardContent>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Thùng rác danh mục
        </Typography>

        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Box display="grid" gridTemplateColumns="2fr 1fr 1fr" gap={2} mb={4} mt={3}>
            <TextField
              label="Tìm kiếm danh mục"
              placeholder="Nhập tên danh mục..."
              variant="outlined"
              fullWidth
              value={searchText}
              onChange={handleSearchChange}
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
              onChange={handleSortChange}
              fullWidth
            >
              <MenuItem value="nameAsc">Tên A → Z</MenuItem>
              <MenuItem value="nameDesc">Tên Z → A</MenuItem>
              <MenuItem value="dateAsc">Ngày xóa cũ → mới</MenuItem>
              <MenuItem value="dateDesc">Ngày xóa mới → cũ</MenuItem>
            </Select>
            <DatePicker
              label="Lọc theo ngày xóa"
              value={deleteDate}
              onChange={handleDateChange}
              slotProps={{ textField: { fullWidth: true } }}
            />
          </Box>
        </LocalizationProvider>

        <Box overflow="auto">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={trashData.length > 0 && trashData.every(item => item.selected)}
                    indeterminate={trashData.some(item => item.selected) && !trashData.every(item => item.selected)}
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
              {trashData.length ? (
                trashData.map((item, index) => (
                  <TableRow key={item.id}>
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={item.selected || false}
                        onChange={() => handleSelectOne(item.id)}
                      />
                    </TableCell>
                    <TableCell>{(currentPage - 1) * rowsPerPage + index + 1}</TableCell>
                    <TableCell>
                      <img
                        src={`${API_IMAGE}/${item.imageUrl}`}
                        alt={item.name}
                        width="80"
                        height="80"
                        style={{ objectFit: 'cover', borderRadius: '8px' }}
                        onError={(e) => {
                          e.target.src = DEFAULT_IMAGE;
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Typography fontWeight={600}>{item.name}</Typography>
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
                    Không có danh mục trong thùng rác
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Box>

        <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
  {trashData.length > 0 && (
    <PaginationComponent
      count={totalPages}
      page={currentPage}
      onChange={(event, value) => setCurrentPage(value)}
      color="primary"
    />
  )}
</CardContent>

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
            disabled={!trashData.some(item => item.selected)}
          >
            Khôi phục đã chọn
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CategoryTrash;