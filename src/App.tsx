import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SeudeumePage from "./pages/SeudeumePage";
import Mainpage from "./pages/Mainpage";
import Weddinghalls from "./pages/Weddinghalls";
import InvitationPage from "./pages/InvitationPage";
import GuidePage from "./pages/MainPage/GuidePage";
import Planner from "./pages/MainPage/Planner";
import HallDetail from "./pages/Weddinghalls/HallDetail";
import BottomNavbar from "./components/Mainpage/BottomNavbar";
import SeudeumeInfo from "./components/Seudeume/SeudeumeInfo";


function App() {
  return (
    <Router>
      <div className="flex flex-col items-center">
        <Header />
        <Routes>
          <Route path="/" element={<Mainpage />} />
          <Route path="/weddinghalls" element={<Weddinghalls />} />
          <Route path="/Seudeume" element={<SeudeumePage />} />
          <Route path="/Invitation" element={<InvitationPage />} />
          <Route path="/Guide" element={<GuidePage />} />
          <Route path="/Planner" element={<Planner />} />

          <Route path="/HallDetail/:id" element={<HallDetail />} />

          <Route path="/SeudeumeInfo" element={<SeudeumeInfo />} />
        </Routes>
        <BottomNavbar />
      </div>
    </Router>
  );
}

export default App;
