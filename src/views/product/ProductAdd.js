import {
  Box,
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  Switch,
  Typography,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import TinyEditor from "../../components/EDITOR/TinyEditor";
import { getCategories } from "../../services/productService";

const ProductAdd = () => {
  const {
    register,
    handleSubmit,
    control,
    setError,
    formState: { errors },
  } = useForm();

  const [isFeatured, setIsFeatured] = useState(false);
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await getCategories();
        console.log("🔥 Kết quả API:", res);
    
        const result = res?.data?.data;
    
        if (Array.isArray(result)) {
          setCategories(result);
        } else if (Array.isArray(res?.data)) {
          setCategories(res.data);
        } else {
          console.error("❌ Không phải mảng:", res);
          setCategories([]);
        }
      } catch (err) {
        console.error("❌ Lỗi lấy danh mục:", err);
        setCategories([]); // fallback
      }
    };
    
  
    fetchCategories();
  }, []);
  

  const onSubmit = (data) => {
    let hasError = false;

    if (!selectedCategory) {
      setError("category", { message: "Vui lòng chọn danh mục" });
      hasError = true;
    }

    if (!image) {
      setError("image", { message: "Vui lòng chọn hình ảnh" });
      hasError = true;
    }

    if (hasError) return;

    const finalData = {
      ...data,
      is_feature: isFeatured,
      image,
      category: selectedCategory,
    };

    console.log("✅ Dữ liệu gửi đi:", finalData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box
        sx={{
          maxWidth: "1000px",
          mx: "auto",
          p: 4,
          background: "#fff",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h5" fontWeight={600} mb={3}>
          Thêm sản phẩm
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <TextField
              fullWidth
              label="Tên sản phẩm"
              {...register("productName", { required: "Tên sản phẩm là bắt buộc" })}
              error={!!errors.productName}
              helperText={errors.productName?.message}
              sx={{ mb: 3 }}
            />

            <Typography variant="subtitle1" mb={1}>
              Mô tả
            </Typography>
            <Controller
              name="description"
              control={control}
              defaultValue=""
              rules={{ required: "Mô tả là bắt buộc" }}
              render={({ field }) => (
                <TinyEditor value={field.value} onChange={field.onChange} />
              )}
            />
            {errors.description && (
              <Typography color="error" fontSize={13} mt={0.5}>
                {errors.description.message}
              </Typography>
            )}

            <TextField
              fullWidth
              label="Giá gốc (VNĐ)"
              type="number"
              {...register("originalPrice", {
                required: "Giá gốc là bắt buộc",
                min: { value: 0, message: "Giá phải >= 0" },
              })}
              error={!!errors.originalPrice}
              helperText={errors.originalPrice?.message}
              sx={{ mt: 3 }}
            />

            <TextField
              fullWidth
              label="Giá giảm (VNĐ)"
              type="number"
              {...register("discountPrice", {
                required: "Giá giảm là bắt buộc",
                min: { value: 0, message: "Giá phải >= 0" },
              })}
              error={!!errors.discountPrice}
              helperText={errors.discountPrice?.message}
              sx={{ mt: 3 }}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <FormControl fullWidth sx={{ mb: 1 }}>
              <InputLabel>Danh mục</InputLabel>
              <Select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                label="Danh mục"
                error={!!errors.category}
              >
                <MenuItem value="">Chọn danh mục</MenuItem>
                {categories.map((cat) => (
                  <MenuItem key={cat.id} value={cat.id}>
                    {cat.name}
                  </MenuItem>
                ))}
              </Select>
              {errors.category && (
                <Typography color="error" fontSize={13} mt={0.5}>
                  {errors.category.message}
                </Typography>
              )}
            </FormControl>

            <FormControl fullWidth sx={{ mb: 3 }}>
              <InputLabel>Trạng thái</InputLabel>
              <Select defaultValue="đã xuất bản" {...register("status")}>
                <MenuItem value="đã xuất bản">Đã xuất bản</MenuItem>
                <MenuItem value="bản nháp">Bản nháp</MenuItem>
              </Select>
            </FormControl>

            <Box sx={{ mb: 3 }}>
              <Typography variant="subtitle1" fontWeight={500} mb={1}>
                Sản phẩm nổi bật
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    checked={isFeatured}
                    onChange={(e) => setIsFeatured(e.target.checked)}
                  />
                }
                label={isFeatured ? "Có" : "Không"}
              />
            </Box>

            <Box sx={{ mb: 1 }}>
              <Typography variant="subtitle1" fontWeight={500} mb={1}>
                Hình ảnh
              </Typography>
              <Box
                component="label"
                htmlFor="product-image"
                sx={{
                  border: "2px dashed #3f51b5",
                  backgroundColor: "#f5f8ff",
                  padding: 3,
                  textAlign: "center",
                  borderRadius: 2,
                  mt: 1,
                  height: 150,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#3f51b5",
                  fontWeight: 500,
                }}
              >
                Nhấn hoặc kéo để chọn ảnh
                <input
                  id="product-image"
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) {
                      setImage(file);
                    }
                  }}
                />
              </Box>
              {errors.image && (
                <Typography color="error" fontSize={13} mt={0.5}>
                  {errors.image.message}
                </Typography>
              )}

              {image && (
                <Box mt={2}>
                  <Typography fontSize={14}>📁 {image.name}</Typography>
                </Box>
              )}
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: "right", mt: 4 }}>
          <Button variant="contained" color="primary" type="submit">
            Lưu sản phẩm
          </Button>
        </Box>
        {Object.keys(errors).length > 0 && (
  <Typography color="error" mt={2}>
    ❌ Vui lòng điền đầy đủ thông tin trước khi lưu sản phẩm.
  </Typography>
)}

      </Box>
    </form>
  );
};

export default ProductAdd;
