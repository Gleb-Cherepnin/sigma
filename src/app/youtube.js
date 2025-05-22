// youtubeStyles.js
function addYouTubeStyles() {
  const style = document.createElement("style");
  document.head.appendChild(style);
  const sheet = style.sheet;

  sheet.insertRule(
    `
    .youtube-container {
      display: flex;
      gap: 20px;
      flex-wrap: wrap;
      justify-content: center;
    }
  `,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `
    .youtube-video {
      width: 300px;
      aspect-ratio: 16 / 9;
    }
  `,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `
    .videos-header {
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 20px;
      gap: 630px;
    }
  `,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `
    .videos-header h2 {
      font-size: 24px;
      font-weight: 600;
      margin: 0;
    }
  `,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `
    .all-videos-button {
      background-color: white;
      border: 1px solid orange;
      color: black;
      padding: 8px 16px;
      border-radius: 20px;
      cursor: pointer;
      font-size: 14px;
      transition: background-color 0.3s ease;
    }
  `,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `
    .all-videos-button:hover {
      background-color: orange;
      color: white;
    }
  `,
    sheet.cssRules.length
  );
}

addYouTubeStyles();
