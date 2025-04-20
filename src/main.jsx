
import ReactDOM from "react-dom/client";
import App from "./App";
import { SnackbarProvider } from "notistack";
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
  <SnackbarProvider
    anchorOrigin={{ vertical: "top", horizontal: "right" }}
    autoHideDuration={3000}
    maxSnack={3}
  >
    <App />
  </SnackbarProvider>
  </GoogleOAuthProvider>
);
