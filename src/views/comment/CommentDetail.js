import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardContent,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Typography,
  Box,
  TextField,
  InputAdornment,
  MenuItem,
  Select,
  Avatar,
  Menu,
  Button,
  TablePagination,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ReplyIcon from "@mui/icons-material/Reply";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

// --- MOCK DATA ---
const mockData = [
  // Bình luận cho sản phẩm 101
  {
    id: 1,
    productId: 101,
    user: "Nguyễn Văn A",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
    content: "Sản phẩm rất tốt!",
    date: "2024-03-24",
    reply: "Cảm ơn bạn đã ủng hộ!",
    replyDate: "2024-03-25",
  },
  {
    id: 2,
    productId: 101,
    user: "Lê Văn C",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5,
    content: "Quá ngon!",
    date: "2024-03-26",
    reply: "Hẹn gặp lại lần sau!",
    replyDate: "2024-03-27",
  },
  {
    id: 3,
    productId: 101,
    user: "Mai Thị D",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 3,
    content: "Tạm ổn, có thể cải thiện.",
    date: "2024-03-28",
    reply: "",
    replyDate: "",
  },

  // Bình luận cho sản phẩm 102
  {
    id: 4,
    productId: 102,
    user: "Trần Thị B",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    rating: 2,
    content: "Không như mong đợi!",
    date: "2024-03-22",
    reply: "",
    replyDate: "",
  },
  {
    id: 5,
    productId: 102,
    user: "Đoàn Văn E",
    avatar: "https://randomuser.me/api/portraits/men/14.jpg",
    rating: 3,
    content: "Chất lượng ổn trong tầm giá.",
    date: "2024-03-23",
    reply: "Cảm ơn bạn đã góp ý!",
    replyDate: "2024-03-24",
  },
  {
    id: 6,
    productId: 102,
    user: "Vũ Thị F",
    avatar: "https://randomuser.me/api/portraits/women/25.jpg",
    rating: 1,
    content: "Không hài lòng, giao hàng chậm.",
    date: "2024-03-24",
    reply: "",
    replyDate: "",
  },

  // Bình luận cho sản phẩm 103
  {
    id: 7,
    productId: 103,
    user: "Lâm Văn G",
    avatar: "https://randomuser.me/api/portraits/men/18.jpg",
    rating: 5,
    content: "Quá tuyệt vời!",
    date: "2024-03-20",
    reply: "Rất vui vì bạn hài lòng!",
    replyDate: "2024-03-21",
  },
  {
    id: 8,
    productId: 103,
    user: "Phạm Thị H",
    avatar: "https://randomuser.me/api/portraits/women/31.jpg",
    rating: 4,
    content: "Rất đáng tiền.",
    date: "2024-03-21",
    reply: "",
    replyDate: "",
  },
  {
    id: 9,
    productId: 103,
    user: "Ngô Văn I",
    avatar: "https://randomuser.me/api/portraits/men/40.jpg",
    rating: 4,
    content: "Hài lòng với chất lượng.",
    date: "2024-03-22",
    reply: "Cảm ơn bạn nhiều!",
    replyDate: "2024-03-23",
  }
];

