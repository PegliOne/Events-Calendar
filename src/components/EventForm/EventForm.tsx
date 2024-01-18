import styles from "./EventForm.module.scss";

const EventForm = () => {
  return (
    <form className={styles.modal__form}>
      <div className={styles.form__field}>
        <label className={styles.field__label} htmlFor="eventNameInput">
          Event Name:
        </label>
        <input
          className={styles.field__input}
          type="text"
          id="eventNameInput"
          name="eventName"
          placeholder="Christmas Party"
        />
      </div>
      <div className={styles.form__field}>
        <label className={styles.field__label} htmlFor="startDateInput">
          Start Date:
        </label>
        <input
          className={styles.field__input}
          type="date"
          id="startDateInput"
          name="startDate"
        />
      </div>
      <div className={styles.form__field}>
        <label className={styles.field__label} htmlFor="endDateInput">
          End Date:
        </label>
        <input
          className={styles.field__input}
          type="date"
          id="endDateInput"
          name="endDate"
        />
      </div>
      <div className={styles.form__field}>
        <label className={styles.field__label} htmlFor="locationSelect">
          Location:
        </label>
        <select
          className={styles.field__select}
          id="locationSelect"
          name="location"
        >
          <option value="online">Online</option>
          <option value="inPerson">In-Person</option>
        </select>
      </div>
      <div className={styles.form__field}>
        <label className={styles.field__label} htmlFor="addressInput">
          Address:
        </label>
        <input
          className={styles.field__input}
          type="text"
          id="addressInput"
          name="address"
        />
      </div>
      <div className={styles.form__field}>
        <label className={styles.field__label} htmlFor="addressInput">
          Address:
        </label>
        <input
          className={styles.field__input}
          type="text"
          id="addressInput"
          name="address"
        />
      </div>
      <div className={styles.form__field}>
        <label className={styles.field__label} htmlFor="url">
          URL:
        </label>
        <input
          className={styles.field__input}
          type="text"
          id="urlInput"
          name="url"
        />
      </div>
      <div className={styles.form__field}>
        <label className={styles.field__label} htmlFor="labelSelect">
          Label:
        </label>
        <select
          className={styles.field__select}
          id="locationSelect"
          name="location"
        >
          <option value="work">Work</option>
          <option value="social">Social</option>
          <option value="person">Personal</option>
        </select>
      </div>
    </form>
  );
};

export default EventForm;
