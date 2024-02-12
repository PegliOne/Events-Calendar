import "./global.scss";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DayDisplay from "./pages/DayDisplay/DayDisplay";
import WeekDisplay from "./pages/WeekDisplay/WeekDisplay";
import MonthDisplay from "./pages/MonthDisplay/MonthDisplay";

function App() {
  const [showModal, setShowModal] = useState(false);

  let overlayStyles = "overlay";
  if (showModal) {
    overlayStyles += " overlay_show";
  }

  const overlay = document.querySelector(".overlay");

  const openModal = () => {
    setShowModal(true);
    overlay?.classList.add("overlay_show");
  };

  const closeModal = () => {
    setShowModal(false);
    overlay?.classList.remove("overlay_show");
  };

  overlay?.addEventListener("click", () => console.log("Hello"));

  return (
    <>
      <section className={overlayStyles}></section>
      <section className="content">
        <header>
          <h1>Event Calendar</h1>
        </header>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <MonthDisplay
                  showModal={showModal}
                  openModal={openModal}
                  closeModal={closeModal}
                />
              }
            />
            <Route
              path="/day-display/:monthIndex?/:date?"
              element={<DayDisplay />}
            />
            <Route
              path="/week-display/:monthIndex?/:date?"
              element={<WeekDisplay />}
            />
            <Route
              path="/month-display/:index?"
              element={
                <MonthDisplay
                  showModal={showModal}
                  openModal={openModal}
                  closeModal={closeModal}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </section>
    </>
  );
}

export default App;
