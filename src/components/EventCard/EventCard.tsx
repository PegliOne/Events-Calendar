import styles from "./EventCard.module.scss";

interface EventCardProps {
  event: EventProps;
  openModal: (
    e: React.MouseEvent<Element, MouseEvent>,
    event?: EventProps
  ) => void;
  openEventDetailsModal: (
    e: React.MouseEvent<Element, MouseEvent>,
    event: EventProps
  ) => void;
}

interface EventProps {
  eventName: string;
  startTime: Date;
  endTime: Date;
  location?: string;
  url?: string;
  label?: string;
}

const formatStartTime = (startTime?: Date) => {
  if (startTime) {
    return startTime
      .toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      })
      .replace(" ", "")
      .toLowerCase();
  } else {
    return "string";
  }
};

const EventCard = ({ event, openEventDetailsModal }: EventCardProps) => {
  return (
    <div
      id={`event-card-${event.eventName}`}
      className={styles.card}
      onClick={(e) => openEventDetailsModal(e, event)}
    >
      {formatStartTime(event.startTime)}: {event.eventName}
    </div>
  );
};

export default EventCard;
