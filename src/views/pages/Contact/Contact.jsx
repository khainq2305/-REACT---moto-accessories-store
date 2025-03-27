import React, { useState } from "react";
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
    Checkbox,
    InputLabel,
    Select,
    MenuItem,
    TextField,
    InputAdornment
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import DashboardCard from "../../../components/shared/DashboardCard";

const data = [
    {
        id: "1",
        name: "Đặng Tiến Hoàng",
        email: "virussofficial@gmail.com",
        phone: "+8401433222",
        content: "Nam",
        status: "1",
    },
];

function Contact() {
    const [openContent, setOpenContent] = useState(false);
    const [openAction, setOpenAction] = useState(false);
    const [checked, setChecked] = useState(false);
    const [searchKeyWord, setSearchKeyWord] = useState("");
    const [filterStatus, setFilterStatus] = useState(""); // Mặc định là "Tất cả"

    // Xử lý khi bấm vào checkbox
    const handleChangeStatus = (event) => {
        setChecked(event.target.checked);
        setOpenAction(true);
    };

    const handleConfirmAction = () => {
        setChecked(true);
        setOpenAction(false);
    };

    const handleCancelAction = () => {
        setChecked(false);
        setOpenAction(false);
    };

    // Lọc dữ liệu theo từ khóa tìm kiếm & trạng thái
    const filtereddatas = data.filter((item) =>
        (item.name.toLowerCase().includes(searchKeyWord.toLowerCase()) ||
            item.email.toLowerCase().includes(searchKeyWord.toLowerCase()) ||
            item.phone.toLowerCase().includes(searchKeyWord.toLowerCase())) &&
        (filterStatus === "" || item.status === filterStatus) // "" nghĩa là hiển thị tất cả
    );

    return (
        <DashboardCard title="Danh sách liên hệ">
            <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 2 }}>
                {/* Ô tìm kiếm */}
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

                {/* Bộ lọc trạng thái */}
                <FormControl size="small" sx={{ minWidth: 150 }}>
                    <InputLabel id="status-select-label">Trạng thái</InputLabel>
                    <Select
                        labelId="status-select-label"
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                    >
                        <MenuItem value="">Tất cả</MenuItem>
                        <MenuItem value="1">Đã phản hồi</MenuItem>
                        <MenuItem value="0">Chưa phản hồi</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            <Box sx={{ overflow: "auto", width: { xs: "280px", sm: "auto" } }}>


                <Table
                    aria-label="simple table"
                    sx={{
                        whiteSpace: "nowrap",
                        mt: 2,
                    }}
                >
                    <TableHead>
                        <TableRow>
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
                                    Nội dung
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Trạng thái
                                </Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="subtitle2" fontWeight={600}>
                                    Hành động
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filtereddatas.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={8} align="center">
                                    <Typography sx={{ color: "text.secondary", mt: 2 }}>
                                        Không tìm thấy nội dung phù hợp
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        ) : (filtereddatas.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell>
                                    <Typography variant="subtitle2" fontWeight={600}>
                                        {item.name}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {item.email}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Typography color="textSecondary" variant="subtitle2" fontWeight={400}>
                                        {item.phone}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <Button
                                        size="small"
                                        variant="contained"
                                        onClick={() => setOpenContent(true)}
                                    >
                                        Xem chi tiết
                                    </Button>
                                    <Modal open={openContent} onClose={() => setOpenContent(false)}>
                                        <Box
                                            sx={{
                                                position: "absolute",
                                                top: "50%",
                                                left: "50%",
                                                transform: "translate(-50%, -50%)",
                                                width: 400,
                                                bgcolor: "background.paper",
                                                boxShadow: 24,
                                                p: 2,
                                                borderRadius: 2,
                                            }}
                                        >
                                            <Typography variant="h6" component="h2">
                                                Nội dung chi tiết
                                            </Typography>

                                            <Typography sx={{ mt: 2 }}>
                                                Sản phẩm rất tốt, tôi sẽ không mua nữa
                                            </Typography>

                                            <Box sx={{ mt: 4, display: "flex", justifyContent: "flex-end" }}>
                                                <Button variant="contained" color="error" onClick={() => setOpenContent(false)}>
                                                    Đóng
                                                </Button>
                                            </Box>
                                        </Box>
                                    </Modal>
                                </TableCell>
                                <TableCell>
                                    <Typography
                                        sx={{
                                            color: item.status === "1" ? "success.main" : "error.main",
                                            fontWeight: "medium",
                                        }}
                                    >
                                        {item.status === "1" ? "Đã phản hồi" : "Chưa phản hồi"}
                                    </Typography>
                                </TableCell>
                                <TableCell>
                                    <FormControl component="fieldset">
                                        <Checkbox checked={checked} onChange={handleChangeStatus} />
                                    </FormControl>
                                </TableCell>

                                {/* Dialog xác nhận */}
                                <Dialog open={openAction} onClose={handleCancelAction}>
                                    <DialogTitle>Xác nhận</DialogTitle>
                                    <DialogContent>Bạn đã phản hồi thành công!</DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleCancelAction} color="error">
                                            Hủy
                                        </Button>
                                        <Button onClick={handleConfirmAction} color="primary" autoFocus>
                                            Xác nhận
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </TableRow>
                        )))}
                    </TableBody>
                </Table>
            </Box>
        </DashboardCard>
    );
}

export default Contact;
