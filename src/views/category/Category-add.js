import { useRef, useState } from 'react';
import {
  Card, CardHeader, CardContent, TextField, Typography, Button,
  Select, MenuItem, InputLabel, FormControl, IconButton, Box
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloseIcon from '@mui/icons-material/Close';
import { useForm, Controller } from 'react-hook-form';
import TinyEditor from '../../components/EDITOR/TinyEditor';
import { toast } from 'react-toastify';
import { categoriesService } from '../../services/categoryServices';

const CategoryAdd = () => {
  const fileInputRef = useRef();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState('');

  const {
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      status: '',
      description: '',
      image: null,
    },
  });

  const onSubmit = async (data) => {
    if (!data.image || !data.name || !data.status) {
      toast.error("Vui lòng điền đầy đủ thông tin");
      return;
    }

    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('status', data.status);
      formData.append('description', data.description);
      formData.append('image', data.image);

      const response = await categoriesService.AddCategories(formData);

      toast.success('🎉 Thêm danh mục thành công!');
      reset();
      setSelectedImage(null);
      setSelectedFileName('');
      if (fileInputRef.current) fileInputRef.current.value = null;
    } catch (error) {
      const errorMessage = error.response?.data?.error || 'Có lỗi xảy ra. Vui lòng thử lại!';
      toast.error(errorMessage);
    }

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
          {/* Tên danh mục */}
          <Box mb={3}>
            <Typography fontWeight={600} mb={1}>Tên Danh Mục</Typography>
            <Controller
              name="name"
              control={control}
              rules={{
                required: 'Vui lòng nhập tên danh mục',
                maxLength: {
                  value: 50,
                  message: 'Tên danh mục không được vượt quá 50 ký tự',
                },
                pattern: {
                  value: /^[\p{L}\p{N}\s\-+&()]+$/u, // Cho phép chữ, số, khoảng trắng, - + & ( )
                  message: 'Tên danh mục chứa ký tự không hợp lệ',
                },
                validate: (value) =>
                  value.trim() !== '' || 'Tên danh mục không được chỉ chứa khoảng trắng',
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="outlined"
                  placeholder="Tên danh mục"
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              )}
            />

          </Box>

          {/* Trạng thái */}
          <Box mb={3}>
            <Typography fontWeight={600} mb={1}>Trạng thái</Typography>
            <Controller
              name="status"
              control={control}
              rules={{ required: 'Vui lòng chọn trạng thái' }}
              render={({ field }) => (
                <FormControl fullWidth error={!!errors.status}>
                  <InputLabel>Chọn trạng thái</InputLabel>
                  <Select {...field} label="Chọn trạng thái">
                    <MenuItem value="1">Hoạt động</MenuItem>
                    <MenuItem value="0">Không hoạt động</MenuItem>
                  </Select>
                  <Typography variant="caption" color="error">
                    {errors.status?.message}
                  </Typography>
                </FormControl>
              )}
            />
          </Box>

          {/* Hình ảnh */}
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
                backgroundColor: '#fafafa',
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
                    border: '1px solid #ccc',
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
                    '&:hover': { backgroundColor: '#c62828' },
                  }}
                >
                  <CloseIcon sx={{ fontSize: '14px' }} />
                </IconButton>
              </Box>
            )}
          </Box>

          {/* Mô tả */}
          <Box mb={3}>
            <Typography fontWeight={600} mb={1}>Mô tả danh mục</Typography>
            <Controller
              name="description"
              control={control}
              rules={{ required: 'Vui lòng nhập mô tả' }}
              render={({ field }) => (
                <>
                  <TinyEditor value={field.value} onChange={field.onChange} />
                  {errors.description && (
                    <Typography variant="caption" color="error">
                      {errors.description.message}
                    </Typography>
                  )}
                </>
              )}
            />
          </Box>

          {/* Nút submit */}
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
