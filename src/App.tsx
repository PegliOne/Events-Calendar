import "./global.scss";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DayDisplay from "./pages/DayDisplay/DayDisplay";
import WeekDisplay from "./pages/WeekDisplay/WeekDisplay";
import MonthDisplay from "./pages/MonthDisplay/MonthDisplay";
import Overlay from "./components/Overlay/Overlay";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState("eventForm");

  const openModal = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation();
    const eventTargetId = e.currentTarget.getAttribute("id");
    if (eventTargetId) {
      if (/event-card/.test(eventTargetId)) {
        setModalContent("eventDetails");
      } else {
        setModalContent("eventForm");
      }
    }
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Overlay showOverlay={showModal} closeModal={closeModal} />
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
                  modalContent={modalContent}
                  openModal={openModal}
                  closeModal={closeModal}
                />
              }
            />
            <Route
              path="/day-display/:monthIndex?/:date?"
              element={
                <DayDisplay
                  showModal={showModal}
                  openModal={openModal}
                  closeModal={closeModal}
                />
              }
            />
            <Route
              path="/week-display/:monthIndex?/:date?"
              element={
                <WeekDisplay
                  showModal={showModal}
                  openModal={openModal}
                  closeModal={closeModal}
                />
              }
            />
            <Route
              path="/month-display/:index?"
              element={
                <MonthDisplay
                  showModal={showModal}
                  modalContent={modalContent}
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
