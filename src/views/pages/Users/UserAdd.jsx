"use client"

import { useState } from "react"
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,

  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography
} from "@mui/material"
import { useDropzone } from "react-dropzone"

const userRoles = [
  { value: "user", label: "Người Dùng" },
  { value: "admin", label: "Admin" },
]

const AddUserForm = () => {
  const [userStatus, setUserStatus] = useState("")
  const [userRole, setUserRole] = useState("")
  const [avatar, setAvatar] = useState(null)

  const handleStatusChange = (e) => setUserStatus(e.target.value)
  const handleRoleChange = (e) => setUserRole(e.target.value)

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": []
    },
    onDrop: (acceptedFiles) => {
      setAvatar(acceptedFiles[0])
    }
  })

  return (
    <Card variant="outlined" sx={{ p: 0 }}>
      <Box sx={{ padding: "15px 30px" }} display="flex" alignItems="center">
        <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
          Thêm Người Dùng
        </Typography>
      </Box>
      <Divider />
      <CardContent sx={{ padding: "30px" }}>
        <form>
          <Grid container spacing={4}>
            {/* Cột trái */}
            <Grid item xs={12} md={6}>
              <Typography fontWeight={500} mb={1}>Họ và tên</Typography>
              <TextField
                variant="outlined"
                placeholder="Nguyễn Văn A"
                fullWidth
                sx={{ mb: 2 }}
              />

              <Typography fontWeight={500} mb={1}>Email</Typography>
              <TextField
                type="email"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
              />

              <Typography fontWeight={500} mb={1}>Số điện thoại</Typography>
              <TextField
                type="tel"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
              />

              <Typography fontWeight={500} mb={1}>Mật khẩu</Typography>
              <TextField
                type="password"
                autoComplete="new-password"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
              />

              <Typography fontWeight={500} mb={1}>Cấp bậc</Typography>
              <FormControl fullWidth variant="outlined" sx={{ mb: 2 }}>
                <Select
                  value={userRole}
                  onChange={handleRoleChange}
                  displayEmpty
                >
                  <MenuItem value="" disabled>Chọn cấp bậc</MenuItem>
                  {userRoles.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            {/* Cột phải */}
            <Grid item xs={12} md={6}>
              <Typography sx={{ fontSize: "16px", fontWeight: "500", mb: 1 }}>
                Trạng thái
              </Typography>
              <FormControl component="fieldset" sx={{ mb: 3 }}>
                <RadioGroup
                  row
                  name="status"
                  value={userStatus}
                  onChange={handleStatusChange}
                >
                  <FormControlLabel value="1" control={<Radio />} label="Hoạt động" />
                  <FormControlLabel value="0" control={<Radio />} label="Không Hoạt Động" />
                </RadioGroup>
              </FormControl>

              <Typography sx={{ fontSize: "16px", fontWeight: "500", mb: 1 }}>
                Ảnh đại diện
              </Typography>
              <Box
                {...getRootProps()}
                sx={{
                  border: "2px dashed #3f51b5",
                  height: 150,
                  padding: 3,
                  textAlign: "center",
                  borderRadius: 2,
                  backgroundColor: "#f8f9ff",
                  cursor: "pointer",
                  color: "#3f51b5",
                  fontWeight: 500,
                  mb: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <input {...getInputProps()} />
                {isDragActive ? (
                  <Typography>Kéo vào đây...</Typography>
                ) : (
                  <Typography>Kéo và thả tệp vào đây hoặc click để chọn</Typography>
                )}
              </Box>

              {avatar && (
                <Typography mt={1} color="text.secondary">
                  Đã chọn: {avatar.name}
                </Typography>
              )}
            </Grid>
          </Grid>

          <Box mt={4}>
            <Button color="primary" variant="contained">
              Thêm Người Dùng
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  )
}

export default AddUserForm
