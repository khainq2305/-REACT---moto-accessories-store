import Swal from "sweetalert2";

const ConfirmDialog = ({ title, text }) => {
  return new Promise((resolve) => {
    Swal.fire({
      title: title || "Bạn có chắc chắn?",
      text: text || "Hành động này không thể hoàn tác!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Xóa",
      cancelButtonText: "Hủy",
    }).then((result) => {
      resolve(result.isConfirmed); // ✅ Trả về true nếu xác nhận
    });
  });
};

export default ConfirmDialog;
