export const addEvent = (event: Object) => {
  const storedEvents = localStorage.getItem("events") ?? "";
  const events = storedEvents ? JSON.parse(storedEvents) : new Array();
  events.push(event);
  localStorage.setItem("events", JSON.stringify(events));
  console.log(localStorage.getItem("events"));
};
