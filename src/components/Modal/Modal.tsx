import styles from "./Modal.module.scss";
import EventForm from "../EventForm/EventForm";

interface ModalProps {
  date: string;
  closeModal: () => void;
}

const Modal = ({ date, closeModal }: ModalProps) => {
  return (
    <section className={styles.modal}>
      <div className={styles.modal__header}>
        <h3 className={styles.header__heading}>{date}</h3>
        <button className={styles.header__closeButton} onClick={closeModal}>
          x
        </button>
      </div>
      <EventForm />
    </section>
  );
};

export default Modal;
