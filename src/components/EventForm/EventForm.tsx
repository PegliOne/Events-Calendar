import styles from "./EventForm.module.scss";
import { useRef } from "react";
import Input from "../Input/Input";
import Select from "../Select/Select";

const EventForm = () => {
  const formRef = useRef(null);

  const events = new Array();

  const submitForm = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const eventForm = formRef.current!;
    const eventData = new FormData(eventForm);

    const newEvent = {
      eventName: eventData.get("eventName"),
      startTime: eventData.get("startTime"),
      endTime: eventData.get("endTime"),
      location: eventData.get("location"),
      address: eventData.get("address"),
      url: eventData.get("url"),
      label: eventData.get("label"),
    };

    events.push(newEvent);
    console.log(events);
  };

  return (
    <form className={styles.form} onSubmit={submitForm} ref={formRef}>
      <div className={styles.form__error}>
        Error: Event start or end times cannot be in the past
      </div>
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
      <div className={styles.form__submit}>
        <button className={styles.submit__button} type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default EventForm;
