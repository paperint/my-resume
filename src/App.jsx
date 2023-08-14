import "./App.css";
import Homepage from "./pages/Homepage";
import Recentwork from "./pages/Recentwork";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThemeProvider from "./Context/themeContext";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Recentworks" element={<Recentwork />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
