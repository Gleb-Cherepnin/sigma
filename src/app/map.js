// mapStyles.js
function addMapStyles() {
  const style = document.createElement("style");
  document.head.appendChild(style);
  const sheet = style.sheet;

  sheet.insertRule(
    `
    .map-container {
      display: flex;
      justify-content: center;
      margin-top: 50px;
    }
  `,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `
    #map {
      height: 400px;
      width: 90%;
      max-width: 1000px;
      border-radius: 10px;
    }
  `,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `
    .leaflet-control-attribution {
      display: none !important;
    }
  `,
    sheet.cssRules.length
  );
}

addMapStyles();
