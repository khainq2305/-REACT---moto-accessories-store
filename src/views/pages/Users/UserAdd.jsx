"use client";

import { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useDropzone } from "react-dropzone";
import { toast } from "react-toastify";
import { createUser } from "../../../services/userServices";
import { useNavigate } from "react-router-dom";

const AddUserForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    gender: "",
    dob: "",
    role: "0", // luôn là người dùng
    status: "1",
  });

  const [avatar, setAvatar] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: { "image/*": [] },
    onDrop: (acceptedFiles) => {
      setAvatar(acceptedFiles[0]);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    const { email, password, dob } = formData;
    const validationErrors = {};

    // Validate email
    if (!email?.trim()) validationErrors.email = "Email không được bỏ trống";
    else if (!/^\S+@\S+\.\S+$/.test(email)) validationErrors.email = "Email không hợp lệ";

    // Validate password
    if (!password) validationErrors.password = "Mật khẩu không được bỏ trống";
    else if (password.length < 6) validationErrors.password = "Mật khẩu phải từ 6 ký tự trở lên";

    // Validate ngày sinh nếu có
    if (dob) {

      const today = new Date();
      const age = today.getFullYear() - dobDate.getFullYear();
      const monthDiff = today.getMonth() - dobDate.getMonth();

      if (dobDate > today) {
        validationErrors.dob = "Ngày sinh không được lớn hơn hiện tại";
      } else if (age < 10 || (age === 10 && monthDiff < 0)) {
        validationErrors.dob = "Người dùng phải từ 10 tuổi trở lên";
      }
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const data = new FormData();
    for (const key in formData) data.append(key, formData[key]);
    if (avatar) data.append("avatar", avatar);

    try {
      await createUser(data);
      toast.success("✨ Thêm người dùng thành công!");
      navigate("/admin/users/userlist");
      setFormData({
        name: "",
        email: "",
        password: "",
        phone: "",
        gender: "",
        dob: "",
        role: "0",
        status: "1",
      });
      setAvatar(null);
    } catch (err) {
      console.log("🧨 Error khi tạo user:", err);
      if (err.response?.status === 400 && err.response.data.errors) {
        setErrors(err.response.data.errors);
      } else {
        toast.error("❌ Có lỗi xảy ra. Vui lòng thử lại!");
      }
    }
  };

  return (
    <Card variant="outlined" sx={{ p: 0 }}>
      <Box sx={{ padding: "15px 30px" }} display="flex" alignItems="center">
        <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
          Thêm Người Dùng
        </Typography>
      </Box>
      <Divider />
      <CardContent sx={{ padding: "30px" }}>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Họ và tên"
                name="name"
                value={formData.name}
                onChange={handleChange}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                fullWidth
                error={!!errors.email}
                helperText={errors.email}
                sx={{ mb: 2 }}
              />
              <TextField
                label="Số điện thoại"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                fullWidth
                sx={{ mb: 2 }}
              />
              <TextField
                label="Mật khẩu"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                fullWidth
                error={!!errors.password}
                helperText={errors.password}
                sx={{ mb: 2 }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <FormControl sx={{ mb: 2 }}>
                <Typography mb={1} fontWeight={500}>
                  Giới tính
                </Typography>
                <RadioGroup
                  row
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <FormControlLabel value="male" control={<Radio />} label="Nam" />
                  <FormControlLabel value="female" control={<Radio />} label="Nữ" />
                  <FormControlLabel value="other" control={<Radio />} label="Khác" />
                </RadioGroup>
              </FormControl>

              <TextField
                label="Ngày sinh"
                name="dob"
                type="date"
                value={formData.dob}
                onChange={handleChange}
                fullWidth
                InputLabelProps={{ shrink: true }}
                error={!!errors.dob}
                helperText={errors.dob}
                sx={{ mb: 2 }}
              />

              <FormControl component="fieldset" sx={{ mb: 2 }}>
                <Typography fontWeight={500}>Trạng thái</Typography>
                <RadioGroup
                  row
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <FormControlLabel value="1" control={<Radio />} label="Hoạt động" />
                  <FormControlLabel value="0" control={<Radio />} label="Không hoạt động" />
                </RadioGroup>
              </FormControl>

              <Typography fontWeight={500} mb={1}>
                Ảnh đại diện
              </Typography>
              <Box
                {...getRootProps()}
                sx={{
                  border: "2px dashed #3f51b5",
                  height: 150,
                  p: 2,
                  borderRadius: 2,
                  backgroundColor: "#f8f9ff",
                  cursor: "pointer",
                  textAlign: "center",
                  mb: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <input {...getInputProps()} />
                <Typography>
                  {isDragActive
                    ? "Kéo vào đây..."
                    : "Kéo/thả tệp vào đây hoặc nhấn để chọn"}
                </Typography>
              </Box>

              {avatar && (
                <>
                  <Typography variant="body2" color="text.secondary">
                    Đã chọn: {avatar.name}
                  </Typography>
                  <Box mt={1}>
                    <img
                      src={URL.createObjectURL(avatar)}
                      alt="preview"
                      style={{
                        width: 100,
                        height: 100,
                        borderRadius: 8,
                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </>
              )}
            </Grid>
          </Grid>

          <Box mt={4}>
            <Button type="submit" color="primary" variant="contained">
              Thêm Người Dùng
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddUserForm;
