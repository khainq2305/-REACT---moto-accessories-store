import {  useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Card, CardHeader, CardContent, TextField, Typography, Button,
  Select, MenuItem, InputLabel, FormControl, IconButton, Box
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloseIcon from '@mui/icons-material/Close';
import styles from './CategoryAdd.module.scss';
import TinyEditor from '../../components/EDITOR/TinyEditor';

const CategoryEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [description, setDescription] = useState('');

  const [categoryName, setCategoryName] = useState('');
  const [status, setStatus] = useState('');
  const [selectedFileName, setSelectedFileName] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef();

 
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFileName(file.name);
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setSelectedFileName('');
    if (fileInputRef.current) {
      fileInputRef.current.value = null;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedCategory = {
      id,
      categoryName,
      status,
      image: selectedFileName,
    };

    console.log('✅ Dữ liệu cập nhật:', updatedCategory);

    navigate('/category');
  };

  return (
    <Card elevation={3}>
      <CardHeader title="Chỉnh sửa danh mục" sx={{ fontWeight: 'bold', pb: 0 }} />
      <CardContent>
        <form onSubmit={handleSubmit}>
          <Box mb={3}>
            <Typography fontWeight={600} mb={1}>Tên Danh Mục</Typography>
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Tên danh mục"
              value={categoryName}
              onChange={(e) => setCategoryName(e.target.value)}
            />
          </Box>

          <Box mb={3}>
            <Typography fontWeight={600} mb={1}>Trạng thái</Typography>
            <FormControl fullWidth>
              <InputLabel>Chọn trạng thái</InputLabel>
              <Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                label="Chọn trạng thái"
              >
                <MenuItem value="1">Hoạt động</MenuItem>
                <MenuItem value="0">Không hoạt động</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box mb={3}>
            <Typography fontWeight={600} mb={1}>Hình ảnh sản phẩm</Typography>
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
            </Box>

            {selectedImage && (
              <Box className={styles.previewContainer}>
                <img
                  src={selectedImage}
                  alt="preview"
                  className={styles.previewImage}
                />
                <IconButton
                  size="small"
                  onClick={handleRemoveImage}
                  className={styles.removeIcon}
                >
                  <CloseIcon sx={{ fontSize: '14px' }} />
                </IconButton>
              </Box>
            )}
          </Box>

          <Box mb={3}>
            <Typography fontWeight={600} mb={1}>Mô tả danh mục</Typography>
            <TinyEditor value={description} onChange={setDescription} />

          </Box>

          <Box mt={3} display="flex" gap={2}>
            <Button type="submit" variant="contained" color="primary">
              Cập nhật
            </Button>
            <Button variant="outlined" color="error" onClick={() => navigate('/category')}>
              Hủy
            </Button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

export default CategoryEdit;
