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
        <span className={styles.header__date}>{date}</span>
        <button className={styles.header__closeButton} onClick={closeModal}>
          x
        </button>
      </div>
      <div className={styles.modal__error}>
        Error: Event dates cannot be in the past
      </div>
      <EventForm />
    </section>
  );
};

export default Modal;
