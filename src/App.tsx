import "./global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DayDisplay from "./pages/DayDisplay/DayDisplay";
import WeekDisplay from "./pages/WeekDisplay/WeekDisplay";
import MonthDisplay from "./pages/MonthDisplay/MonthDisplay";
import YearDisplay from "./pages/YearDisplay/YearDisplay";

function App() {
  return (
    <>
      <header>
        <h1>Event Calendar</h1>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MonthDisplay />} />
          <Route path="/day-display" element={<DayDisplay />} />
          <Route path="/week-display" element={<WeekDisplay />} />
          <Route path="/month-display/:index?" element={<MonthDisplay />} />
          <Route path="/year-display" element={<YearDisplay />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
