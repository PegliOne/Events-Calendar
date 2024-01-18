import styles from "./EventForm.module.scss";
import Input from "../Input/Input";
import Select from "../Select/Select";

const EventForm = () => {
  return (
    <form className={styles.modal__form}>
      <Input
        type="text"
        label="Event Name"
        name="eventName"
        placeholder="Christmas Party"
      />
      <Input type="datetime-local" label="Start Time" name="startTime" />
      <Input type="datetime-local" label="End Time" name="endTime" />
      <Select
        label="Location"
        name="location"
        options={["online", "in-person"]}
      />
      <Input
        type="text"
        label="Address"
        name="address"
        placeholder="123 Fake Street, Fake Suburb"
      />
      <Input
        type="url"
        label="URL"
        name="url"
        placeholder="https://www.url.com"
      />
      <Select
        label="Label"
        name="label"
        options={["work", "social", "personal"]}
      />
    </form>
  );
};

export default EventForm;
