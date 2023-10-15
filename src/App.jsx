import "./App.css";
import Homepage from "./pages/Homepage";
import Recentwork from "./pages/Recentwork";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeProvider from "./Context/themeContext";
import ScrollToTop from "./component/ScrollUp";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Recentworks" element={<Recentwork />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
