import styles from "./EventDetails.module.scss";

interface EventDetailsProps {
  eventName: String;
  startTime: Date;
  endTime: Date;
  location?: String;
  address?: String;
  url?: String;
  label?: String;
  closeModal: () => void;
}

const formatStartTime = (startTime: Date) => {
  return startTime
    .toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    })
    .replace(" ", "")
    .toLowerCase();
};

const EventDetails = ({
  startTime,
  endTime,
  location,
  address,
  url,
  label,
}: EventDetailsProps) => {
  return (
    <div className={styles.details}>
      <p>
        <span className={styles.details__span}>Start Time:</span>{" "}
        {formatStartTime(startTime)}
      </p>
      <p>
        <span className={styles.details__span}>End Time:</span>{" "}
        {formatStartTime(endTime)}
      </p>
      {location === "online" ? (
        <p>
          <span className={styles.details__span}>URL:</span> {url}
        </p>
      ) : (
        <p>
          <span className={styles.details__span}>Address:</span> {address}
        </p>
      )}
      <p>
        <span className={styles.details__span}>Label:</span> {label}
      </p>
    </div>
  );
};

export default EventDetails;
