document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style");
  style.textContent = `
    /* CТРАНИЦА С КОНФИРЕНЦИЕЙ */
    .conferences-hero {
      position: relative;
      width: 1335px;
      height: 400px;
      margin: 0 auto 40px auto;
      overflow: hidden;
      border-radius: 0 0 20px 20px;
    }

    .conferences-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      border-radius: 0 0 20px 20px;
    }

    .conferences-text {
      position: absolute;
      bottom: 30px;
      left: 30px;
      color: white;
      text-shadow: 0 0 8px rgba(0, 0, 0, 0.7);
    }

    .conferences-text h1 {
      font-size: 36px;
      margin: 0;
    }

    /* СТИЛИ ДЛЯ КАРТОЧЕК НА СТРАНИЦЕ КОНФИРЕНЦИИ */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(4, 250px);
      gap: 20px;
      justify-content: center;
      align-content: center;
      box-sizing: border-box;
    }

    .card {
      width: 250px;
      height: 350px;
      background-color: white;
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
      display: flex;
      flex-direction: column;
      transition: box-shadow 0.3s ease;
    }

    .card:hover {
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    .card-img {
      width: 100%;
      height: 160px;
      object-fit: cover;
    }

    .card-body {
      padding: 16px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }

    .card-title {
      font-size: 16px;
      font-weight: bold;
    }

    .card-location {
      font-size: 14px;
      color: #666;
    }

    .card-date {
      font-size: 14px;
      color: #333;
      margin-top: 20px;
    }
  `;
  document.head.appendChild(style);
});
