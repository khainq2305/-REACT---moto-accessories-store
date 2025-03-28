// src/components/shared/Toast.js
import { useSnackbar } from "notistack";

const useToast = () => {
    const { enqueueSnackbar } = useSnackbar();
    return (message, variant = "default") => {
  
      enqueueSnackbar(message, { variant });
    };
  };
  

export default useToast;
