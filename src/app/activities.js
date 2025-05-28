document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style");
  style.textContent = `
    /* CТРАНИЦА С МЕРОПРИЯТИЯМИ */
    .activities-hero {
      position: relative;
      width: 100%;
      max-width: 1335px;
      height: 400px;
      margin: 0 auto 40px auto;
      overflow: hidden;
      border-radius: 0 0 20px 20px;
    }

    .activities-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
      border-radius: 0 0 20px 20px;
    }

    .activities-text {
      position: absolute;
      bottom: 30px;
      left: 30px;
      color: white;
      text-shadow: 0 0 8px rgba(0, 0, 0, 0.7);
    }

    .activities-text h1 {
      font-size: 36px;
      margin: 0;
    }

    /* Общие стили карточек */
    .card-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      justify-content: center;
      align-content: center;
      box-sizing: border-box;
      padding: 0 20px;
      max-width: 1100px;
      margin: 0 auto;
    }

    .card {
      width: 100%;
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

    @media screen and (max-width: 1024px) {
      .activities-hero {
        height: 350px;
      }
      
      .activities-text h1 {
        font-size: 32px;
      }
      
      .card-grid {
        gap: 15px;
      }
      
      .card {
        height: 330px;
      }
    }

    @media screen and (max-width: 768px) {
      .activities-hero {
        height: 300px;
        border-radius: 0 0 15px 15px;
      }
      
      .activities-image {
        border-radius: 0 0 15px 15px;
      }
      
      .activities-text {
        bottom: 20px;
        left: 20px;
      }
      
      .activities-text h1 {
        font-size: 28px;
      }
      
      .card-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
        padding: 0 15px;
      }
      
      .card {
        height: 320px;
      }
      
      .card-img {
        height: 140px;
      }
    }

    @media screen and (max-width: 480px) {
      .activities-hero {
        height: 200px;
        border-radius: 0 0 10px 10px;
      }
      
      .activities-image {
        border-radius: 0 0 10px 10px;
      }
      
      .activities-text {
        bottom: 15px;
        left: 15px;
      }
      
      .activities-text h1 {
        font-size: 24px;
      }
      
      .card-grid {
        grid-template-columns: 1fr;
        gap: 15px;
        padding: 0 10px;
      }
      
      .card {
        height: 300px;
      }
      
      .card-img {
        height: 130px;
      }
      
      .card-title {
        font-size: 15px;
      }
      
      .card-location, .card-date {
        font-size: 13px;
      }
    }
  `;
  document.head.appendChild(style);
});
