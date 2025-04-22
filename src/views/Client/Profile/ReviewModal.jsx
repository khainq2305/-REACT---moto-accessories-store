"use client"

import React, { useState } from "react"
import {
  Button,
  Modal,
  Box,
  Typography,
  TextField,
  Rating,
  Stack,
  Divider,
} from "@mui/material"
import { commentServices } from "../../../services/commentServices"
import { toast } from "react-toastify"

export default function ReviewModal({ open, handleClose, productId, userId }) {
  const [value, setValue] = useState(5)
  const [comment, setComment] = useState("")
  const [existingComment, setExistingComment] = useState(null);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
  }
  const checkExistingComment = async () => {
    try {
      const response = await commentServices.checkCommentExists(userId, productId);
      if (response.success) {
        // Nếu bình luận đã tồn tại, lưu lại thông tin bình luận hiện tại
        setExistingComment(response.data);
        setComment(response.data.content); // Hiển thị bình luận đã có trong modal
        setValue(response.data.rating); // Hiển thị rating đã có
      } else {
        setExistingComment(null); // Không có bình luận
      }
    } catch (error) {
      console.error("Lỗi khi kiểm tra bình luận:", error);
    }
  };
  const handleSubmit = async () => {
    const commentData = {
      idUser: userId,           // ✅ đúng tên Sequelize
    content: comment,         // ✅ đúng tên Sequelize
    product_id: productId,    // ✅ đúng tên Sequelize
    rating: value  
      
    }

    try {
      const response = await commentServices.createComment(commentData);
    
      if (response.success) {
        toast.success("Đã gửi bình luận");
        handleClose();
        console.log("📦 Dữ liệu gửi lên server:", commentData);
      } else {
        toast.error("Có lỗi khi bình luận");
      }
    } catch (error) {
      toast.error("Có lỗi khi bình luận rồiiiii");
    }
  }
  
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-review-title"
      aria-describedby="modal-review-description"
    >
      <Box sx={style}>
        <Typography id="modal-review-title" variant="h6" sx={{ fontSize: "1.5rem" }}>
          Đánh giá sản phẩm
        </Typography>
        <Typography sx={{ mt: 2, mb: 1, fontSize: "1.2rem" }}>
          Hãy chia sẻ trải nghiệm của bạn về sản phẩm này.
        </Typography>

        <Divider sx={{ mb: 1 }} />

        <Stack spacing={1}>
          <Box>
            <Typography sx={{ mb: 1, fontSize: "1.2rem" }}>Đánh giá của bạn</Typography>
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue)
              }}
              size="large"
            />
          </Box>

          <TextField
            label="Nhận xét của bạn"
            multiline
            rows={6}
            placeholder="Chia sẻ trải nghiệm của bạn về sản phẩm này..."
            fullWidth
            inputProps={{ maxLength: 2000 }}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />

          <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 1, mt: 2 }}>
            <Button onClick={handleClose} variant="outlined" size="large">
              Hủy
            </Button>
            <Button onClick={handleSubmit} variant="contained" size="large">
            {existingComment ? "Cập nhật bình luận" : "Gửi đánh giá"}
            </Button>
          </Box>
        </Stack>
      </Box>
    </Modal>
  )
}
