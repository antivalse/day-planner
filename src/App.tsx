import "./assets/scss/App.scss";
import { Routes, Route } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import Homepage from "./pages/Homepage";
import DailyPlanPage from "./pages/DailyPlanPage";

function App() {
  return (
    <>
      <div id="container">
        <Routes>
          <Route path="*" element={<NotFoundPage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/today" element={<DailyPlanPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
