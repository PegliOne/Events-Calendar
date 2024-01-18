import styles from "./Input.module.scss";

interface InputProps {
  type: string;
  label: string;
  name: string;
  placeholder?: string;
}

const Input = ({ type, label, name, placeholder }: InputProps) => {
  const id = name + "Input";

  return (
    <div className={styles.form__field}>
      <label className={styles.field__label} htmlFor={id}>
        {label}:
      </label>
      <input
        className={styles.field__input}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
