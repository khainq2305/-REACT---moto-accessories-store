"use client"

import React from "react"

import {
  Card,
  CardContent,
  Divider,
  Box,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  RadioGroup,
  Radio,
  FormControl,
  MenuItem,
  Select,
   MenuItem,
    InputAdornment,
    FormControl,
    InputLabel
} from "@mui/material"

const userRoles = [
  {
    value: "user",
    label: "Người Dùng",
  },
  {
    value: "admin",
    label: "Admin",
  },

]

const AddUserForm = () => {
  const [permissions, setPermissions] = React.useState({
    canEdit: false,
    canDelete: false,
    canInvite: false,
  })

  const handlePermissionChange = (event) => {
    setPermissions({ ...permissions, [event.target.name]: event.target.checked })
  }

  const [userStatus, setUserStatus] = React.useState("")

  const handleStatusChange = (event) => {
    setUserStatus(event.target.value)
  }

  const [userRole, setUserRole] = React.useState("")

  const handleRoleChange = (event) => {
    setUserRole(event.target.value)
  }

  return (
    <div>
      <Card
        variant="outlined"
        sx={{
          p: 0,
        }}
      >
        <Box
          sx={{
            padding: "15px 30px",
          }}
          display="flex"
          alignItems="center"
        >
          <Box flexGrow={1}>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
              Thêm Người Dùng
            </Typography>
          </Box>
        </Box>
        <Divider />
        <CardContent
          sx={{
            padding: "30px",
          }}
        >
          <form>
            <TextField
              id="full-name"
              label="Họ và tên"
              variant="outlined"
              placeholder="John Doe"
              fullWidth
              sx={{
                mb: 2,
              }}
            />
            <TextField
              id="email"
              label="Email"
              type="email"
              variant="outlined"
              placeholder="john.doe@example.com"
              fullWidth
              sx={{
                mb: 2,
              }}
            />
            <TextField
              id="phone"
              label="Số điện thoại"
              type="number"
              variant="outlined"
              placeholder="+84"
              fullWidth
              sx={{
                mb: 2,
              }}
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              autoComplete="new-password"
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
            />
            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item lg={4} md={6} sm={12}>
                <Typography sx={{ fontSize: "16px", fontWeight: "500", mb: 1 }}>
                  Trạng thái
                </Typography>
                <FormControl component="fieldset">
                  <RadioGroup
                    row
                    aria-label="status"
                    name="status"
                    value={userStatus}
                    onChange={handleStatusChange}
                  >
                    <FormControlLabel value="1" control={<Radio />} label="Hoạt động" />
                    <FormControlLabel value="0" control={<Radio />} label="Không Hoạt Động" />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <TextField
              fullWidth
              id="user-role"
              variant="outlined"
              file
              label="Ảnh đại hiện"
              sx={{ mb: 2 }}
            > Chọn ảnh
            </TextField>
            <TextField
              fullWidth
              id="user-role"
              variant="outlined"
              select
              label="Cấp bậc"
              value={userRole}
              onChange={handleRoleChange}
              sx={{ mb: 2 }}
            >
              {userRoles.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <div>
              <Button color="primary" variant="contained">
                Thêm người dùng
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default AddUserForm

