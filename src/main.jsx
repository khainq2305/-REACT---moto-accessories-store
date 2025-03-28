
import ReactDOM from "react-dom/client";
import App from "./App";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SnackbarProvider
    anchorOrigin={{ vertical: "top", horizontal: "right" }}
    autoHideDuration={3000}
    maxSnack={3}
  >
    <App />
  </SnackbarProvider>
);
