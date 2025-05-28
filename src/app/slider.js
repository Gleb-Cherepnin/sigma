// sliderStyles.js

document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style");
  style.textContent = `
    .slider-wrapper {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px 0;
    }

    .slider-container {
      position: relative;
      width: 80%;
      max-width: 1000px;
      height: 400px;
      overflow: hidden;
      border-radius: 20px;
    }

    .slider {
      display: flex;
      transition: transform 0.5s ease;
      width: 100%;
      height: 100%;
    }

    .slide {
      min-width: 100%;
      height: 100%;
      position: relative;
    }

    .slide img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .slide-content {
      position: absolute;
      bottom: 40px;
      left: 40px;
      color: white;
      text-shadow: 0 0 8px rgba(0, 0, 0, 0.7);
      max-width: 600px;
    }

    .slide-content h2 {
      font-size: 36px;
      margin: 0 0 10px 0;
    }

    .slide-content p {
      font-size: 18px;
      margin: 0;
    }

    @media screen and (max-width: 1024px) {
      .slider-container {
        width: 85%;
        height: 350px;
      }
      .slide-content {
        bottom: 30px;
        left: 30px;
        max-width: 500px;
      }
      .slide-content h2 {
        font-size: 32px;
      }
      .slide-content p {
        font-size: 16px;
      }
    }

    @media screen and (max-width: 768px) {
      .slider-container {
        width: 90%;
        height: 300px;
      }
      .slide-content {
        bottom: 20px;
        left: 20px;
        max-width: 400px;
      }
      .slide-content h2 {
        font-size: 28px;
      }
      .slide-content p {
        font-size: 14px;
      }
    }

    @media screen and (max-width: 480px) {
      .slider-container {
        width: 95%;
        height: 200px;
      }
      .slide-content {
        bottom: 15px;
        left: 15px;
        max-width: 300px;
      }
      .slide-content h2 {
        font-size: 24px;
      }
      .slide-content p {
        font-size: 13px;
      }
    }
  `;
  document.head.appendChild(style);
});
