import styles from "./Modal.module.scss";
import EventForm from "../EventForm/EventForm";
import EventDetails from "../EventDetails/EventDetails";

interface ModalProps {
  event: EventProps;
  closeModal: () => void;
}

interface EventProps {
  eventName: string;
  startTime: Date;
  endTime: Date;
  location?: string;
  url?: string;
  label?: string;
}

const Modal = ({ event, closeModal }: ModalProps) => {
  return (
    <section className={styles.modal}>
      <section className={styles.modal__content}>
        <div className={styles.modal__header}>
          <h3 className={styles.header__heading}>
            {event.eventName !== "" ? event.eventName : "Create A New Event"}
          </h3>
          <button className={styles.header__closeButton} onClick={closeModal}>
            x
          </button>
        </div>
        {event.eventName !== "" ? (
          <EventDetails
            eventName={event.eventName}
            startTime={event.startTime}
            endTime={event.endTime}
            location={event.location}
            url={event.url}
            label={event.label}
            closeModal={closeModal}
          />
        ) : (
          <EventForm />
        )}
      </section>
    </section>
  );
};

export default Modal;
