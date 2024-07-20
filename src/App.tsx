import "./assets/scss/App.scss";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import Homepage from "./pages/Homepage";
import DailyPlanPage from "./pages/DailyPlanPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div id="container">
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/today/:username" element={<DailyPlanPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
