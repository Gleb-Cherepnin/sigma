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
      padding: 0 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
  `,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `
    .youtube-video {
      width: 300px;
      aspect-ratio: 16 / 9;
      border-radius: 8px;
      overflow: hidden;
    }
  `,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `
    .videos-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      padding: 0 20px;
      max-width: 1200px;
      margin: 0 auto 20px auto;
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

  sheet.insertRule(
    `
    @media screen and (max-width: 1024px) {
      .youtube-container {
        gap: 15px;
      }
      
      .youtube-video {
        width: 280px;
      }
      
      .videos-header {
        gap: 20px;
      }
    }
  `,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `
    @media screen and (max-width: 768px) {
      .youtube-container {
        gap: 15px;
        padding: 0 15px;
      }
      
      .youtube-video {
        width: calc(50% - 15px);
        min-width: 250px;
      }
      
      .videos-header {
        padding: 0 15px;
        flex-direction: column;
        gap: 15px;
        text-align: center;
      }
      
      .videos-header h2 {
        font-size: 22px;
      }
    }
  `,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `
    @media screen and (max-width: 480px) {
      .youtube-container {
        gap: 10px;
        padding: 0 10px;
      }
      
      .youtube-video {
        width: 100%;
        min-width: unset;
      }
      
      .videos-header {
        padding: 0 10px;
        gap: 10px;
      }
      
      .videos-header h2 {
        font-size: 20px;
      }
      
      .all-videos-button {
        padding: 6px 12px;
        font-size: 13px;
      }
    }
  `,
    sheet.cssRules.length
  );
}

addYouTubeStyles();
