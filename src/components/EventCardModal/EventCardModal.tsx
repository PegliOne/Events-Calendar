import styles from "./EventCardModal.module.scss";

interface EventCardModalProps {
  eventName: String;
  startTime: String;
  endTime: String;
  location: String;
  address?: String;
  url?: String;
  label: String;
  closeModal: () => void;
}

const EventCardModal = ({
  eventName,
  startTime,
  endTime,
  location,
  address,
  url,
  label,
  closeModal,
}: EventCardModalProps) => {
  return (
    <section className={styles.modal}>
      <section className={styles.modal__content}>
        <div className={styles.modal__header}>
          <h3 className={styles.header__heading}>{eventName}</h3>
          <button className={styles.header__closeButton} onClick={closeModal}>
            x
          </button>
        </div>
        <div>
          <p>
            <span>Start Time:</span> {startTime}
          </p>
          <p>
            <span>End Time:</span> {endTime}
          </p>
          {location === "online" ? (
            <p>
              <span>URL:</span> {url}
            </p>
          ) : (
            <p>
              <span>Address:</span> {address}
            </p>
          )}
          <p>Label: {label}</p>
        </div>
      </section>
    </section>
  );
};

export default EventCardModal;
