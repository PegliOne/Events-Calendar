import styles from "./Overlay.module.scss";

interface OverlayProps {
  showOverlay: boolean;
  closeModal: () => void;
}

const Overlay = ({ showOverlay, closeModal }: OverlayProps) => {
  let overlayStyles = styles.overlay;
  if (showOverlay) {
    overlayStyles += ` ${styles.overlay_show}`;
  }

  return <section className={overlayStyles} onClick={closeModal}></section>;
};

export default Overlay;
