(() => {
  // === ДИНАМИЧЕСКИЕ СТИЛИ ===
  const style = document.createElement("style");
  style.textContent = `
    .mycal-wrap {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 1rem;
      user-select: none;
      font-family: Arial, sans-serif;
      padding: 0 20px;
    }
    .mycal-calendar {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      padding: 0.5rem 0;
      flex-grow: 1;
      margin-bottom: 10rem;
      margin-top: 5rem;
      -webkit-overflow-scrolling: touch;
      scrollbar-width: none;
    }
    .mycal-calendar::-webkit-scrollbar {
      display: none;
    }
    .mycal-day {
      text-align: center;
      padding: 0.5rem;
      cursor: pointer;
      min-width: 50px;
      scroll-snap-align: center;
      transition: background 0.2s, color 0.2s;
      border-radius: 50%;
      user-select: none;
      flex-shrink: 0;
    }
    .mycal-day:hover {
      background: #eee;
    }
    .mycal-day.mycal-selected {
      background: #eee;
      color: black;
      font-weight: bold;
    }
    .mycal-day.mycal-weekend {
      color: red;
    }
    .mycal-month-label {
      font-size: 0.7rem;
      color: gray;
      text-align: center;
      margin-bottom: 0.25rem;
      text-transform: capitalize;
    }

    .mycal-schedule {
      position: absolute;
      margin-top: 5rem;
      text-align: center;
      font-size: 0.95rem;
      padding-top: 0.5rem;
      width: 100%;
      max-width: 600px;
    }

    .mycal-schedule-item {
      margin: 0.5rem 0;
    }

    .mycal-time {
      color: orange;
      font-weight: bold;
    }

    @media screen and (max-width: 1024px) {
      .mycal-wrap {
        margin-top: 0.8rem;
      }
      
      .mycal-calendar {
        margin-bottom: 8rem;
        margin-top: 4rem;
      }
      
      .mycal-schedule {
        margin-top: 4rem;
        font-size: 0.9rem;
      }
    }

    @media screen and (max-width: 768px) {
      .mycal-wrap {
        margin-top: 0.6rem;
        padding: 0 15px;
      }
      
      .mycal-calendar {
        margin-bottom: 6rem;
        margin-top: 3rem;
        gap: 0.8rem;
      }
      
      .mycal-day {
        min-width: 45px;
        padding: 0.4rem;
      }
      
      .mycal-month-label {
        font-size: 0.65rem;
      }
      
      .mycal-schedule {
        margin-top: 3rem;
        font-size: 0.85rem;
        padding: 0 10px;
      }
    }

    @media screen and (max-width: 480px) {
      .mycal-wrap {
        margin-top: 0.4rem;
        padding: 0 10px;
      }
      
      .mycal-calendar {
        margin-bottom: 5rem;
        margin-top: 2rem;
        gap: 0.6rem;
      }
      
      .mycal-day {
        min-width: 40px;
        padding: 0.3rem;
      }
      
      .mycal-month-label {
        font-size: 0.6rem;
      }
      
      .mycal-schedule {
        margin-top: 2rem;
        font-size: 0.8rem;
        padding: 0 5px;
      }
      
      .mycal-schedule-item {
        margin: 0.4rem 0;
      }
    }
  `;
  document.head.appendChild(style);

  // === ИНИЦИАЛИЗАЦИЯ КАЛЕНДАРЯ ===
  const scheduleData = {
    2: [
      // Вторник
      { time: "7:15", title: "Утренняя молитва" },
      { time: "17:00", title: "Молодёжная молитва" },
    ],
    3: [
      // Среда
      { time: "18:00", title: "Вечернее Богослужение" },
    ],
    4: [
      // Четверг
      { time: "16:00", title: "Домашняя группа Вениамин Ильков" },
    ],
    5: [
      // Пятница
      { time: "18:30", title: "Репетиция прославления" },
    ],
    6: [
      // Суббота
      { time: "", title: "Скоро будет Альфа" },
    ],
    0: [
      // Воскресенье
      { time: "10:00", title: "Утреннее Богослужение" },
      { time: "14:00", title: "Молодёжное Богослужение" },
    ],
  };

  // === ИНИЦИАЛИЗАЦИЯ ===
  const container = document.querySelector(".calendar-container");
  if (!container) {
    console.warn("Элемент .calendar-container не найден!");
    return;
  }

  const calendarWrap = document.createElement("div");
  calendarWrap.className = "mycal-wrap";

  const calendar = document.createElement("div");
  calendar.className = "mycal-calendar";

  const scheduleBlock = document.createElement("div");
  scheduleBlock.className = "mycal-schedule";

  calendarWrap.append(calendar, scheduleBlock);
  container.appendChild(calendarWrap);

  let selectedDate = null;
  let currentDate = new Date();

  function renderSchedule(date) {
    const weekday = date.getDay();
    const events = scheduleData[weekday] || [];
    scheduleBlock.innerHTML = "";

    if (events.length === 0) return;

    events.forEach((event) => {
      const div = document.createElement("div");
      div.className = "mycal-schedule-item";
      div.innerHTML = event.time
        ? `<span class="mycal-time">${event.time}</span> – ${event.title}`
        : `${event.title}`;
      scheduleBlock.appendChild(div);
    });
  }

  function renderCalendar(baseDate) {
    calendar.innerHTML = "";
    const days = [];

    const startDate = new Date(baseDate);
    startDate.setDate(startDate.getDate() - 6);

    for (let i = 0; i < 21; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);

      const dayEl = document.createElement("div");
      dayEl.className = "mycal-day";

      const isWeekend = date.getDay() === 0 || date.getDay() === 6;
      if (isWeekend) dayEl.classList.add("mycal-weekend");

      dayEl.innerHTML = `
        <div class="mycal-month-label">${date.toLocaleString("ru", { month: "long" })}</div>
        <div>${date.getDate()}</div>
        <div class="mycal-weekday-label">${date.toLocaleString("ru", { weekday: "short" })}</div>
      `;

      dayEl.addEventListener("click", () => {
        if (selectedDate) selectedDate.classList.remove("mycal-selected");
        dayEl.classList.add("mycal-selected");
        selectedDate = dayEl;
        renderSchedule(date);
      });

      if (date.toDateString() === new Date().toDateString()) {
        dayEl.classList.add("mycal-selected");
        selectedDate = dayEl;
        renderSchedule(date);
      }

      days.push(dayEl);
    }

    days.forEach((day) => calendar.appendChild(day));
  }

  renderCalendar(currentDate);
})();
