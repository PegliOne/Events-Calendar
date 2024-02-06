import styles from "./Input.module.scss";
import { formatLabel } from "../../utils/form-utils";

interface InputProps {
  type: string;
  name: string;
  placeholder?: string;
  isRequired?: boolean;
  clearMessage: () => void;
}

const Input = ({
  type,
  name,
  placeholder,
  isRequired,
  clearMessage,
}: InputProps) => {
  const id = name + "Input";

  return (
    <div className={styles.input}>
      <label className={styles.input__label} htmlFor={id}>
        {formatLabel(name)}:
      </label>
      <input
        className={styles.input__field}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        required={isRequired}
        onClick={clearMessage}
      />
    </div>
  );
};

export default Input;
