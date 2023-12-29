import styles from "./Modal.module.scss";

interface ModalProps {
  date: string;
  closeModal: () => void;
}

const Modal = ({ date, closeModal }: ModalProps) => {
  return (
    <section className={styles.modal}>
      <span>{date}</span>
      <button className={styles.modal__closeButton} onClick={closeModal}>
        x
      </button>
    </section>
  );
};

export default Modal;
