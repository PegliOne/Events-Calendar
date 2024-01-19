import { formatLabel } from "../../utils/form-utils";
import styles from "./Select.module.scss";

interface SelectProps {
  name: string;
  options: string[];
  isRequired?: boolean;
}

const Select = ({ name, options, isRequired }: SelectProps) => {
  const id = name + "Select";

  const formatOption = (camelCaseStr: string) => {
    const option = camelCaseStr.replace(/[A-Z]/g, "-$&");
    return option[0].toUpperCase() + option.slice(1);
  };

  return (
    <div className={styles.form__field}>
      <label className={styles.field__label} htmlFor={id}>
        {formatLabel(name)}:
      </label>
      <select
        className={styles.field__select}
        id={id}
        name={name}
        required={isRequired}
      >
        {!isRequired && <option value="">Select an Option</option>}
        {options.map((option) => (
          <option key={option} value={option}>
            {formatOption(option)}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
