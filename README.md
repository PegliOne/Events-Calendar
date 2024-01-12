# Event Calendar

Hosted Site: https://teal-cranachan-824867.netlify.app/

## Summary

A calendar app for tracking events created using TypeScript.js and React.js. Features include day, week and month displays.

## Technologies Used

- SASS / SCSS
- TypeScript.js / React.js
- Git Version Control
- Java / Spring (will be used to add upcoming features)

## Instructions

### Installation

To install and run the app enter `npm install`, then `npm run dev` in the command line (from inside the project's root directory) and navigate to the provided localhost port in the browser.

### Navigation

The month display will be show by default. The URL paths "/day-display", "/week-display" and "/month-display" can be used to access the day, week and month displays respectively.

A date can be selected for the day and week displays by adding a month index (starting at 0) and a date to the path (e.g. "/day-display/0/1" will display the 1st of January and "/week-display/0/1" will display the week containing the 1st of January). A month can be selected for the month display by adding a month index to the path (e.g. "/month-display/0" will show January).

### Links

On the day display and week display pages, clicking the month name will take the user to the corresponding month display. On the week and month display pages clicking a date will take the user to the corresponding day display. The week display pages can be accessed via the "Show Full Week" links on the day display pages and the "Show Week" links on the month display pages.

### Modals

The modals on the week display and month display pages can be viewed by clicking on the squares containing the dates (but not the dates themselves since these direct the user to the corresponding day display page). The modals can be closed by clicking the "x" button.

## Current Features

### General

- Responsive design
- Current day highlighting (i.e. the current day is highlighted by having a different colour to other displayed days)

### Day Display

- Navigation between days within a month
- Links to the week and month displays corresponding to the week / month of the selected day

### Week Display

- Navigation between weeks within a month
- Modals for each day in the week
- Links to the corresponding day display for each day in the week
- Links to month displays corresponding to the month of the selected week

### Month Display

- Navigation between months within a year
- Modals for each day in the month
- Links to the corresponding day / week displays for each day / week in the month

## Upcoming Features

- Adding events to the calendar using the currently empty day modals
- Showing the days of the week (Monday, Tuesday, Wednesday, etc.) and aligning the days with them
- Navigating beyond the selected month / year
