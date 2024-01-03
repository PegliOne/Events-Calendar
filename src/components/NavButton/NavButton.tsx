import styles from "./NavButton.module.scss";

interface NavButtonProps {
  direction: string;
  showButton: boolean;
  updateIndex: (value: number) => void;
}

const NavButton = ({ direction, showButton, updateIndex }: NavButtonProps) => {
  const value = direction === "left" ? -1 : 1;

  return (
    <div className={styles.navButton}>
      {showButton && (
        <button
          className={styles.navButton__button}
          onClick={() => updateIndex(value)}
        >
          <img
            className={styles.navButton__icon}
            src={`/${direction}-caret.svg`}
            alt={`${direction} button`}
          />
        </button>
      )}
    </div>
  );
};

export default NavButton;
