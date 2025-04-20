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
import { toast } from "react-toastify";
import PaginationComponent from "../../../components/Pagination";

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
      toast.success("Mật khẩu mới đã được gửi qua email");
      setOpenResetDialog(false);
    } catch (err) {
      toast.error("Gửi mật khẩu thất bại");
    }
  };

  const handleUpdateStatus = async (reason) => {
    try {
      await updateUserStatus(selectedUser.id, {
        status: newStatus,
        reason, 
      });
      toast.success("Cập nhật trạng thái thành công");
      setOpenStatusDialog(false);
      fetchUsers();
    } catch (err) {
      toast.error("Cập nhật thất bại");
    }
  };
  

  return (
    <DashboardCard title="Danh sách người dùng">
      <Box>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">STT</TableCell>
              <TableCell align="center">Ảnh đại diện</TableCell>
              <TableCell align="center">Họ và tên</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Trạng thái</TableCell>
              <TableCell align="center">Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <TableRow key={user.id}>
                <TableCell align="center">{(page - 1) * rowsPerPage + index + 1}</TableCell>
                <TableCell align="center">
                  <Box display="flex" justifyContent="center">
                    <img
                      src={
                        user.avatar
                          ? `http://localhost:3001/uploads/${user.avatar}`
                          : "https://media.istockphoto.com/id/1223671392/vi/vec-to/%E1%BA%A3nh-h%E1%BB%93-s%C6%A1-m%E1%BA%B7c-%C4%91%E1%BB%8Bnh-h%C3%ACnh-%C4%91%E1%BA%A1i-di%E1%BB%87n-ch%E1%BB%97-d%C3%A0nh-s%E1%BA%B5n-cho-%E1%BA%A3nh-minh-h%E1%BB%8Da-vect%C6%A1.jpg?s=612x612&w=0&k=20&c=l9x3h9RMD16-z4kNjo3z7DXVEORzkxKCMn2IVwn9liI="
                      }
                      alt="avatar"
                      style={{ width: 50, height: 50, borderRadius: 8, objectFit: "cover" }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://media.istockphoto.com/id/1223671392/vi/vec-to/%E1%BA%A3nh-h%E1%BB%93-s%C6%A1-m%E1%BA%B7c-%C4%91%E1%BB%8Bnh-h%C3%ACnh-%C4%91%E1%BA%A1i-di%E1%BB%87n-ch%E1%BB%97-d%C3%A0nh-s%E1%BA%B5n-cho-%E1%BA%A3nh-minh-h%E1%BB%8Da-vect%C6%A1.jpg?s=612x612&w=0&k=20&c=l9x3h9RMD16-z4kNjo3z7DXVEORzkxKCMn2IVwn9liI=";
                      }}
                    />
                  </Box>
                </TableCell>
                <TableCell align="center">
                  <Typography fontWeight={600}>
                    {user.name?.trim() ? user.name : "-"}
                  </Typography>
                </TableCell>
                <TableCell>{user.email}</TableCell>
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
                <TableCell align="center">
                  <IconButton onClick={(e) => handleMenuClick(e, user)}>
                    <MoreVertIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        

<Box display="flex" justifyContent="center" mt={3}>
  <PaginationComponent
    totalPages={totalPages}
    currentPage={page}
    onChange={(value) => setPage(value)}
  />
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
      </Box>
    </DashboardCard>
  );
};

export default UserList;