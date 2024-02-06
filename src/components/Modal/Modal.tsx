import styles from "./Modal.module.scss";
import EventForm from "../EventForm/EventForm";

interface ModalProps {
  closeModal: () => void;
}

const Modal = ({ closeModal }: ModalProps) => {
  return (
    <section className={styles.modal}>
      <section className={styles.modal__content}>
        <div className={styles.modal__header}>
          <h3 className={styles.header__heading}>Create A New Event</h3>
          <button className={styles.header__closeButton} onClick={closeModal}>
            x
          </button>
        </div>
        <EventForm />
      </section>
    </section>
  );
};

export default Modal;
