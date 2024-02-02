import styles from "./EventForm.module.scss";
import { useRef, useState } from "react";
import { addEvent } from "../../services/event-service";
import Input from "../Input/Input";
import Select from "../Select/Select";

const EventForm = () => {
  const formRef = useRef(null);

  const [error, setError] = useState("");

  const validateStartTime = (currentTime: Date, startTime: number) => {
    if (currentTime.getTime() > startTime) {
      setError("Error: Event start time cannot be in the past");
      return false;
    }

    return true;
  };

  const validateEndTime = (
    startTime: number,
    endTime: number,
    minEventTimeInSeconds: number
  ) => {
    if (startTime + minEventTimeInSeconds > endTime) {
      setError(
        `Error: Event cannot end less than ${
          minEventTimeInSeconds / 60
        } minutes after start time`
      );
      return false;
    }

    return true;
  };

  const validateEventData = (
    currentTime: Date,
    startTime: number,
    endTime: number,
    minEventTimeInSeconds: number
  ) => {
    const hasValidEndTime = validateEndTime(
      startTime,
      endTime,
      minEventTimeInSeconds
    );
    const hasValidStartTime = validateStartTime(currentTime, startTime);

    return hasValidStartTime && hasValidEndTime;
  };

  const submitForm = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const eventForm = formRef.current!;
    const eventData = new FormData(eventForm);

    const currentTime = new Date();

    const startTimeFormValue = eventData.get("startTime");
    const startTime = Date.parse(String(startTimeFormValue));

    const endTimeFormValue = eventData.get("endTime");
    const endTime = Date.parse(String(endTimeFormValue));

    const minEventTimeInSeconds = 15 * 60;

    const hasValidEventData = validateEventData(
      currentTime,
      startTime,
      endTime,
      minEventTimeInSeconds
    );

    if (!hasValidEventData) {
      return;
    }

    // Add minLength and maxLength values
    // Add min and max values for dates

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
      <div className={styles.form__error}>{error}</div>
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
