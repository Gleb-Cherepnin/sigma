//КНОПКИ МЕНЮ ШАПКА
function setupDropdown(id) {
  const dropdown = document.getElementById(id);
  let timeout;
  dropdown.addEventListener("mouseenter", () => {
    clearTimeout(timeout);
    dropdown.classList.add("show");
  });
  dropdown.addEventListener("mouseleave", () => {
    timeout = setTimeout(() => {
      dropdown.classList.remove("show");
    });
  });
}
setupDropdown("dropdown-about");
setupDropdown("dropdown-events");

//СЛАЙДЕР
const sliderSlides = document.querySelectorAll(".slide");
const sliderLeftArrow = document.querySelector(".arrow.left");
const sliderRightArrow = document.querySelector(".arrow.right");
let sliderIndex = 0;
let sliderInterval;
function showSliderSlide(index) {
  sliderSlides.forEach((slide, i) => {
    slide.classList.remove("active");
    slide.style.display = i === index ? "block" : "none";
  });
}
function nextSliderSlide() {
  sliderIndex = (sliderIndex + 1) % sliderSlides.length;
  showSliderSlide(sliderIndex);
}
function prevSliderSlide() {
  sliderIndex = (sliderIndex - 1 + sliderSlides.length) % sliderSlides.length;
  showSliderSlide(sliderIndex);
}
function startSliderAuto() {
  sliderInterval = setInterval(nextSliderSlide, 7000);
}
function stopSliderAuto() {
  clearInterval(sliderInterval);
}
// Инициализация
showSliderSlide(sliderIndex);
startSliderAuto();
// Кнопки
sliderRightArrow.addEventListener("click", () => {
  nextSliderSlide();
  stopSliderAuto();
  startSliderAuto();
});
sliderLeftArrow.addEventListener("click", () => {
  prevSliderSlide();
  stopSliderAuto();
  startSliderAuto();
});

//КАЛЕНДАРЬ
// const daysContainer = document.getElementById("days");
// const monthYear = document.getElementById("monthYear");
// const eventsContainer = document.getElementById("events");
// const dates = [];
// const startDate = new Date("2025-01-01");
// const endDate = new Date("2025-12-31");

// let currentDate = new Date(startDate);
// while (currentDate <= endDate) {
//   dates.push(new Date(currentDate));
//   currentDate.setDate(currentDate.getDate() + 1);
// }

// const today = new Date("2025-05-15");
// let currentIndex = dates.findIndex(
//   (d) => d.toDateString() === today.toDateString()
// );

// function renderCalendar() {
//   daysContainer.innerHTML = "";
//   const currentDay = dates[currentIndex];
//   monthYear.textContent = currentDay.toLocaleDateString("ru-RU", {
//     month: "long",
//     year: "numeric",
//   });
//   const start = Math.max(0, currentIndex - 7);
//   const end = Math.min(dates.length, currentIndex + 8);
//   for (let i = start; i < end; i++) {
//     const d = dates[i];
//     const el = document.createElement("div");
//     el.className = "day" + (i === currentIndex ? " active" : "");
//     const weekday = d.getDay();
//     let colorClass = "";
//     if ([0, 2, 3].includes(weekday)) {
//       colorClass = "orange";
//     }
//     el.innerHTML = `<div>${d.getDate()}</div><div class="${colorClass}">${d.toLocaleDateString("ru-RU", { weekday: "short" })}</div>`;
//     el.onclick = () => {
//       currentIndex = i;
//       renderCalendar();
//     };
//     daysContainer.appendChild(el);
//   }
//   renderEvents();
// }

// function renderEvents() {
//   const d = dates[currentIndex];
//   const day = d.getDay();
//   eventsContainer.innerHTML = "";
//   const events = [];
//   if (day === 2) {
//     events.push("07:15 — Утренняя молитва");
//     events.push("17:30 — Молодежная молитва");
//   } else if (day === 3) {
//     events.push("18:00 — Вечернее служение");
//   } else if (day === 0) {
//     events.push("10:00 — Центральное служение");
//     events.push("14:00 — Молодежное служение");
//   }
//   if (events.length > 0) {
//     events.forEach((e) => {
//       const div = document.createElement("div");
//       const [time, text] = e.split("—").map((s) => s.trim());
//       const timeSpan = document.createElement("span");
//       timeSpan.classList.add("event-time");
//       timeSpan.textContent = time;
//       const textSpan = document.createElement("span");
//       textSpan.textContent = " — " + text;
//       div.appendChild(timeSpan);
//       div.appendChild(textSpan);
//       eventsContainer.appendChild(div);
//     });
//   } else {
//     eventsContainer.innerHTML = "<em>Нет запланированных событий</em>";
//   }
// }

// // Для теста — меняем каждый 1 сек (потом поставь обратно 86400000)
// setInterval(() => {
//   currentIndex = (currentIndex + 1) % dates.length;
//   renderCalendar();
// }, 86400000);

// renderCalendar();

