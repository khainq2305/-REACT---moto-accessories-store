import React, { useState } from 'react';
import {
    Typography, Box,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
    Chip, Select, MenuItem,
    InputAdornment,
    FormControl,
    InputLabel
} from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import DashboardCard from '../../../components/shared/DashboardCard';
// Removed unused import: width from '@mui/system'

const users = [
    {
        id: "1",
        avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_P9c3zajEB1NI5NxBTuscNBvd-rlBSVZh018lHk6ta0bqjVa2_QR2ZmkAydDmqxnT7K8&usqp=CAU",
        name: "Đặng Tiến Hoàng",
        email: "virussofficial@gmail.com",
        phone: "+8401433222",
        gender: "Nam",
        birthday: "10/10/1988",
        status: "0",
    },
];

const UserList = () => {
    const [searchKeyWord, setSearchKeyWord] = useState("");
    const [filterStatus, setFilterStatus] = useState("")
    const [month, setMonth] = useState('1');

    const handleChange = (event) => {
        setMonth(event.target.value);
    };


    const filteredUsers = users.filter((user) =>
        (user.name.toLowerCase().includes(searchKeyWord.toLowerCase()) ||
            user.email.toLowerCase().includes(searchKeyWord.toLowerCase()) ||
            user.phone.toLowerCase().includes(searchKeyWord.toLowerCase())) &&
        (filterStatus === "" || user.status === filterStatus)
    );


    return (
        <DashboardCard title="Danh sách người dùng" action={
            <Select
                labelId="month-dd"
                id="month-dd"
                value={month}
                size="small"
                onChange={handleChange}
            >
                <MenuItem value={1}>March 2025</MenuItem>
                <MenuItem value={2}>April 2025</MenuItem>
                <MenuItem value={3}>May 2025</MenuItem>
            </Select>
        }>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 2 }}>

                <TextField
                    sx={{ width: "30%" }}
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


                <FormControl size="small" sx={{ minWidth: 150 }}>
                    <InputLabel id="status-select-label">Trạng thái</InputLabel>
                    <Select
                        labelId="status-select-label"
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                    >
                        <MenuItem value="">Tất cả</MenuItem>
                        <MenuItem value="1">Hoạt động</MenuItem>
                        <MenuItem value="0">Không hoạt động</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Box sx={{ overflow: 'auto', width: { xs: '280px', sm: 'auto' } }}>
                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2
                    }}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Id
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Ảnh đại diện
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Họ và tên
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Email
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Số điện thoại
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Giới tính
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Ngày Sinh
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Trạng thái
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredUsers.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={8} align="center">
                                    <Typography sx={{ color: "text.secondary", mt: 2 }}>
                                        Không tìm thấy nội dung phù hợp
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ) : (
                            filteredUsers.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell>
                                        <Typography sx={{ fontSize: "15px", fontWeight: "500" }}>
                                            {user.id}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <img
                                            src={user.avatar || "/placeholder.svg"}
                                            alt="User Avatar"
                                            style={{ width: "50px", height: "50px", objectFit: "cover", borderRadius: "5px" }}
                                        />
                                    </TableCell>
                                    <TableCell>
                                        <Typography variant="subtitle2" fontWeight={600}>
                                            {user.name}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                            {user.email}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                            {user.phone}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                            {user.gender}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                            {user.birthday}
                                        </Typography>
                                    </TableCell>
                                    <TableCell align="right">
                                        <Typography
                                            sx={{ color: user.status === "1" ? "success.main" : "error.main" }}
                                            variant="subtitle2"
                                            fontWeight={400}
                                        >
                                            {user.status === "1" ? "Hoạt động" : "Không hoạt động"}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
};

export default UserList;