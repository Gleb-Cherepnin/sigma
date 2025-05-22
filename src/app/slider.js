// sliderStyles.js

function addSliderStyles() {
  const style = document.createElement("style");
  document.head.appendChild(style);
  const sheet = style.sheet;

  sheet.insertRule(
    `* {
    box-sizing: border-box;
  }`,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `.slider {
    position: relative;
    width: 1335px;
    height: 400px;
    margin: auto;
    overflow: hidden;
    border-radius: 20px;
  }`,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `.slides {
    display: flex;
    transition: transform 0.5s ease-in-out;
    height: 100%;
  }`,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `.slide {
    min-width: 100%;
    height: 100%;
    opacity: 0.5;
    transform: scale(0.8);
    transition:
      opacity 0.5s,
      transform 0.5s;
    opacity: 1 !important;
    filter: none !important;
    transition: opacity 0.5s ease-in-out;
  }`,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `.slide.active {
    opacity: 1;
    transform: scale(1);
  }`,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `.slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }`,
    sheet.cssRules.length
  );
}

addSliderStyles();
