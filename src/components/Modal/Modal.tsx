import styles from "./Modal.module.scss";

interface ModalProps {
  date: string;
}

const Modal = ({ date }: ModalProps) => {
  return (
    <section className={styles.modal}>
      <span>{date}</span>
      <button className={styles.modal__closeButton}>x</button>
    </section>
  );
};

export default Modal;
