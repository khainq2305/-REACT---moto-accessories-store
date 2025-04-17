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
  import {
    addProduct,
    getCategories,
    updateProduct,
    getProductById,
  } from "../../services/productService";
  import { useParams } from "react-router-dom";
  
  const ProductAddOrEdit = () => {
    const {
      register,
      handleSubmit,
      control,
      setError,
      setValue,
      watch,
      formState: { errors },
    } = useForm();
    const [imageError, setImageError] = useState("");

    const [isFeatured, setIsFeatured] = useState(false);
    const [images, setImages] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const { id } = useParams();
    const isEdit = !!id;
  
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          // ✅ chỉ lấy danh mục có status = 1
const res = await getCategories({ status: 1 });

          const result = res?.data?.data || res?.data;
          if (Array.isArray(result)) {
            setCategories(result);
          }
        } catch (err) {
          console.error("❌ Lỗi lấy danh mục:", err);
        }
      };
  
      const fetchProduct = async () => {
        if (isEdit) {
          try {
            const res = await getProductById(id);
            const product = res.data?.data || res.data;
            if (!product || !product.name) {
              console.error("❌ Sản phẩm không hợp lệ:", product);
              return;
            }
            setValue("productName", product.name);
            setValue("description", product.description);
            setValue("originalPrice", product.price);
            setValue("discountPrice", product.discount);
            setValue("quantity", product.quantity);
            setValue("status", product.status);
            setSelectedCategory(product.idCategory);
            setIsFeatured(!!product.is_feature);
          } catch (err) {
            console.error("❌ Lỗi lấy sản phẩm:", err);
          }
        }
      };
  
      fetchCategories();
      fetchProduct();
    }, [id, isEdit, setValue]);
  
    const onSubmit = async (data) => {
        console.log("🧾 Dữ liệu gửi lên:", {
          ...data,
          images,
        });
      
        let hasError = false;
      
        if (!data.category) {
          setError("category", { message: "Vui lòng chọn danh mục" });
          hasError = true;
        }
      
        if (!images.length) {
            setImageError("Vui lòng chọn ít nhất một hình ảnh"); // ✅ dùng state riêng
            hasError = true;
          } else {
            setImageError("");
          }
          
      
        if (hasError) return;
      
        const finalData = {
          name: data.productName,
          description: data.description,
          price: parseFloat(data.originalPrice),
          discount: parseFloat(data.discountPrice),
          is_feature: isFeatured ? 1 : 0,
          status: parseInt(data.status),
          quantity: parseInt(data.quantity || 1),
          categories: [data.category], // ✅ dùng từ react-hook-form
        };
      
        const formData = new FormData();
        for (const key in finalData) {
          if (Array.isArray(finalData[key])) {
            finalData[key].forEach((value) =>
              formData.append(`${key}[]`, value)
            );
          } else {
            formData.append(key, finalData[key]);
          }
        }
      
        images.forEach((file) => {
          formData.append("image", file);
        });
      
        try {
          const res = isEdit
            ? await updateProduct(id, formData)
            : await addProduct(formData);
      
          alert(isEdit ? "✅ Cập nhật thành công!" : "✅ Thêm sản phẩm thành công!");
          console.log("📦 Sản phẩm:", res.data);
        } catch (err) {
          console.error("❌ Lỗi toàn tập:", err);
          console.log("❌ Chi tiết lỗi:", err?.response?.data || err.message);
          alert("❌ Tạo hoặc cập nhật sản phẩm thất bại!");
        }
      };
      
  
    return (
      <form
        onSubmit={handleSubmit(onSubmit, (errors) => {
          console.warn("❌ Form bị lỗi, không thể submit:", errors);
          Object.entries(errors).forEach(([key, value]) =>
            console.warn(`- ${key}: ${value.message}`)
          );
        })}
      >
        <Box>
          <Typography variant="h5" fontWeight={600} mb={3}>
            {isEdit ? "Cập nhật sản phẩm" : "Thêm sản phẩm"}
          </Typography>
  
          <Grid container spacing={4}>
            <Grid item xs={12} md={8}>
              <TextField
                fullWidth
                label="Tên sản phẩm"
                {...register("productName", {
                  required: "Tên sản phẩm là bắt buộc",
                })}
                error={!!errors.productName}
                helperText={errors.productName?.message}
              />
  
              <Typography variant="subtitle1" mb={1} mt={3}>
                Mô tả
              </Typography>
              <Controller
                name="description"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <TinyEditor value={field.value} onChange={field.onChange} />
                )}
              />
  
              <Grid container spacing={2} mt={2}>
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="Giá gốc (VNĐ)"
                    type="number"
                    {...register("originalPrice", {
                      required: "Giá gốc là bắt buộc",
                      validate: (value) => {
                        if (
                          value === "" ||
                          value === undefined ||
                          value === null
                        )
                          return "Giá gốc là bắt buộc";
                        if (isNaN(value)) return "Giá gốc phải là số";
                        if (Number(value) < 0) return "Giá gốc phải ≥ 0";
                        return true;
                      },
                    })}
                    error={!!errors.originalPrice}
                    helperText={errors.originalPrice?.message}
                  />
                </Grid>
  
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="Giá giảm (VNĐ)"
                    type="number"
                    {...register("discountPrice", {
                      validate: (value) => {
                        if (
                          value === "" ||
                          value === undefined ||
                          value === null
                        )
                          return true;
                        const parsed = parseFloat(value);
                        const original = parseFloat(watch("originalPrice"));
                        if (isNaN(parsed)) return "Giá giảm phải là số";
                        if (parsed < 0) return "Giá giảm không được nhỏ hơn 0";
                        if (!isNaN(original) && parsed > original)
                          return "Giá giảm không được lớn hơn giá gốc";
                        return true;
                      },
                    })}
                    error={!!errors.discountPrice}
                    helperText={errors.discountPrice?.message}
                  />
                </Grid>
  
                <Grid item xs={12} sm={4}>
                  <TextField
                    fullWidth
                    label="Số lượng"
                    type="number"
                    {...register("quantity", {
                      required: "Số lượng là bắt buộc",
                      min: { value: 1, message: "Tối thiểu là 1" },
                    })}
                    error={!!errors.quantity}
                    helperText={errors.quantity?.message}
                  />
                </Grid>
              </Grid>
            </Grid>
  
            <Grid item xs={12} md={4}>
              <FormControl fullWidth sx={{ mb: 2 }} error={!!errors.category}>
                <InputLabel>Danh mục</InputLabel>
                <Controller
                  name="category"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Vui lòng chọn danh mục" }}
                  render={({ field }) => (
                    <Select {...field} label="Danh mục">
                      <MenuItem value="">Chọn danh mục</MenuItem>
                      {categories.map((cat) => (
                        <MenuItem key={cat.id} value={cat.id}>
                          {cat.name}
                        </MenuItem>
                      ))}
                    </Select>
                  )}
                />
                {errors.category && (
                  <Typography color="error" fontSize={13} mt={0.5}>
                    {errors.category.message}
                  </Typography>
                )}
              </FormControl>
  
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Trạng thái</InputLabel>
                <Select
                  defaultValue={1}
                  {...register("status", { valueAsNumber: true })}
                >
                  <MenuItem value={1}>Đã xuất bản</MenuItem>
                  <MenuItem value={0}>Bản nháp</MenuItem>
                </Select>
              </FormControl>
  
              <Box sx={{ mb: 2 }}>
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
  
              <Box>
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
  multiple
  onChange={(e) => {
    const files = Array.from(e.target.files);
    const validImages = [];
    let hasInvalidFile = false;

    files.forEach((file) => {
      if (file.type.startsWith("image/")) {
        validImages.push(file);
      } else {
        hasInvalidFile = true;
      }
    });

    if (hasInvalidFile) {
      setImageError("Chỉ được chọn các tệp hình ảnh (jpg, png, jpeg, webp...)");
    } else if (validImages.length === 0) {
      setImageError("Vui lòng chọn ít nhất một hình ảnh");
    } else {
      setImageError(""); // ✅ clear lỗi
    }

    setImages(validImages);
  }}
/>

                </Box>
  
                {imageError && (
  <Box mt={1}>
    <Typography color="error" fontSize={13}>
      {imageError}
    </Typography>
  </Box>
)}

  
                {images.length > 0 && (
                  <Box mt={2}>
                    {images.map((img, idx) => (
                      <Typography fontSize={14} key={idx}>
                        📁 {img.name}
                      </Typography>
                    ))}
                  </Box>
                )}
              </Box>
            </Grid>
          </Grid>
  
          <Box sx={{ textAlign: "right", mt: 4 }}>
            <Button variant="contained" color="primary" type="submit">
              {isEdit ? "Cập nhật" : "Lưu sản phẩm"}
            </Button>
          </Box>
        </Box>
      </form>
    );
  };
  
  export default ProductAddOrEdit;