import styles from "./EventForm.module.scss";
import { useRef } from "react";
import { addEvent } from "../../services/event-service";
import Input from "../Input/Input";
import Select from "../Select/Select";

const EventForm = () => {
  const formRef = useRef(null);

  const submitForm = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const eventForm = formRef.current!;
    const eventData = new FormData(eventForm);

    const currentTime = new Date();

    const startTimeFormValue = eventData.get("startTime");
    const startTime = Date.parse(String(startTimeFormValue));

    const endTimeFormValue = eventData.get("endTime");
    const endTime = Date.parse(String(endTimeFormValue));

    // Move Validations to separate functions
    // Add minLength and maxLength values
    // Add min and max values for dates

    // Validate start time after present time

    if (currentTime.getTime() > startTime) {
      console.log("Error: Event start time cannot be in the past");
      return;
    }

    // Validate end date at least 15 minutes after start date

    const minEventTimeInSeconds = 15 * 60;

    if (startTime + minEventTimeInSeconds > endTime) {
      console.log(
        `Error: Event end time must be at least ${
          minEventTimeInSeconds / 60
        } minutes after event start time`
      );
      return;
    }

    const newEvent = {
      eventName: eventData.get("eventName"),
      startTime: eventData.get("startTime"),
      endTime: eventData.get("endTime"),
      location: eventData.get("location"),
      address: eventData.get("address"),
      url: eventData.get("url"),
      label: eventData.get("label"),
    };

    addEvent(newEvent);
    console.log("Event Created");
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
