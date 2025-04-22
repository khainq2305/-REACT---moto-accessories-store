import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Card, CardHeader, CardContent, TextField, Typography, Button,
  Select, MenuItem, InputLabel, FormControl, IconButton, Box
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloseIcon from '@mui/icons-material/Close';
import { toast } from 'react-toastify';
import { useForm, Controller } from 'react-hook-form';
import styles from './CategoryAdd.module.scss';
import TinyEditor from '../../components/EDITOR/TinyEditor';
import { categoriesService } from '../../services/categoryServices';
import API_ENDPOINT from '../../config/apiEndpoint';
const API_IMAGE = import.meta.env.VITE_API_URL + "/uploads";
const DEFAULT_IMAGE = "http://localhost:3000/uploads/default.jpg";
const CategoryEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const fileInputRef = useRef();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFileName, setSelectedFileName] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      name: '',
      status: '',
      description: '',
      image: null,
    },
  });

  // 🟡 Lấy dữ liệu cũ
  useEffect(() => {
    fetchCategory();
  }, [id]);

  const fetchCategory = async () => {
    setIsLoading(true);
    try {
      const res = await categoriesService.getCategoriesById(id);
      const data = res.data.data;

      if (data) {
        // Cập nhật giá trị form với dữ liệu lấy về
        reset({
          name: data.name,
          status: data.status.toString(),
          description: data.description || '',
        });

        if (data.imageUrl) {
          setSelectedImage(`${API_IMAGE}/${data.imageUrl}`);
          setSelectedFileName(data.imageUrl);
        }
      } else {
        console.log('⚠️ Không có dữ liệu cho danh mục này.');
        toast.error('Không tìm thấy dữ liệu danh mục!');
      }
    } catch (err) {
      console.error('❌ Lỗi lấy dữ liệu:', err);
      toast.error('Không thể tải dữ liệu danh mục!');
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFileName(file.name);
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setValue('image', file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setSelectedFileName('');
    setValue('image', null);
    if (fileInputRef.current) fileInputRef.current.value = null;
  };

  const onSubmit = async (data) => {
    try {
        if (!data.name || data.name.trim() === '') {
            toast.error('Vui lòng nhập tên danh mục!');
            return;
        }

        const formData = new FormData();
        formData.append('name', data.name.trim());
        formData.append('status', data.status);
        formData.append('description', data.description);

        if (data.image) {
            formData.append('image', data.image);
        }

        console.log('📦 FormData gửi lên:', [...formData.entries()]);

        await categoriesService.updateCategories(id, formData);

        toast.success('🎉 Cập nhật danh mục thành công!');
        navigate(-1);
    }catch (error) {
      const errorMessage = error.response?.data?.error || 'Có lỗi xảy ra. Vui lòng thử lại!';
      toast.error(errorMessage);
    }
};

  if (isLoading) {
    return (
      <Card elevation={3}>
        <CardContent>
          <Typography>Đang tải dữ liệu...</Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card elevation={3}>
      <CardHeader title="Chỉnh sửa danh mục" sx={{ fontWeight: 'bold', pb: 0 }} />
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
            <Typography fontWeight={600} mb={1}>Hình ảnh danh mục</Typography>
            <Box
              className={styles.uploadBox}
              onClick={() => fileInputRef.current.click()}
              onDrop={(e) => {
                e.preventDefault();
                const file = e.dataTransfer.files[0];
                if (file && file.type.startsWith('image/')) {
                  setSelectedFileName(file.name);
                  const imageUrl = URL.createObjectURL(file);
                  setSelectedImage(imageUrl);
                  setValue('image', file);
                }
              }}
              onDragOver={(e) => e.preventDefault()}
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
              {selectedFileName && !selectedImage && (
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
              Cập nhật
            </Button>
            <Button 
              variant="outlined" 
              color="error" 
              onClick={() => navigate(-1)}

            >
              Hủy
            </Button>
          </Box>
        </form> 
      </CardContent>
    </Card>
  );
};

export default CategoryEdit;