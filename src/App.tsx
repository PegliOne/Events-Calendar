import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DayDisplay from "./pages/DayDisplay";
import WeekDisplay from "./pages/WeekDisplay";
import MonthDisplay from "./pages/MonthDisplay";
import YearDisplay from "./pages/YearDisplay";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/day-display" element={<DayDisplay />} />
          <Route path="/week-display" element={<WeekDisplay />} />
          <Route path="/month-display" element={<MonthDisplay />} />
          <Route path="/year-display" element={<YearDisplay />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
