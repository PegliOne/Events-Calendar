import styles from "./Input.module.scss";
import { formatLabel } from "../../utils/form-utils";

interface InputProps {
  type: string;
  name: string;
  placeholder?: string;
  isRequired?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: string;
  max?: string;
  clearMessage: () => void;
}

const Input = ({
  type,
  name,
  placeholder,
  isRequired,
  minLength,
  maxLength,
  min,
  max,
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
        minLength={minLength}
        maxLength={maxLength}
        min={min}
        max={max}
        onClick={clearMessage}
      />
    </div>
  );
};

export default Input;
