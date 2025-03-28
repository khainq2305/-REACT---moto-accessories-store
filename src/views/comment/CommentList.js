import React, { useState } from "react";
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
  TablePagination,
  Select,
  MenuItem,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import VisibilityIcon from "@mui/icons-material/Visibility";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { useNavigate } from "react-router-dom";

const mockComments = [
  {
    id: 1,
    productId: 101,
    productName: "Ốp pô xe",
    imageUrl:
      "https://shop2banh.vn/images/thumbs/2023/06/gu-carbon-fiber-chong-rung-dam-tay-lai-cho-ab-160-vario-160-products-2039.jpg",
    totalComments: 23,
    avgRating: 4.6,
  },
  {
    id: 2,
    productId: 102,
    productName: "Đèn led",
    imageUrl:
      "https://shop2banh.vn/images/thumbs/2023/06/gu-carbon-fiber-chong-rung-dam-tay-lai-cho-ab-160-vario-160-products-2039.jpg",
    totalComments: 10,
    avgRating: 3.2,
  },
  {
    id: 3,
    productId: 103,
    productName: "Kính chắn gió",
    imageUrl:
      "https://shop2banh.vn/images/thumbs/2023/06/gu-carbon-fiber-chong-rung-dam-tay-lai-cho-ab-160-vario-160-products-2039.jpg",
    totalComments: 0,
    avgRating: null,
  },
];

const CommentList = () => {
  const navigate = useNavigate();
  const [sortOption, setSortOption] = useState("default");
  const [searchText, setSearchText] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getFilteredData = () => {
    let filtered = [...mockComments];

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
      <CardHeader title={<Typography variant="h6" fontWeight={700}>💬 Quản lý bình luận sản phẩm</Typography>} />
      <CardContent>
        <Paper
          elevation={0}
          sx={{
            p: 2,
            mb: 3,
            display: "flex",
            gap: 2,
            flexWrap: "wrap",
            alignItems: "center",
            backgroundColor: "#f9f9f9",
            borderRadius: 2,
          }}
        >
          <Select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            size="small"
            displayEmpty
            sx={{ minWidth: 500, backgroundColor: "white" }}
          >
            <MenuItem value="default">🗂️ Mặc định</MenuItem>
            <MenuItem value="most-commented">💬 Bình luận nhiều nhất</MenuItem>
            <MenuItem value="highest-rating">⭐ Sao cao nhất</MenuItem>
            <MenuItem value="lowest-rating">⭐ Sao thấp nhất</MenuItem>
            <MenuItem value="az">🔤 Tên A-Z</MenuItem>
            <MenuItem value="za">🔡 Tên Z-A</MenuItem>
          </Select>

          <TextField
            placeholder="🔍 Tìm kiếm sản phẩm..."
            variant="outlined"
            size="small"
            sx={{ minWidth: 500, backgroundColor: "white" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </Paper>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Ảnh</TableCell>
              <TableCell>Sản phẩm</TableCell>
              <TableCell>Tổng bình luận</TableCell>
              <TableCell>Sao trung bình</TableCell>
              <TableCell>Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.length > 0 ? (
              paginatedData.map((item, index) => (
                <TableRow key={item.id} hover>
                  <TableCell>{page * rowsPerPage + index + 1}</TableCell>
                  <TableCell>
                    <img
                      src={item.imageUrl}
                      alt={item.productName}
                      width={80}
                      height={80}
                      style={{ borderRadius: 6, objectFit: "cover" }}
                    />
                  </TableCell>
                  <TableCell>
                    <Typography fontWeight={600}>{item.productName}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography fontWeight={600}>{item.totalComments}</Typography>
                  </TableCell>
                  <TableCell>
                    {item.avgRating !== null ? (
                      <Box display="flex" alignItems="center" gap={0.5}>
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
                        <Typography variant="body2">
                          ({item.avgRating.toFixed(1)})
                        </Typography>
                      </Box>
                    ) : (
                      <Typography variant="body2" color="text.secondary">
                        Chưa có
                      </Typography>
                    )}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      startIcon={<VisibilityIcon />}
                      onClick={() => navigate(`/comment/${item.productId}`)}
                    >
                      Xem chi tiết
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

        <TablePagination
          component="div"
          count={getFilteredData().length}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardContent>
    </Card>
  );
};

export default CommentList;
