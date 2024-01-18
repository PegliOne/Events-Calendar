import styles from "./Select.module.scss";

interface SelectProps {
  label: string;
  name: string;
  options: string[];
}

const Select = ({ label, name, options }: SelectProps) => {
  const id = name + "Select";

  return (
    <div className={styles.form__field}>
      <label className={styles.field__label} htmlFor={id}>
        {label}:
      </label>
      <select className={styles.field__select} id={id} name={name}>
        {options.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
