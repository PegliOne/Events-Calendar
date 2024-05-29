import styles from "./Modal.module.scss";
import EventForm from "../EventForm/EventForm";
import EventDetails from "../EventDetails/EventDetails";

interface ModalProps {
  content: string;
  closeModal: () => void;
}

const Modal = ({ content, closeModal }: ModalProps) => {
  return (
    <section className={styles.modal}>
      <section className={styles.modal__content}>
        <div className={styles.modal__header}>
          <h3 className={styles.header__heading}>
            {content === "eventForm" ? "Create A New Event" : "Mock Event"}
          </h3>
          <button className={styles.header__closeButton} onClick={closeModal}>
            x
          </button>
        </div>
        {content === "eventForm" ? (
          <EventForm />
        ) : (
          <EventDetails
            eventName={"Mock Event"}
            startTime={"May 14th: 2:00pm"}
            endTime={"May 14th: 4:00pm"}
            location={"online"}
            url="https://www.url.com"
            label={"Social"}
            closeModal={closeModal}
          />
        )}
      </section>
    </section>
  );
};

export default Modal;
