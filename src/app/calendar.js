// calendarStyles.js
function addCalendarStyles() {
  const style = document.createElement("style");
  document.head.appendChild(style);
  const sheet = style.sheet;

  sheet.insertRule(
    `.calendar {
    width: 90%;
    max-width: 900px;
    margin: 30px auto;
    font-family: sans-serif;
    overflow-x: hidden;
  }`,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `.header {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    margin-bottom: 10px;
  }`,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `#days {
    display: flex;
    overflow-x: auto;
    gap: 15px;
  }`,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `.day {
    min-width: 60px;
    padding: 10px;
    text-align: center;
    border-radius: 30px;
    cursor: pointer;
    transition: 0.3s;
  }`,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `.day.active {
    background: #6d6d6d;
    color: #fff;
    opacity: 0.5;
  }`,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `.events {
    margin-top: 20px;
    font-size: 16px;
  }`,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `::-webkit-scrollbar {
    display: none;
  }`,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `.orange {
    color: orange;
    font-weight: bold;
  }`,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `.event-time {
    color: orange;
    font-weight: bold;
  }`,
    sheet.cssRules.length
  );
}

addCalendarStyles();
