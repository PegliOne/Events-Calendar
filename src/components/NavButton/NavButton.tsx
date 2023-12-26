import styles from "./NavButton.module.scss";

interface NavButtonProps {
  direction: string;
  showButton: boolean;
  updateIndex: (value: number) => void;
}

const NavButton = ({ direction, showButton, updateIndex }: NavButtonProps) => {
  return (
    <div className={styles.navButton}>
      {showButton && (
        <button
          className={styles.navButton__button}
          onClick={() => updateIndex(1)}
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
