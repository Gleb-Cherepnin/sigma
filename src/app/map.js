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
      margin-top: 100px;
      padding: 0 20px;
    }
  `,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `
    #map {
      height: 400px;
      width: 100%;
      max-width: 1000px;
      border-radius: 10px;
    }
  `,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `
    @media screen and (max-width: 1024px) {
      .map-container {
        margin-top: 80px;
      }
      
      #map {
        height: 350px;
      }
    }
  `,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `
    @media screen and (max-width: 768px) {
      .map-container {
        margin-top: 60px;
      }
      
      #map {
        height: 300px;
        border-radius: 8px;
      }
    }
  `,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `
    @media screen and (max-width: 480px) {
      .map-container {
        margin-top: 40px;
        padding: 0 10px;
      }
      
      #map {
        height: 250px;
        border-radius: 6px;
      }
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
