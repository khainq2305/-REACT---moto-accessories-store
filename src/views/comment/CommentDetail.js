import { useState, useEffect } from "react";
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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import ReplyIcon from "@mui/icons-material/Reply";
import { getCommentsByProduct } from "../../services/commentServices";

const CommentDetail = () => {
  const { productId } = useParams();

  const [comments, setComments] = useState([]);
  const [productName, setProductName] = useState("");
  const [searchText, setSearchText] = useState("");
  const [selectedRating, setSelectedRating] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuRow, setMenuRow] = useState(null);
  const [page] = useState(0);
  const [rowsPerPage] = useState(5);

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedComment, setSelectedComment] = useState(null);
  const [dialogReplyText, setDialogReplyText] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await getCommentsByProduct(productId);
        setProductName(res.productName || "Không rõ sản phẩm");
        setComments(res.comments || []);
      } catch (err) {
        console.error("❌ Lỗi khi lấy comment chi tiết:", err);
      }
    };
    fetchComments();
  }, [productId]);
  

  const filteredData = comments.filter((item) => {
    const matchesText = item.content.toLowerCase().includes(searchText.toLowerCase());
    const matchesRating = selectedRating === "all" || item.rating === parseInt(selectedRating);
    const matchesStatus =
      selectedStatus === "all" || (selectedStatus === "replied" ? !!item.reply : !item.reply);
    return matchesText && matchesRating && matchesStatus;
  });

  const paginatedData = filteredData.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

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
              💬 Chi tiết bình luận - <span style={{ color: "#1976d2" }}>{productName}</span>
            </Typography>
          </Box>
        }
      />
      <CardContent>
        <Box
          display="flex"
          alignItems="center"
          gap={2}
          mb={3}
          flexWrap="wrap"
          sx={{ backgroundColor: "#f5f5f5", p: 2, borderRadius: 2 }}
        >
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
              ),
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
            {[5, 4, 3, 2, 1].map((val) => (
              <MenuItem key={val} value={val}>
                {val} ⭐
              </MenuItem>
            ))}
          </Select>
          <Select
            size="small"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            displayEmpty
            sx={{ minWidth: 180, backgroundColor: "white", borderRadius: 1 }}
          >
            <MenuItem value="all">Tất cả trạng thái</MenuItem>
            <MenuItem value="replied">Đã phản hồi</MenuItem>
            <MenuItem value="not_replied">Chưa phản hồi</MenuItem>
          </Select>
        </Box>

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
                <TableCell colSpan={8} align="center">
                  Không tìm thấy bình luận
                </TableCell>
              </TableRow>
            ) : (
              paginatedData.map((item, index) => (
                <TableRow key={item.id}>
                  <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                  <TableCell>
                    <Avatar src={item.avatar} alt={item.user} />
                  </TableCell>
                  <TableCell>{item.user}</TableCell>
                  <TableCell>
                    {[1, 2, 3, 4, 5].map((star) =>
                      star <= item.rating ? (
                        <StarIcon key={star} fontSize="small" color="warning" />
                      ) : (
                        <StarBorderIcon key={star} fontSize="small" color="disabled" />
                      )
                    )}
                  </TableCell>
                  <TableCell>
                    <Typography fontSize={14}>{item.content}</Typography>
                    <Typography fontSize={12} color="text.secondary">
                      {item.date}
                    </Typography>
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
                        <Typography fontSize={12} color="text.secondary">
                          ({item.replyDate})
                        </Typography>
                      </>
                    ) : (
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        fontStyle="italic"
                      >
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

        <Box display="flex" justifyContent="center" gap={2} mt={4}>
          <IconButton disabled>
            <Typography fontSize="18px" color="text.secondary">
              ❮
            </Typography>
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
            <Typography fontSize="18px" color="text.secondary">
              ❯
            </Typography>
          </IconButton>
        </Box>

        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleCloseMenu}>
          <MenuItem onClick={() => handleStartReply(menuRow)}>
            <ReplyIcon fontSize="small" sx={{ mr: 1 }} /> Phản hồi
          </MenuItem>
        </Menu>

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
            <Button onClick={handleCloseDialog} color="error">
              Hủy
            </Button>
            <Button variant="contained" onClick={handleSubmitReply}>
              Gửi
            </Button>
          </DialogActions>
        </Dialog>
      </CardContent>
    </Card>
  );
};

export default CommentDetail;