import styles from "./EventCard.module.scss";

interface EventCardProps {
  name: string;
  time: string;
  openModal: (e: React.MouseEvent<Element, MouseEvent>) => void;
}

const EventCard = ({ name, time, openModal }: EventCardProps) => {
  return (
    <div
      id={`event-card-${name}`}
      className={styles.card}
      onClick={(e) => openModal(e)}
    >
      {time}: {name}
    </div>
  );
};

export default EventCard;
