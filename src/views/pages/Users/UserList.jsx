import { useState } from 'react';
import {
  Typography, Box,
  Table, TableBody, TableCell, TableHead, TableRow,
  TextField, Select, MenuItem, InputAdornment,
  FormControl, InputLabel, IconButton, Menu, MenuItem as MuiMenuItem, Chip
} from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import LockResetIcon from '@mui/icons-material/LockReset';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DashboardCard from '../../../components/shared/DashboardCard';
import ResetPasswordDialog from '../../../components/Dialog/ResetPasswordDialog';
import UpdateStatusDialog from '../../../components/Dialog/UpdateStatusDialog';

const users = [
  {
    id: "1",
    avatar: "https://randomuser.me/api/portraits/men/11.jpg",
    name: "Đặng Tiến Hoàng",
    email: "virussofficial@gmail.com",
    phone: "+8401433222",
    gender: "Nam",
    birthday: "10/10/1988",
    status: "0",
  },
  {
    id: "2",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Nguyễn Thị Mai",
    email: "mainguyen@gmail.com",
    phone: "+840912345678",
    gender: "Nữ",
    birthday: "02/06/1995",
    status: "1",
  },
  {
    id: "3",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Phạm Văn Dũng",
    email: "dungpham@example.com",
    phone: "+840912348888",
    gender: "Nam",
    birthday: "11/11/1990",
    status: "1",
  },
  {
    id: "4",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Trần Lệ Hằng",
    email: "hangtran@gmail.com",
    phone: "+840934567899",
    gender: "Nữ",
    birthday: "18/09/1987",
    status: "0",
  },
  {
    id: "5",
    avatar: "https://randomuser.me/api/portraits/men/21.jpg",
    name: "Lê Trung Hiếu",
    email: "hieule@gmail.com",
    phone: "+840912889922",
    gender: "Nam",
    birthday: "24/12/1992",
    status: "1",
  },
  {
    id: "6",
    avatar: "https://randomuser.me/api/portraits/women/52.jpg",
    name: "Vũ Quỳnh Như",
    email: "quynhnhu@example.com",
    phone: "+840901122233",
    gender: "Nữ",
    birthday: "15/03/1996",
    status: "0",
  },
  {
    id: "7",
    avatar: "https://randomuser.me/api/portraits/men/77.jpg",
    name: "Ngô Minh Nhật",
    email: "nhatngo@gmail.com",
    phone: "+840987654321",
    gender: "Nam",
    birthday: "05/05/1991",
    status: "1",
  },
  {
    id: "8",
    avatar: "https://randomuser.me/api/portraits/women/23.jpg",
    name: "Lâm Thảo Vy",
    email: "vy.lam@example.com",
    phone: "+840934567800",
    gender: "Nữ",
    birthday: "29/01/1994",
    status: "1",
  },
  {
    id: "9",
    avatar: "https://randomuser.me/api/portraits/men/48.jpg",
    name: "Hoàng Mạnh Cường",
    email: "cuonghm@gmail.com",
    phone: "+840932221133",
    gender: "Nam",
    birthday: "17/07/1985",
    status: "0",
  },
  {
    id: "10",
    avatar: "https://randomuser.me/api/portraits/women/80.jpg",
    name: "Phan Ngọc Diễm",
    email: "diemphan@example.com",
    phone: "+840977665544",
    gender: "Nữ",
    birthday: "30/10/1997",
    status: "1",
  },
];


