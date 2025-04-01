import { useState } from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Modal,
  Button,
  FormControl,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  InputAdornment,
  IconButton,

} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EmailIcon from '@mui/icons-material/Email';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DashboardCard from "../../../components/shared/DashboardCard";

const data = [
  {
    id: "1", name: "Nguyễn Văn A", email: "user1@example.com", phone: "0912 345 678",
    content: "Tôi muốn hỏi về sản phẩm mới.", status: "1", date: "20/03/2025 11:00"
  },
  {
    id: "2", name: "Trần Thị B", email: "user2@example.com", phone: "0987 654 321",
    content: "Đơn hàng của tôi bị trễ, có thể kiểm tra giúp tôi không?", status: "0", date: "21/03/2025 08:00"
  },
  {
    id: "3", name: "Lê Văn C", email: "user3@example.com", phone: "0909 123 456",
    content: "Tôi cần báo giá số lượng lớn sản phẩm.", status: "1", date: "22/03/2025 08:00"
  },
  {
    id: "4", name: "Phạm Thị D", email: "user4@example.com", phone: "0933 888 999",
    content: "Sản phẩm bị lỗi khi giao tới.", status: "1", date: "23/03/2025 15:00"
  },
  {
    id: "5", name: "Hoàng Văn E", email: "user5@example.com", phone: "0944 777 666",
    content: "Tôi muốn đổi trả sản phẩm này.", status: "0", date: "24/03/2025 12:00"
  },
  {
    id: "6", name: "Ngô Thị F", email: "user6@example.com", phone: "0966 111 222",
    content: "Tôi muốn hủy đơn hàng vừa đặt.", status: "0", date: "25/03/2025 11:00"
  },
  {
    id: "7", name: "Đỗ Văn G", email: "user7@example.com", phone: "0977 333 444",
    content: "Tư vấn giúp tôi sản phẩm phù hợp.", status: "0", date: "26/03/2025 11:00"
  },
  {
    id: "8", name: "Lý Thị H", email: "user8@example.com", phone: "0999 555 888",
    content: "Tôi muốn đăng ký nhận bản tin khuyến mãi.", status: "1", date: "27/03/2025 16:00"
  },
  {
    id: "9", name: "Phan Văn I", email: "user9@example.com", phone: "0901 234 567",
    content: "Có chương trình giảm giá nào không?", status: "0", date: "28/03/2025 20:00"
  },
  {
    id: "10", name: "Vũ Thị J", email: "user10@example.com", phone: "0981 987 654",
    content: "Tôi cần hỗ trợ kỹ thuật sản phẩm đã mua.", status: "1", date: "29/03/2025 09:00"
  }
];

