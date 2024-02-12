import "./global.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DayDisplay from "./pages/DayDisplay/DayDisplay";
import WeekDisplay from "./pages/WeekDisplay/WeekDisplay";
import MonthDisplay from "./pages/MonthDisplay/MonthDisplay";

function App() {
  return (
    <>
      <section className="overlay"></section>
      <section className="content">
        <header>
          <h1>Event Calendar</h1>
        </header>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MonthDisplay />} />
            <Route
              path="/day-display/:monthIndex?/:date?"
              element={<DayDisplay />}
            />
            <Route
              path="/week-display/:monthIndex?/:date?"
              element={<WeekDisplay />}
            />
            <Route path="/month-display/:index?" element={<MonthDisplay />} />
          </Routes>
        </BrowserRouter>
      </section>
    </>
  );
}

export default App;
