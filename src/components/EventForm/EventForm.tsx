import styles from "./EventForm.module.scss";
import Input from "../Input/Input";
import Select from "../Select/Select";

const EventForm = () => {
  return (
    <form className={styles.modal__form}>
      <Input
        type="text"
        name="eventName"
        placeholder="Christmas Party"
        isRequired={true}
      />
      <Input type="datetime-local" name="startTime" isRequired={true} />
      <Input type="datetime-local" name="endTime" isRequired={true} />
      <Select
        name="location"
        options={["online", "inPerson"]}
        isRequired={true}
      />
      <Input type="text" name="address" placeholder="123 Example Street" />
      <Input type="url" name="url" placeholder="https://www.url.com" />
      <Select name="label" options={["work", "social", "personal"]} />
    </form>
  );
};

export default EventForm;
