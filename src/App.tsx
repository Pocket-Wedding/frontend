import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SeudeumePage from "./pages/SeudeumePage";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          {/* 나중에 여기에 메인페이지 넣읍시다 */}
          <Route path="/" element={<SeudeumePage />} />
          <Route path="/Seudeume" element={<SeudeumePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