function Contact() {
  const [openContent, setOpenContent] = useState(false);
  const [openAction, setOpenAction] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [sortDate, setSortDate] = useState("");
  const [page] = useState(0);
  const [rowsPerPage] = useState(5);

  const handleView = (item) => {
    setSelectedItem(item);
    setOpenContent(true);
  };

  const handleChangeStatus = (item) => {
    setSelectedItem(item);
    setOpenAction(true);
  };

  const handleConfirmAction = () => {
    if (selectedItem) selectedItem.status = "1";
    setOpenAction(false);
  };

  const handleCancelAction = () => {
    setOpenAction(false);
  };


  const filteredData = data
    .filter((item) =>
      (item.name.toLowerCase().includes(searchKeyWord.toLowerCase()) ||
        item.email.toLowerCase().includes(searchKeyWord.toLowerCase()) ||
        item.phone.includes(searchKeyWord)) &&
      (filterStatus === "" || item.status === filterStatus)
    )
    .sort((a, b) => {
      if (sortDate === "newest") return new Date(b.date) - new Date(a.date);
      if (sortDate === "oldest") return new Date(a.date) - new Date(b.date);
      return 0;
    });

  const paginatedData = filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <DashboardCard title="Danh sách liên hệ">
      <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 2, flexWrap: 'wrap' }}>
        <TextField
          sx={{ flex: 2, minWidth: 250 }}
          placeholder="Tìm kiếm"
          value={searchKeyWord}
          onChange={(e) => setSearchKeyWord(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          size="small"
        />

        <FormControl size="small" sx={{ minWidth: 160 }}>
          <InputLabel>Trạng thái</InputLabel>
          <Select value={filterStatus} label="Trạng thái" onChange={(e) => setFilterStatus(e.target.value)}>
            <MenuItem value="">Tất cả</MenuItem>
            <MenuItem value="0">Chưa xử lý</MenuItem>
            <MenuItem value="1">Đã phản hồi</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: 180 }}>
          <InputLabel>Sắp xếp thời gian</InputLabel>
          <Select value={sortDate} label="Sắp xếp thời gian" onChange={(e) => setSortDate(e.target.value)}>
            <MenuItem value="">Không sắp xếp</MenuItem>
            <MenuItem value="newest">Mới nhất</MenuItem>
            <MenuItem value="oldest">Cũ nhất</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>STT</TableCell>
            <TableCell>Tên</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Điện thoại</TableCell>
            <TableCell>Nội dung</TableCell>
            <TableCell>Trạng thái</TableCell>
            <TableCell>Hành động</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedData.length === 0 ? (
            <TableRow><TableCell colSpan={7} align="center">Không có dữ liệu</TableCell></TableRow>
          ) : (
            paginatedData.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>{item.phone}</TableCell>
                <TableCell>
                  {item.content.slice(0, 30)}...
                  <Typography variant="caption" display="block" color="text.secondary">
                    Gửi lúc: {item.date}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    fontWeight={600}
                    sx={{
                      color: item.status === "1" ? "#00C49F" : "#F44336"
                    }}
                  >
                    {item.status === "1" ? "Đã phản hồi" : "Chưa xử lý"}
                  </Typography>
                </TableCell>
                <TableCell>
                  <IconButton onClick={() => handleView(item)}><VisibilityIcon /></IconButton>
                  <IconButton><EmailIcon /></IconButton>
                  <IconButton
                    onClick={() => handleChangeStatus(item)}
                    disabled={item.status === "1"} // ✅ Không cho click nếu đã phản hồi
                  >
                    <CheckCircleIcon
                      sx={{
                        color: item.status === "0" ? "#00C49F" : "#aaa",
                        border: "2px solid",
                        borderColor: item.status === "0" ? "#00C49F" : "#ccc",
                        borderRadius: "50%",
                        fontSize: 22
                      }}
                    />

                  </IconButton>

                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
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

      {/* Modal xem nội dung */}
      <Modal open={openContent} onClose={() => setOpenContent(false)}>
        <Box sx={{ p: 3, width: 400, bgcolor: '#fff', borderRadius: 2, mx: 'auto', mt: '15%', boxShadow: 24 }}>
          <Typography variant="h6">Nội dung chi tiết</Typography>
          <Typography sx={{ my: 2 }}>{selectedItem?.content}</Typography>
          <Typography color="text.secondary">Gửi lúc: {selectedItem?.date}</Typography>
          <Box display="flex" justifyContent="flex-end" mt={2}>
            <Button variant="outlined" onClick={() => setOpenContent(false)}>Đóng</Button>
          </Box>
        </Box>
      </Modal>

      {/* Dialog xác nhận */}
      <Dialog open={openAction} onClose={handleCancelAction}>
        <DialogTitle>Xác nhận</DialogTitle>
        <DialogContent>Bạn đã phản hồi thành công!</DialogContent>
        <DialogActions>
          <Button onClick={handleCancelAction} color="error">Hủy</Button>
          <Button onClick={handleConfirmAction} color="primary">Xác nhận</Button>
        </DialogActions>
      </Dialog>
    </DashboardCard>
  );
}

export default Contact;