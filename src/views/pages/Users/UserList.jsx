import { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Select,
  MenuItem,
  InputAdornment,
  FormControl,
  InputLabel,
  IconButton,
  Menu,
  MenuItem as MuiMenuItem,
  Chip,
  Button,
} from "@mui/material";
import { Tooltip } from "@mui/material";
import React from "react";

import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LockResetIcon from "@mui/icons-material/LockReset";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "react-toastify";

import DashboardCard from "../../../components/shared/DashboardCard";
import ResetPasswordDialog from "../../../components/Dialog/ResetPasswordDialog";
import UpdateStatusDialog from "../../../components/Dialog/UpdateStatusDialog";
import {
  getUsers,
  resetUserPassword,
  updateUserStatus,
} from "../../../services/userServices";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const [filterRole, setFilterRole] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openResetDialog, setOpenResetDialog] = useState(false);
  const [openStatusDialog, setOpenStatusDialog] = useState(false);
  const [newStatus, setNewStatus] = useState("");
  const [expandedRow, setExpandedRow] = useState(null);
  const [page, setPage] = useState(1);
  const [rowsPerPage] = useState(5);
  const [totalPages, setTotalPages] = useState(1);

  const open = Boolean(anchorEl);

  const fetchUsers = async () => {
    try {
      const response = await getUsers({
        search: searchKeyWord,
        status: filterStatus,
        gender: filterGender.toLowerCase(),
        role: filterRole,
        page,
        limit: rowsPerPage,
      });
      setUsers(response.data.data || []);
      setTotalPages(response.data.totalPages || 1);
    } catch (error) {
      console.error("❌ Lỗi khi lấy danh sách người dùng:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [searchKeyWord, filterStatus, filterGender, filterRole, page]);

  const handleMenuClick = (event, user) => {
    setAnchorEl(event.currentTarget);
    setSelectedUser(user);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleResetPassword = async () => {
    try {
      await resetUserPassword(selectedUser.id);
      toast.success("✅ Mật khẩu mới đã được gửi qua email");
      setOpenResetDialog(false);
    } catch (err) {
      toast.error("❌ Gửi mật khẩu thất bại");
    }
  };

  const handleUpdateStatus = async () => {
    try {
      await updateUserStatus(selectedUser.id, newStatus);
      toast.success("✅ Cập nhật trạng thái thành công");
      setOpenStatusDialog(false);
      fetchUsers();
    } catch (err) {
      toast.error("❌ Cập nhật thất bại");
    }
  };

  return (
    <DashboardCard title="Danh sách người dùng">
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
          mb: 2,
          flexWrap: "wrap",
        }}
      >
        <TextField
          sx={{ flex: 2, minWidth: 250 }}
          placeholder="Tìm kiếm người dùng"
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

        <FormControl size="small" sx={{ minWidth: 140 }}>
          <InputLabel>Trạng thái</InputLabel>
          <Select
            value={filterStatus}
            label="Trạng thái"
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <MenuItem value="">Tất cả</MenuItem>
            <MenuItem value="1">Hoạt động</MenuItem>
            <MenuItem value="0">Tạm ngưng</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: 140 }}>
          <InputLabel>Giới tính</InputLabel>
          <Select
            value={filterGender}
            label="Giới tính"
            onChange={(e) => setFilterGender(e.target.value)}
          >
            <MenuItem value="">Tất cả</MenuItem>
            <MenuItem value="male">Nam</MenuItem>
            <MenuItem value="female">Nữ</MenuItem>
            <MenuItem value="other">Khác</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: 140 }}>
          <InputLabel>Vai trò</InputLabel>
          <Select
            value={filterRole}
            label="Vai trò"
            onChange={(e) => setFilterRole(e.target.value)}
          >
            <MenuItem value="">Tất cả</MenuItem>
            <MenuItem value="1">Admin</MenuItem>
            <MenuItem value="0">Người dùng</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box
        sx={{
          width: "100%",
          overflowX: "auto",
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
        }}
      >
        <Table
          sx={{
            minWidth: 1200,
            whiteSpace: "nowrap",
            mt: 2,
            tableLayout: "auto",
          }}
        >
          <TableHead>
            <TableRow>
              <TableCell align="center">
                <Typography fontWeight={600}>STT</Typography>
              </TableCell>
              <TableCell>
                <Typography fontWeight={600}>Ảnh đại diện</Typography>
              </TableCell>
              <TableCell>
                <Typography fontWeight={600}>Họ và tên</Typography>
              </TableCell>
              <TableCell>
                <Typography fontWeight={600}>Email</Typography>
              </TableCell>
              <TableCell>
                <Typography fontWeight={600}>Trạng thái</Typography>
              </TableCell>
              <TableCell>
                <Typography fontWeight={600}>Hành động</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.length === 0 ? (
              <TableRow>
                <TableCell colSpan={10} align="center">
                  <Typography color="text.secondary" mt={2}>
                    Không tìm thấy nội dung phù hợp
                  </Typography>
                </TableCell>
              </TableRow>
            ) : (
              users.map((user, index) => (
                <React.Fragment key={user.id}>
                  <TableRow>
                    <TableCell align="center">
                      <Typography fontSize={15} fontWeight={500}>
                        {(page - 1) * rowsPerPage + index + 1}
                      </Typography>
                    </TableCell>

                    <TableCell>
                      <img
                        src={`http://localhost:3000/uploads/${user.avatar}`}
                        alt="avatar"
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: 8,
                          objectFit: "cover",
                        }}
                      />
                    </TableCell>

                    <TableCell sx={{ maxWidth: 140, p: 1 }}>
                      <Tooltip
                        title={user.name}
                        placement="top"
                        arrow
                        disableInteractive
                        PopperProps={{
                          modifiers: [
                            { name: "offset", options: { offset: [0, 6] } },
                          ],
                        }}
                        componentsProps={{
                          tooltip: {
                            sx: {
                              bgcolor: "#333",
                              color: "#fff",
                              fontSize: "0.875rem",
                              fontWeight: 500,
                              px: 1.5,
                              py: 0.5,
                              borderRadius: 1,
                            },
                          },
                        }}
                      >
                        <Typography
                          fontWeight={600}
                          sx={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            maxWidth: 140,
                            display: "block",
                            cursor: "default",
                          }}
                        >
                          {user.name}
                        </Typography>
                      </Tooltip>
                    </TableCell>

                    <TableCell
                      sx={{
                        maxWidth: 180,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      <Tooltip
                        title={user.email}
                        placement="top"
                        arrow
                        disableInteractive
                        PopperProps={{
                          modifiers: [
                            {
                              name: "offset",
                              options: {
                                offset: [0, 6],
                              },
                            },
                          ],
                        }}
                        componentsProps={{
                          tooltip: {
                            sx: {
                              bgcolor: "#333",
                              color: "#fff",
                              fontSize: "0.875rem",
                              fontWeight: 500,
                              px: 1.5,
                              py: 0.5,
                              borderRadius: 1,
                            },
                          },
                          
                        }}
                      >
                        <Typography
                          variant="body2"
                          sx={{
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "block",
                            cursor: "default",
                            maxWidth: 180, 
                          }}
                        >
                          {user.email}
                        </Typography>
                      </Tooltip>
                    </TableCell>

                    <TableCell>
                      <Chip
                        label={user.status === 1 ? "Hoạt động" : "Tạm ngưng"}
                        sx={{
                          bgcolor: user.status === 1 ? "#d0f2df" : "#fdecea",
                          color: user.status === 1 ? "#2e7d32" : "#d32f2f",
                          fontWeight: 600,
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Box display="flex" gap={1} alignItems="center">
                        <IconButton onClick={(e) => handleMenuClick(e, user)}>
                          <MoreVertIcon />
                        </IconButton>
                        <Button
                          size="small"
                          onClick={() =>
                            setExpandedRow(
                              expandedRow === user.id ? null : user.id
                            )
                          }
                        >
                          {expandedRow === user.id ? "Ẩn" : "Chi tiết"}
                        </Button>
                      </Box>
                    </TableCell>
                  </TableRow>

                  {expandedRow === user.id && (
                    <TableRow>
                      <TableCell colSpan={10}>
                        <Box p={2} bgcolor="#f9f9f9" borderRadius={2}>
                          <Typography
                            variant="subtitle1"
                            fontWeight={600}
                            mb={2}
                          >
                            Thông tin bổ sung
                          </Typography>
                          <Box
                            component="dl"
                            display="grid"
                            gridTemplateColumns={{
                              xs: "1fr",
                              sm: "repeat(2, 1fr)",
                              md: "repeat(2, 1fr)",
                            }}
                            gap={2}
                          >
                            <Box>
                              <Typography
                                variant="subtitle2"
                                component="dt"
                                fontWeight={500}
                              >
                                Giới tính:
                              </Typography>
                              <Typography variant="body2" component="dd">
                                {user.gender}
                              </Typography>
                            </Box>
                            <Box>
                              <Typography
                                variant="subtitle2"
                                component="dt"
                                fontWeight={500}
                              >
                                Ngày sinh:
                              </Typography>
                              <Typography variant="body2" component="dd">
                                {user.dob}
                              </Typography>
                            </Box>
                            <Box>
                              <Typography
                                variant="subtitle2"
                                component="dt"
                                fontWeight={500}
                              >
                                Số điện thoại:
                              </Typography>
                              <Typography variant="body2" component="dd">
                                {user.phone}
                              </Typography>
                            </Box>
                            <Box>
                              <Typography
                                variant="subtitle2"
                                component="dt"
                                fontWeight={500}
                              >
                                Vai trò:
                              </Typography>
                              <Typography variant="body2" component="dd">
                                {user.role === 1 ? "Admin" : "Người dùng"}
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </TableCell>
                    </TableRow>
                  )}
                </React.Fragment>
              ))
            )}
          </TableBody>
        </Table>

        <Box display="flex" justifyContent="center" gap={2} mt={4}>
          <IconButton disabled={page === 1} onClick={() => setPage(page - 1)}>
            <Typography fontSize="18px" color="text.secondary">
              ❮
            </Typography>
          </IconButton>
          {[...Array(totalPages)].map((_, i) => (
            <Box
              key={i + 1}
              width={36}
              height={36}
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="50%"
              bgcolor={page === i + 1 ? "primary.main" : "transparent"}
              color={page === i + 1 ? "#fff" : "text.primary"}
              sx={{
                cursor: "pointer",
                transition: "all 0.2s",
                "&:hover": {
                  bgcolor: page === i + 1 ? "primary.main" : "grey.100",
                },
              }}
              onClick={() => setPage(i + 1)}
            >
              <Typography fontSize="14px" fontWeight="bold">
                {i + 1}
              </Typography>
            </Box>
          ))}
          <IconButton
            disabled={page === totalPages}
            onClick={() => setPage(page + 1)}
          >
            <Typography fontSize="18px" color="text.secondary">
              ❯
            </Typography>
          </IconButton>
        </Box>
      </Box>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MuiMenuItem
          onClick={() => {
            setOpenResetDialog(true);
            handleClose();
          }}
        >
          <LockResetIcon fontSize="small" sx={{ mr: 1 }} /> Cấp lại mật khẩu
        </MuiMenuItem>
        <MuiMenuItem
          onClick={() => {
            setOpenStatusDialog(true);
            setNewStatus(selectedUser?.status);
            handleClose();
          }}
        >
          <EditIcon fontSize="small" sx={{ mr: 1 }} /> Cập nhật trạng thái
        </MuiMenuItem>
      </Menu>

      <ResetPasswordDialog
        open={openResetDialog}
        onClose={() => setOpenResetDialog(false)}
        onConfirm={handleResetPassword}
        user={selectedUser}
      />

      <UpdateStatusDialog
        open={openStatusDialog}
        onClose={() => setOpenStatusDialog(false)}
        onConfirm={handleUpdateStatus}
        user={selectedUser}
        newStatus={newStatus}
        setNewStatus={setNewStatus}
      />
    </DashboardCard>
  );
};

export default UserList;
