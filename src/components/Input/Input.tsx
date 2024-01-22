import styles from "./Input.module.scss";
import { formatLabel } from "../../utils/form-utils";

interface InputProps {
  type: string;
  name: string;
  placeholder?: string;
  isRequired?: boolean;
}

const Input = ({ type, name, placeholder, isRequired }: InputProps) => {
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
      />
    </div>
  );
};

export default Input;
