import React, { useRef, useState } from 'react';
import {
  Card, CardHeader, CardContent, TextField, Typography, Button,
  Select, MenuItem, InputLabel, FormControl, IconButton, Box
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloseIcon from '@mui/icons-material/Close';
import { useForm, Controller } from 'react-hook-form';
import useToast from '../../components/Toast';

const CategoryAdd = () => {
  const toast = useToast();
  const fileInputRef = useRef();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState('');

  const {
    handleSubmit,
    control,
    setValue,
    watch,
    reset
  } = useForm({
    defaultValues: {
      categoryName: '',
      status: '',
      description: '',
      image: null
    }
  });

  const imageWatch = watch('image');

  const onSubmit = (data) => {
    console.log(data);
    toast('🎉 Thêm danh mục thành công!', 'success');
    reset();
    setSelectedImage(null);
    setSelectedFileName('');
    if (fileInputRef.current) fileInputRef.current.value = null;
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setSelectedFileName(file.name);
      setValue('image', file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setSelectedFileName('');
    setValue('image', null);
    if (fileInputRef.current) fileInputRef.current.value = null;
  };

  return (
    <Card elevation={3}>
      <CardHeader title="Thêm Danh Mục" sx={{ fontWeight: 'bold', pb: 0 }} />
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box mb={3}>
            <Typography fontWeight={600} mb={1}>Tên Danh Mục</Typography>
            <Controller
              name="categoryName"
              control={control}
              render={({ field }) => (
                <TextField {...field} fullWidth variant="outlined" placeholder="Tên danh mục" />
              )}
            />
          </Box>

          <Box mb={3}>
            <Typography fontWeight={600} mb={1}>Trạng thái</Typography>
            <FormControl fullWidth>
              <InputLabel>Chọn trạng thái</InputLabel>
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <Select {...field} label="Chọn trạng thái">
                    <MenuItem value="1">Hoạt động</MenuItem>
                    <MenuItem value="0">Không hoạt động</MenuItem>
                  </Select>
                )}
              />
            </FormControl>
          </Box>

          <Box mb={3}>
            <Typography fontWeight={600} mb={1}>Hình ảnh sản phẩm</Typography>
            <Box
              onClick={() => fileInputRef.current.click()}
              onDrop={(e) => {
                e.preventDefault();
                const file = e.dataTransfer.files[0];
                if (file && file.type.startsWith('image/')) {
                  const imageUrl = URL.createObjectURL(file);
                  setSelectedImage(imageUrl);
                  setSelectedFileName(file.name);
                  setValue('image', file);
                }
              }}
              onDragOver={(e) => e.preventDefault()}
              sx={{
                border: '2px dashed #ccc',
                borderRadius: '6px',
                padding: 2,
                textAlign: 'center',
                cursor: 'pointer',
                backgroundColor: '#fafafa'
              }}
            >
              <CloudUploadIcon fontSize="large" color="action" />
              <Typography variant="body2" color="textSecondary">
                Kéo thả ảnh vào đây hoặc click để chọn
              </Typography>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                hidden
                onChange={handleImageChange}
              />
              {selectedFileName && (
                <Typography variant="body2" mt={1}>
                  📁 {selectedFileName}
                </Typography>
              )}
            </Box>

            {selectedImage && (
              <Box mt={2} position="relative" display="inline-block">
                <img
                  src={selectedImage}
                  alt="preview"
                  style={{
                    width: '80px',
                    height: '80px',
                    objectFit: 'cover',
                    borderRadius: '5px',
                    border: '1px solid #ccc'
                  }}
                />
                <IconButton
                  size="small"
                  onClick={handleRemoveImage}
                  sx={{
                    position: 'absolute',
                    top: '-5px',
                    right: '-5px',
                    backgroundColor: 'red',
                    color: 'white',
                    width: 20,
                    height: 20,
                    '&:hover': { backgroundColor: '#c62828' }
                  }}
                >
                  <CloseIcon sx={{ fontSize: '14px' }} />
                </IconButton>
              </Box>
            )}
          </Box>

          <Box mb={3}>
            <Typography fontWeight={600} mb={1}>Mô tả danh mục</Typography>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  placeholder="Mô tả danh mục..."
                  multiline
                  rows={4}
                  fullWidth
                />
              )}
            />
          </Box>

          <Box mt={3} display="flex" gap={2}>
            <Button type="submit" variant="contained" color="primary">
              Thêm mới
            </Button>
            <Button variant="outlined" color="error" href="/category">
              Hủy
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

export default CategoryAdd;
