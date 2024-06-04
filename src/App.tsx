import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SeudeumePage from "./pages/SeudeumePage";
import Mainpage from "./pages/Mainpage";
import Weddinghalls from "./pages/Weddinghalls";
import InvitationPage from "./pages/InvitationPage";
import GuidePage from "./pages/MainPage/GuidePage";

function App() {
  return (
    <Router>
      <div className="flex flex-col items-center">
        <Header />
        <Routes>
          <Route path="/weddinghalls" element={<Weddinghalls />} />
          <Route path="/" element={<Mainpage />} />
          <Route path="/Seudeume" element={<SeudeumePage />} />
          <Route path="/Invitation" element={<InvitationPage />} />
          <Route path="/Guide" element={<GuidePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