const CommentDetail = () => {
  const { productId } = useParams();

  const [searchText, setSearchText] = useState("");
  const [selectedRating, setSelectedRating] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuRow, setMenuRow] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Dialog state
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);
  const [dialogReplyText, setDialogReplyText] = useState("");

  const productComments = mockData.filter(item => item.productId === parseInt(productId));
  const filteredData = productComments.filter(item => {
    const matchesText = item.content.toLowerCase().includes(searchText.toLowerCase());
    const matchesRating = selectedRating === "all" || item.rating === parseInt(selectedRating);
    const matchesStatus = selectedStatus === "all" || (selectedStatus === "replied" ? !!item.reply : !item.reply);
    return matchesText && matchesRating && matchesStatus;
  });

  const paginatedData = filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleOpenMenu = (e, row) => {
    setAnchorEl(e.currentTarget);
    setMenuRow(row);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
    setMenuRow(null);
  };

  const handleStartReply = (row) => {
    setSelectedComment(row);
    setDialogReplyText(row.reply || "");
    setOpenDialog(true);
    handleCloseMenu();
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedComment(null);
    setDialogReplyText("");
  };

  const handleSubmitReply = () => {
    alert(`Phản hồi cho ${selectedComment.user}: ${dialogReplyText}`);
    handleCloseDialog();
  };

  return (
    <Card>
      <CardHeader
        title={
          <Box display="flex" alignItems="center" gap={1}>
            <Typography variant="h6" fontWeight="bold">
              💬 Chi tiết bình luận -{" "}
              <span style={{ color: "#1976d2" }}>Sản phẩm ID {productId}</span>
            </Typography>
          </Box>
        }
      />
      <CardContent>
        {/* Bộ lọc */}
        <Box display="flex" alignItems="center" gap={2} mb={3} flexWrap="wrap" sx={{ backgroundColor: "#f5f5f5", p: 2, borderRadius: 2 }}>
          <TextField
            variant="outlined"
            label="🔍 Tìm kiếm bình luận"
            size="small"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            sx={{ flex: 1, minWidth: 300, backgroundColor: "white", borderRadius: 1 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              )
            }}
          />
          <Select
            size="small"
            value={selectedRating}
            onChange={(e) => setSelectedRating(e.target.value)}
            displayEmpty
            sx={{ minWidth: 160, backgroundColor: "white", borderRadius: 1 }}
          >
            <MenuItem value="all">⭐ Tất cả sao</MenuItem>
            {[5, 4, 3, 2, 1].map(val => (
              <MenuItem key={val} value={val}>{val} ⭐</MenuItem>
            ))}
          </Select>
          <Select
            size="small"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            displayEmpty
            sx={{ minWidth: 180, backgroundColor: "white", borderRadius: 1 }}
          >
            <MenuItem value="all">📌 Tất cả trạng thái</MenuItem>
            <MenuItem value="replied">✅ Đã phản hồi</MenuItem>
            <MenuItem value="not_replied">⏳ Chưa phản hồi</MenuItem>
          </Select>
        </Box>

        {/* Bảng dữ liệu */}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Avatar</TableCell>
              <TableCell>Người dùng</TableCell>
              <TableCell>Đánh giá</TableCell>
              <TableCell>Nội dung</TableCell>
              <TableCell>Trạng thái</TableCell>
              <TableCell>Phản hồi</TableCell>
              <TableCell align="right">Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.length === 0 ? (
              <TableRow>
                <TableCell colSpan={8} align="center">Không tìm thấy bình luận</TableCell>
              </TableRow>
            ) : (
              paginatedData.map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                  <TableCell><Avatar src={item.avatar} alt={item.user} /></TableCell>
                  <TableCell>{item.user}</TableCell>
                  <TableCell>
                    {[1, 2, 3, 4, 5].map(star =>
                      star <= item.rating ? (
                        <StarIcon key={star} fontSize="small" color="warning" />
                      ) : (
                        <StarBorderIcon key={star} fontSize="small" color="disabled" />
                      )
                    )}
                  </TableCell>
                  <TableCell>
                    <Typography fontSize={14}>{item.content}</Typography>
                    <Typography fontSize={12} color="text.secondary">{item.date}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography fontWeight={600} color={item.reply ? "green" : "orange"}>
                      {item.reply ? "Đã phản hồi" : "Chưa phản hồi"}
                    </Typography>
                  </TableCell>
                  <TableCell>
                    {item.reply ? (
                      <>
                        <Typography>{item.reply}</Typography>
                        <Typography fontSize={12} color="text.secondary">({item.replyDate})</Typography>
                      </>
                    ) : (
                      <Typography variant="body2" color="text.secondary" fontStyle="italic">
                        Chưa có phản hồi
                      </Typography>
                    )}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton onClick={(e) => handleOpenMenu(e, item)}>
                      <MoreVertIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>

        {/* Phân trang */}
        <TablePagination
          component="div"
          count={filteredData.length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 20]}
        />

        {/* Menu hành động */}
        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
          <MenuItem onClick={() => handleStartReply(menuRow)}>
            <ReplyIcon fontSize="small" sx={{ mr: 1 }} /> Phản hồi
          </MenuItem>
          {menuRow?.reply && (
            <>
              <MenuItem onClick={() => alert(`Sửa phản hồi ${menuRow?.id}`)}>
                <EditIcon fontSize="small" sx={{ mr: 1 }} /> Sửa
              </MenuItem>
              <MenuItem onClick={() => alert(`Xóa phản hồi ${menuRow?.id}`)}>
                <DeleteIcon fontSize="small" sx={{ mr: 1 }} /> Xóa
              </MenuItem>
            </>
          )}
        </Menu>

        {/* Dialog phản hồi */}
        <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth maxWidth="sm">
          <DialogTitle>Phản hồi bình luận</DialogTitle>
          <DialogContent dividers>
            <Typography mb={1}>
              <strong>{selectedComment?.user}:</strong> {selectedComment?.content}
            </Typography>
            <TextField
              multiline
              fullWidth
              minRows={3}
              value={dialogReplyText}
              onChange={(e) => setDialogReplyText(e.target.value)}
              placeholder="Nhập nội dung phản hồi..."
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog} color="error">Hủy</Button>
            <Button variant="contained" onClick={handleSubmitReply}>Gửi</Button>
          </DialogActions>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default CommentDetail;
