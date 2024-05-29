import styles from "./EventDetails.module.scss";

interface EventDetailsProps {
  eventName: String;
  startTime: String;
  endTime: String;
  location: String;
  address?: String;
  url?: String;
  label: String;
  closeModal: () => void;
}

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
  );
};

export default EventDetails;
