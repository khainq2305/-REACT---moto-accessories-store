import { useState, useEffect } from "react";
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
  Button,
  TextField,
  InputAdornment,
  Select,
  MenuItem,
  Paper,
  CircularProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useNavigate } from "react-router-dom";
import { getCommentSummary } from "../../services/commentServices";
import { toast } from "react-toastify";

const CommentList = () => {
  const navigate = useNavigate();
  const [sortOption, setSortOption] = useState("default");
  const [searchText, setSearchText] = useState("");
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await getCommentSummary();
        setComments(res.data || []);
      } catch (error) {
        console.error("❌ Lỗi khi lấy danh sách comment:", error);
        toast.error("Không thể tải dữ liệu bình luận.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const getFilteredData = () => {
    let filtered = [...comments];

    if (searchText) {
      filtered = filtered.filter((item) =>
        item.productName.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    switch (sortOption) {
      case "most-commented":
        filtered.sort((a, b) => b.totalComments - a.totalComments);
        break;
      case "highest-rating":
        filtered = filtered
          .filter((item) => item.avgRating !== null)
          .sort((a, b) => b.avgRating - a.avgRating);
        break;
      case "lowest-rating":
        filtered = filtered
          .filter((item) => item.avgRating !== null)
          .sort((a, b) => a.avgRating - b.avgRating);
        break;
      case "az":
        filtered.sort((a, b) => a.productName.localeCompare(b.productName));
        break;
      case "za":
        filtered.sort((a, b) => b.productName.localeCompare(a.productName));
        break;
      default:
        break;
    }

    return filtered;
  };

  const paginatedData = getFilteredData().slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  return (
    <Card>
      <CardHeader
        title={
          <Typography variant="h6" fontWeight={700}>
            💬 Quản lý bình luận sản phẩm
          </Typography>
        }
      />
      <CardContent>
      <Paper
  elevation={0}
  sx={{
    p: 2,
    mb: 3,
    backgroundColor: "#f5f7fa",
    borderRadius: 3,
    boxShadow: "inset 0 0 5px rgba(0,0,0,0.05)",
  }}
>
  <Box
    display="flex"
    flexDirection={{ xs: "column", md: "row" }}
    gap={2}
    width="100%"
  >
    <TextField
      fullWidth
      placeholder="🔍 Tìm kiếm sản phẩm..."
      variant="outlined"
      size="small"
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      sx={{
        backgroundColor: "white",
        borderRadius: 2,
        "& .MuiOutlinedInput-root": {
          borderRadius: 2,
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />

    <Select
      fullWidth
      value={sortOption}
      onChange={(e) => setSortOption(e.target.value)}
      size="small"
      displayEmpty
      sx={{
        backgroundColor: "white",
        borderRadius: 2,
        "& .MuiOutlinedInput-notchedOutline": {
          borderRadius: 2,
        },
      }}
    >
      <MenuItem value="default">🔁 Mặc định</MenuItem>
      <MenuItem value="most-commented">💬 Bình luận nhiều nhất</MenuItem>
      <MenuItem value="highest-rating">⭐ Sao cao nhất</MenuItem>
      <MenuItem value="lowest-rating">⭐ Sao thấp nhất</MenuItem>
      <MenuItem value="az">🔤 Tên A-Z</MenuItem>
      <MenuItem value="za">🔡 Tên Z-A</MenuItem>
    </Select>
  </Box>
</Paper>


        {loading ? (
          <Box textAlign="center" mt={5}>
            <CircularProgress />
            <Typography mt={2} fontStyle="italic" color="text.secondary">
              Đang tải dữ liệu bình luận...
            </Typography>
          </Box>
        ) : (
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell align="center">Ảnh</TableCell>
                <TableCell align="center">Sản phẩm</TableCell>
                <TableCell align="center">Tổng bình luận</TableCell>
                <TableCell align="center">Sao trung bình</TableCell>
                <TableCell align="center">Hành động</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedData.length > 0 ? (
                paginatedData.map((item, index) => (
                  <TableRow
                    key={item.productId}
                    hover
                    sx={{ "&:hover": { backgroundColor: "#f5faff" } }}
                  >
                    <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                    <TableCell align="center">
                      <img
                        src={item.imageUrl}
                        alt={item.productName}
                        width={100}
                        height={100}
                        style={{
                          borderRadius: 8,
                          objectFit: "cover",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                        }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Typography fontWeight={600} fontSize={14}>
                        {item.productName}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      <Typography fontWeight={500} color="primary">
                        {item.totalComments}
                      </Typography>
                    </TableCell>
                    <TableCell align="center">
                      {item.avgRating !== null ? (
                        <Box
                          display="flex"
                          alignItems="center"
                          justifyContent="center"
                          gap={0.2}
                        >
                          {[1, 2, 3, 4, 5].map((star) =>
                            star <= Math.round(item.avgRating) ? (
                              <StarIcon
                                key={star}
                                sx={{ fontSize: 18, color: "#fdd835" }}
                              />
                            ) : (
                              <StarBorderIcon
                                key={star}
                                sx={{ fontSize: 18, color: "#ccc" }}
                              />
                            )
                          )}
                          <Typography variant="body2" fontSize={12}>
                            ({item.avgRating.toFixed(1)})
                          </Typography>
                        </Box>
                      ) : (
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          fontStyle="italic"
                        >
                          Chưa có
                        </Typography>
                      )}
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        variant="outlined"
                        size="small"
                        startIcon={<VisibilityIcon />}
                        onClick={() =>
                          navigate(`/admin/comment/${item.productId}`)
                        }
                        sx={{
                          borderRadius: 10,
                          textTransform: "none",
                          fontSize: "13px",
                        }}
                      >
                        Xem Chi Tiết
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} align="center">
                    Không tìm thấy dữ liệu
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
};

export default CommentList;