const UserList = () => {
  const [searchKeyWord, setSearchKeyWord] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [filterGender, setFilterGender] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [openResetDialog, setOpenResetDialog] = useState(false);
  const [openStatusDialog, setOpenStatusDialog] = useState(false);
  const [newStatus, setNewStatus] = useState("");

  const open = Boolean(anchorEl);

  const [page] = useState(0);
  const [rowsPerPage] = useState(5);

  const handleMenuClick = (event, user) => {
    setAnchorEl(event.currentTarget);
    setSelectedUser(user);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const filteredUsers = users.filter((user) =>
    (user.name.toLowerCase().includes(searchKeyWord.toLowerCase()) ||
      user.email.toLowerCase().includes(searchKeyWord.toLowerCase()) ||
      user.phone.toLowerCase().includes(searchKeyWord.toLowerCase())) &&
    (filterStatus === "" || user.status === filterStatus) &&
    (filterGender === "" || user.gender === filterGender)
  );

  const paginatedUsers = filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  return (
    <DashboardCard title="Danh sách người dùng">
      <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 2, flexWrap: "wrap" }}>
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
          <Select value={filterStatus} label="Trạng thái" onChange={(e) => setFilterStatus(e.target.value)}>
            <MenuItem value="">Tất cả</MenuItem>
            <MenuItem value="1">Hoạt động</MenuItem>
            <MenuItem value="0">Tạm ngưng</MenuItem>
          </Select>
        </FormControl>

        <FormControl size="small" sx={{ minWidth: 140 }}>
          <InputLabel>Giới tính</InputLabel>
          <Select value={filterGender} label="Giới tính" onChange={(e) => setFilterGender(e.target.value)}>
            <MenuItem value="">Tất cả</MenuItem>
            <MenuItem value="Nam">Nam</MenuItem>
            <MenuItem value="Nữ">Nữ</MenuItem>
            <MenuItem value="Khác">Khác</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
        <Table sx={{ whiteSpace: "nowrap", mt: 2 }}>
          <TableHead>
            <TableRow>
              <TableCell align="center"><Typography fontWeight={600}>STT</Typography></TableCell>
              <TableCell><Typography fontWeight={600}>Ảnh đại diện</Typography></TableCell>
              <TableCell><Typography fontWeight={600}>Họ và tên</Typography></TableCell>
              <TableCell><Typography fontWeight={600}>Email</Typography></TableCell>
              <TableCell><Typography fontWeight={600}>Số điện thoại</Typography></TableCell>
              <TableCell><Typography fontWeight={600}>Giới tính</Typography></TableCell>
              <TableCell><Typography fontWeight={600}>Ngày Sinh</Typography></TableCell>
              <TableCell><Typography fontWeight={600}>Trạng thái</Typography></TableCell>
              <TableCell><Typography fontWeight={600}>Hành động</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedUsers.length === 0 ? (
              <TableRow>
                <TableCell colSpan={9} align="center">
                  <Typography color="text.secondary" mt={2}>Không tìm thấy nội dung phù hợp</Typography>
                </TableCell>
              </TableRow>
            ) : (
              paginatedUsers.map((user, index) => (
                <TableRow key={user.id}>
                  <TableCell align="center">
                    <Typography fontSize={15} fontWeight={500}>{page * rowsPerPage + index + 1}</Typography>
                  </TableCell>
                  <TableCell>
                    <img src={user.avatar} alt="avatar" style={{ width: 50, height: 50, borderRadius: 8, objectFit: "cover" }} />
                  </TableCell>
                  <TableCell><Typography fontWeight={600}>{user.name}</Typography></TableCell>
                  <TableCell><Typography color="text.secondary">{user.email}</Typography></TableCell>
                  <TableCell><Typography color="text.secondary">{user.phone}</Typography></TableCell>
                  <TableCell><Typography color="text.secondary">{user.gender}</Typography></TableCell>
                  <TableCell><Typography color="text.secondary">{user.birthday}</Typography></TableCell>
                  <TableCell>
                    <Chip
                      label={user.status === "1" ? "Hoạt động" : "Tạm ngưng"}
                      sx={{
                        bgcolor: user.status === "1" ? "#d0f2df" : "#fdecea",
                        color: user.status === "1" ? "#2e7d32" : "#d32f2f",
                        fontWeight: 600
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={(e) => handleMenuClick(e, user)}>
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
            <Typography fontSize="18px" color="text.secondary">❮</Typography>
          </IconButton>

          {[1, 2, 3, 4, 5].map((num) => (
            <Box
              key={num}
              width={36}
              height={36}
              display="flex"
              alignItems="center"
              justifyContent="center"
              borderRadius="50%"
              bgcolor={num === 1 ? "primary.main" : "transparent"}
              color={num === 1 ? "#fff" : "text.primary"}
              sx={{
                cursor: "pointer",
                transition: "all 0.2s",
                "&:hover": {
                  bgcolor: num === 1 ? "primary.main" : "grey.100",
                },
              }}
            >
              <Typography fontSize="14px" fontWeight="bold">
                {num}
              </Typography>
            </Box>
          ))}

          <IconButton>
            <Typography fontSize="18px" color="text.secondary">❯</Typography>
          </IconButton>
        </Box>
      </Box>

      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MuiMenuItem onClick={() => { setOpenResetDialog(true); handleClose(); }}>
          <LockResetIcon fontSize="small" sx={{ mr: 1 }} />
          Cấp lại mật khẩu
        </MuiMenuItem>
        <MuiMenuItem onClick={() => { setOpenStatusDialog(true); setNewStatus(selectedUser?.status); handleClose(); }}>
          <EditIcon fontSize="small" sx={{ mr: 1 }} />
          Cập nhật trạng thái
        </MuiMenuItem>
        <MuiMenuItem onClick={() => { handleClose(); alert("Xóa người dùng") }}>
          <DeleteIcon fontSize="small" sx={{ mr: 1 }} />
          Xóa
        </MuiMenuItem>
      </Menu>

      <ResetPasswordDialog
        open={openResetDialog}
        onClose={() => setOpenResetDialog(false)}
        onConfirm={() => {
          alert(`✅ Mật khẩu mới đã được gửi cho ${selectedUser?.email}`);
          setOpenResetDialog(false);
        }}
        user={selectedUser}
      />

      <UpdateStatusDialog
        open={openStatusDialog}
        onClose={() => setOpenStatusDialog(false)}
        onConfirm={() => {
          alert(`✅ Trạng thái của ${selectedUser?.name} đã được cập nhật`);
          setOpenStatusDialog(false);
        }}
        user={selectedUser}
        newStatus={newStatus}
        setNewStatus={setNewStatus}
      />
    </DashboardCard>
  );
};

export default UserList;