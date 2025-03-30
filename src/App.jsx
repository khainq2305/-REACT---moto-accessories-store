import './App.css';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { baselightTheme } from "./theme/DefaultColors";

import MainRouter from './routes/MainRoutes';
import { BrowserRouter } from "react-router-dom"; // ✅ Thay vì RouterProvider
import 'font-awesome/css/font-awesome.min.css';
// index.js hoặc App.jsx
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const theme = baselightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
