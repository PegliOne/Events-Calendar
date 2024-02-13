import styles from "./EventCard.module.scss";

interface EventCardProps {
  name: string;
  time: string;
}

const EventCard = ({ name, time }: EventCardProps) => {
  return (
    <div className={styles.card}>
      {time}: {name}
    </div>
  );
};

export default EventCard;
