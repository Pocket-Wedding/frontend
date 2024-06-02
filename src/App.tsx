import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SeudeumePage from "./pages/SeudeumePage";
import Mainpage from "./pages/Mainpage";
import Weddinghalls from "./pages/Weddinghalls";
import InvitationPage from "./pages/InvitationPage";


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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
