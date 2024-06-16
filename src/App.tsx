import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SeudeumePage from "./pages/SeudeumePage";
import Mainpage from "./pages/Mainpage";
import Weddinghalls from "./pages/Weddinghalls";
import InvitationPage from "./pages/InvitationPage";
import GuidePage from "./pages/MainPage/GuidePage";
import Planner from "./pages/MainPage/Planner";

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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
