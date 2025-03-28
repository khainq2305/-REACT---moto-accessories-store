import Swal from "sweetalert2";

const ConfirmDialog = ({ title, text, onConfirm }) => {
  return Swal.fire({
    title: title || "Bạn có chắc chắn?",
    text: text || "Hành động này không thể hoàn tác!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Xóa",
    cancelButtonText: "Hủy"
  }).then((result) => {
    if (result.isConfirmed && onConfirm) {
      onConfirm();
      Swal.fire("Đã xóa!", "Sản phẩm đã được xóa.", "success");
    }
  });
};

export default ConfirmDialog;