// ВИДЕО ЮТУБ
const apiKey = "AIzaSyAfIzouTCoMl4Nd9saxT9l8Ypiq-9DFMqY";
const channelId = "UC4Lg60FQLP-l6UKupVhKrZA"; // ID YouTube-канала
const maxResults = 3;
async function loadYouTubeVideos() {
  try {
    // Получаем ID плейлиста "uploads"
    const channelRes = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`
    );
    const channelData = await channelRes.json();
    const uploadsPlaylistId =
      channelData.items[0].contentDetails.relatedPlaylists.uploads;
    // Получаем последние видео из плейлиста
    const videosRes = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${maxResults}&key=${apiKey}`
    );
    const videosData = await videosRes.json();
    const container = document.getElementById("youtube-videos");
    container.innerHTML = "";
    videosData.items.forEach((video) => {
      const videoId = video.snippet.resourceId.videoId;
      const iframe = document.createElement("iframe");
      iframe.className = "youtube-video";
      iframe.src = `https://www.youtube.com/embed/${videoId}`;
      iframe.frameBorder = "0";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
      iframe.allowFullscreen = true;
      container.appendChild(iframe);
    });
  } catch (err) {
    console.error("Ошибка при загрузке видео:", err);
  }
}
// Загружаем при старте
loadYouTubeVideos();
// Можно обновлять раз в час или сутки
setInterval(loadYouTubeVideos, 3600000); // каждый час

// КАРТА
 function initMap() {
    const coords = { lat: 49.789828, lng: 73.159875 };
    const map = new google.maps.Map(document.getElementById("map"), {
      center: coords,
      zoom: 16,
    });

    const marker = new google.maps.Marker({
      position: coords,
      map: map,
      title: "Мы находимся здесь",
    });

    const infoWindow = new google.maps.InfoWindow({
      content: "<b>Мы находимся здесь</b>",
    });

    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });

    infoWindow.open(map, marker);
  }

// SPA
const pages = document.querySelectorAll(".page");
const navLinks = document.querySelectorAll("[data-page]");

function showPage(id) {
  pages.forEach((page) => (page.style.display = "none"));
  const active = document.getElementById(id);
  if (active) active.style.display = "block";
}

window.addEventListener("DOMContentLoaded", () => {
  showPage("home"); // показываем главную при загрузке

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const pageId = link.dataset.page;
      showPage(pageId);
      history.pushState(null, "", `#${pageId}`);
    });
  });
});

// КНОПКА ПОСЛУЖИТЬ НА КАРТОЧКАХ
document.querySelectorAll(".ministry-card").forEach((card) => {
  const button = card.querySelector(".card-button");

  card.addEventListener("mouseenter", () => {
    button.style.opacity = "1";
    button.style.transform = "translateY(0)";
  });

  card.addEventListener("mouseleave", () => {
    button.style.opacity = "0";
    button.style.transform = "translateY(20px)";
  });
});

//РЕГИСТРАЦИЯ НА СЛУЖЕНИЕ
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".card-button");
  const modal = document.getElementById("modal");
  const modalTitle = document.getElementById("modal-title");
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const phoneInput = document.getElementById("phone");
  const submitButton = document.getElementById("submit-button");
  const cancelButton = document.getElementById("cancel-button");
  let currentMinistry = "";
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const card = button.closest(".ministry-card");
      currentMinistry = card.querySelector("h3").textContent;
      modalTitle.textContent = `Служение: ${currentMinistry}`;
      modal.style.display = "flex";
    });
  });
  cancelButton.addEventListener("click", () => {
    modal.style.display = "none";
    clearInputs();
  });
  submitButton.addEventListener("click", () => {
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const phone = phoneInput.value.trim();

    if (!firstName || !lastName || !phone) {
      alert("Пожалуйста, заполните все поля!");
      return;
    }

    alert(
      `Спасибо ${firstName}, Вы выбрали служение ${currentMinistry}. С вами скоро свяжутся`
    );

    fetch("http://localhost:3000/sendTelegram", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        phone,
        ministry: currentMinistry,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          console.log("Сообщение отправлено в Telegram");
        } else {
          console.error("Ошибка при отправке сообщения");
        }
      })
      .catch((err) => {
        console.error("Ошибка сети", err);
      });

    modal.style.display = "none";
    clearInputs();
  });
});

// ПКРУТ КАРТОЧКИ
document.querySelectorAll(".ministry-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    // Позиция курсора внутри карточки от 0 до 1
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    // Максимальное смещение в пикселях
    const maxTranslate = 15;

    // Смещение от центра: (x - 0.5) даёт значение от -0.5 до +0.5
    const translateX = (x - 0.5) * 2 * maxTranslate; // от -15px до +15px
    const translateY = (y - 0.5) * 2 * maxTranslate;

    card.style.transform = `translate(${translateX}px, ${translateY}px) scale(1.05)`; // слегка увеличим карточку
    card.style.transition = "transform 0.1s ease-out";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translate(0, 0) scale(1)";
    card.style.transition = "transform 0.3s ease";
  });
});

// Переход страниц назад и вперед
window.addEventListener("popstate", (event) => {
  // event.state может быть null, тогда покажем "home"
  const page = (event.state && event.state.page) || "home";

  // Вызов функции, которая показывает страницу
  // Предполагается, что showPage определена в SPA-скрипте и доступна глобально
  if (typeof showPage === "function") {
    showPage(page);
  } else {
    console.warn("showPage function is not defined");
  }
});
