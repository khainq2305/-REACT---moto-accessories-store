import {
  Box,
  Grid,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Switch,
  Typography,
  Slider,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import useToast from "../../components/Toast";

const ProductEdit = () => {
  const toast = useToast();
  const { register, handleSubmit, control } = useForm();

  const [discountType, setDiscountType] = useState("không giảm giá");
  const [discountValue, setDiscountValue] = useState(0);
  const [isFeatured, setIsFeatured] = useState(false);
  const [productImages, setProductImages] = useState([]);
  const [thumbnail, setThumbnail] = useState(null);
  const [categories, setCategories] = useState(["danh mục1", "danh mục2"]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [newCategory, setNewCategory] = useState("");
  const [showAddCategoryInput, setShowAddCategoryInput] = useState(false);

  const onSubmit = (data) => {
    toast("Lưu thành công!", "success");
    console.log("Dữ liệu sản phẩm:", {
      ...data,
      thumbnail,
      isFeatured,
      discountType,
      discountValue,
      selectedCategory,
      productImages,
    });
  };

  const handleProductImagesChange = (e) => {
    const files = Array.from(e.target.files);
    const previews = files.map((file) => ({
      name: file.name,
      size: file.size,
      url: URL.createObjectURL(file),
      file,
    }));
    setProductImages((prev) => [...prev, ...previews]);
  };

  const removeImage = (indexToRemove) => {
    setProductImages((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  

  const handleAddCategory = () => {
    const trimmed = newCategory.trim();
    if (trimmed && !categories.includes(trimmed)) {
      setCategories([...categories, trimmed]);
      setSelectedCategory(trimmed);
      setNewCategory("");
      setShowAddCategoryInput(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ maxWidth: "1200px", margin: "auto", background: "#fff", padding: 4, borderRadius: 2, boxShadow: 3 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Box sx={{ mb: 3 }}>
              <h3>Thông tin chung</h3>
              <TextField fullWidth label="Tên sản phẩm" placeholder="Nhập tên sản phẩm" {...register("productName")} sx={{ mt: 2 }} />
            </Box>

            <Box sx={{ mb: 3 }}>
              <h3>Giá cả</h3>
              <TextField fullWidth label="Giá gốc" type="number" placeholder="Nhập giá sản phẩm" {...register("originalPrice")} />

              <h4>Loại giảm giá</h4>
              <RadioGroup row value={discountType} onChange={(e) => { setDiscountType(e.target.value); setDiscountValue(0); }}>
                <FormControlLabel value="không giảm giá" control={<Radio />} label="Không giảm giá" />
                <FormControlLabel value="giảm theo %" control={<Radio />} label="Phần trăm %" />
                <FormControlLabel value="giảm theo giá cố định" control={<Radio />} label="Giá cố định" />
              </RadioGroup>

              {discountType === "giảm theo giá cố định" && (
                <TextField fullWidth type="number" label="Giá giảm (VNĐ)" placeholder="Nhập giá giảm" {...register("discountValue")} />
              )}

              {discountType === "giảm theo %" && (
                <Box sx={{ mt: 2 }}>
                  <InputLabel sx={{ mb: 1 }}>Đặt phần trăm giảm giá</InputLabel>
                  <Slider
                    value={Number(discountValue)}
                    onChange={(e, newValue) => setDiscountValue(newValue)}
                    min={0}
                    max={100}
                    step={1}
                    valueLabelDisplay="on"
                    sx={{ color: "primary.main" }}
                  />
                </Box>
              )}
            </Box>

            <Box sx={{ mb: 3 }}>
              <h3>Hình ảnh sản phẩm</h3>
              <Box
                component="label"
                htmlFor="product-images"
                sx={{
                  border: "2px dashed #3f51b5",
                  backgroundColor: "#f5f8ff",
                  padding: 3,
                  textAlign: "center",
                  borderRadius: 2,
                  mt: 2,
                  height: 150,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#3f51b5",
                  fontWeight: 500,
                }}
              >
                Kéo và thả một số tệp ở đây hoặc nhấp để chọn tệp
                <input id="product-images" type="file" hidden multiple accept="image/*" onChange={handleProductImagesChange} />
              </Box>

              {productImages.length > 0 && (
                <Box sx={{ mt: 2 }}>
                  <h4>Tập tin:</h4>
                  {productImages.map((img, index) => (
                    <Box key={index} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#fff", border: "1px solid #eee", borderRadius: 2, px: 2, py: 1, mb: 1 }}>
                      <Box sx={{ flex: 1, overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                        📄 {img.name}
                      </Box>
                      <Box sx={{ color: "#fff", backgroundColor: "#3f51b5", borderRadius: 20, px: 2, py: 0.5, fontSize: 12, ml: 2, mr: 1, minWidth: 80, textAlign: "center" }}>
                        {(img.size / 1024).toFixed(0)} KB
                      </Box>
                      <Button variant="text" color="error" onClick={() => removeImage(index)} sx={{ fontSize: 18 }}>
                        ❌
                      </Button>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          </Grid>

          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <h3>Ảnh đại diện</h3>
              <FormControl fullWidth>
                <Controller
                  name="thumbnail"
                  control={control}
                  defaultValue={null}
                  render={({ field }) => (
                    <Box
                      component="label"
                      htmlFor="thumbnail"
                      sx={{
                        border: "2px dashed #3f51b5",
                        color: "#3f51b5",
                        padding: 3,
                        textAlign: "center",
                        borderRadius: 2,
                        mt: 2,
                        height: 150,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                    >
                      Kéo & thả ảnh vào đây, hoặc bấm để chọn ảnh
                      <input
                        id="thumbnail"
                        type="file"
                        hidden
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            setThumbnail(URL.createObjectURL(file));
                            field.onChange(file);
                          }
                        }}
                      />
                    </Box>
                  )}
                />
              </FormControl>

              {thumbnail && (
                <Box sx={{ mt: 2 }}>
                  <img src={thumbnail} alt="thumbnail" style={{ width: "100%", height: 120, objectFit: "cover", borderRadius: 4, border: "1px solid #eee" }} />
                </Box>
              )}
            </Box>

            <Box sx={{ mb: 3 }}>
              <h3>Trạng thái</h3>
              <FormControl fullWidth>
                <Select defaultValue="đã xuất bản" {...register("status")}>
                  <MenuItem value="đã xuất bản">Đã xuất bản</MenuItem>
                  <MenuItem value="bản nháp">Bản nháp</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ mb: 3 }}>
              <h3>Danh mục & Thẻ</h3>
              <FormControl fullWidth>
                <InputLabel>Danh mục</InputLabel>
                <Select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  label="Danh mục"
                >
                  <MenuItem value="">Chọn danh mục</MenuItem>
                  {categories.map((cat, i) => (
                    <MenuItem key={i} value={cat}>{cat}</MenuItem>
                  ))}
                </Select>
              </FormControl>

              {showAddCategoryInput ? (
                <Box sx={{ display: "flex", mt: 1, gap: 1 }}>
                  <TextField
                    size="small"
                    placeholder="Tên danh mục mới"
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleAddCategory();
                    }}
                  />
                  <Button variant="contained" onClick={handleAddCategory}>
                    Thêm
                  </Button>
                </Box>
              ) : (
                <Button sx={{ mt: 1 }} variant="outlined" onClick={() => setShowAddCategoryInput(true)}>
                  + Thêm danh mục mới
                </Button>
              )}
            </Box>

            <Box sx={{ mb: 3 }}>
              <h3>Sản phẩm nổi bật</h3>
              <FormControlLabel
                control={<Switch checked={isFeatured} onChange={(e) => setIsFeatured(e.target.checked)} color="primary" />}
                label={<Typography>{isFeatured ? "Có" : "Không"}</Typography>}
              />
            </Box>
          </Grid>
        </Grid>

        <Box sx={{ textAlign: "right", mt: 4 }}>
          <Button variant="contained" color="primary" type="submit">
            Lưu sản phẩm
          </Button>
        </Box>
      </Box>
    </form>
  );
};

export default ProductEdit;
