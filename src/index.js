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
showSliderSlide(sliderIndex);
startSliderAuto();

// ВИДЕО ЮТУБ
const apiKey = "AIzaSyAfIzouTCoMl4Nd9saxT9l8Ypiq-9DFMqY";
const channelId = "UC4Lg60FQLP-l6UKupVhKrZA";
const maxResults = 6;

async function loadYouTubeVideos() {
  try {
    const channelRes = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`
    );
    const channelData = await channelRes.json();
    const uploadsPlaylistId =
      channelData.items[0].contentDetails.relatedPlaylists.uploads;

    const videosRes = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${maxResults}&key=${apiKey}`
    );
    const videosData = await videosRes.json();

    const container = document.getElementById("youtube-videos");
    container.innerHTML = "";

    videosData.items.forEach((video) => {
      const videoId = video.snippet.resourceId.videoId;
      const title = video.snippet.title;

      const videoWrapper = document.createElement("div");
      videoWrapper.className = "youtube-thumbnail";
      videoWrapper.style.position = "relative";
      videoWrapper.style.cursor = "pointer";
      videoWrapper.style.maxWidth = "300px";
      videoWrapper.style.marginBottom = "20px";

      const img = document.createElement("img");
      img.src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      img.alt = title;
      img.style.width = "100%";
      img.onerror = function () {
        // fallback если нет maxres
        this.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
      };

      const playBtn = document.createElement("div");
      playBtn.innerHTML = "▶";
      playBtn.style.position = "absolute";
      playBtn.style.top = "50%";
      playBtn.style.left = "50%";
      playBtn.style.transform = "translate(-50%, -50%)";
      playBtn.style.fontSize = "40px";
      playBtn.style.color = "white";
      playBtn.style.textShadow = "0 0 10px black";

      videoWrapper.appendChild(img);
      videoWrapper.appendChild(playBtn);

      // При клике загружаем iframe
      videoWrapper.addEventListener("click", () => {
        const iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        iframe.width = "100%";
        iframe.height = "170";
        iframe.frameBorder = "0";
        iframe.allow =
          "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
        iframe.allowFullscreen = true;
        videoWrapper.innerHTML = ""; // удаляем превью
        videoWrapper.appendChild(iframe);
      });

      container.appendChild(videoWrapper);
    });
  } catch (err) {
    console.error("Ошибка при загрузке видео:", err);
  }
}

loadYouTubeVideos();
setInterval(loadYouTubeVideos, 3600000);

// КАРТА
function initMap() {
  const coords = { lat: 49.789828, lng: 73.159875 };

  const map = new ymaps.Map("map", {
    center: [coords.lat, coords.lng],
    zoom: 16,
  });

  const placemark = new ymaps.Placemark(
    [coords.lat, coords.lng],
    { balloonContent: "<b>Мы находимся здесь</b>" },
    { preset: "islands#redDotIcon", balloonCloseButton: true }
  );

  map.geoObjects.add(placemark);

  // Балун по умолчанию открыт
  placemark.balloon.open();

  placemark.events.add("click", function () {
    placemark.balloon.open();
  });
}

ymaps.ready(initMap);

// SPA
const pages = document.querySelectorAll(".page");
const navLinks = document.querySelectorAll("[data-page]");

function showPage(id) {
  pages.forEach((page) => (page.style.display = "none"));
  const active = document.getElementById(id);
  if (active) active.style.display = "block";
}

window.addEventListener("DOMContentLoaded", () => {
  let initialPage = window.location.hash.replace("#", "") || "home";
  showPage(initialPage);

  history.replaceState({ page: initialPage }, "", `#${initialPage}`);

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const pageId = link.dataset.page;
      showPage(pageId);
      history.pushState({ page: pageId }, "", `#${pageId}`);
    });
  });
});

window.addEventListener("popstate", (e) => {
  if (e.state && e.state.page) {
    showPage(e.state.page);
  } else {
    let pageFromHash = window.location.hash.replace("#", "") || "home";
    showPage(pageFromHash);
  }
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

// ПРОКРУТ КАРТОЧКИ
document.querySelectorAll(".ministry-card").forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();

    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    const maxTranslate = 15;

    const translateX = (x - 0.5) * 2 * maxTranslate;
    const translateY = (y - 0.5) * 2 * maxTranslate;

    card.style.transform = `translate(${translateX}px, ${translateY}px) scale(1.05)`;
    card.style.transition = "transform 0.1s ease-out";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translate(0, 0) scale(1)";
    card.style.transition = "transform 0.3s ease";
  });
});
