// footerStyles.js
function addFooterStyles() {
  const style = document.createElement("style");
  document.head.appendChild(style);
  const sheet = style.sheet;

  sheet.insertRule(`
    .footer {
      background-color: #f3f4f6;
      color: #374151;
      font-size: 14px;
      padding: 40px 20px;
      margin-top: 100px;
    }
  `);

  sheet.insertRule(`
    .footer-container {
      max-width: 1200px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 40px;
    }
  `);

  sheet.insertRule(`
    @media (min-width: 768px) {
      .footer-container {
        flex-direction: row;
        justify-content: space-between;
      }
    }
  `);

  sheet.insertRule(`
    .footer-left {
      flex: 1;
    }
  `);

  sheet.insertRule(`
    .footer-logo {
      height: 24px;
      margin-bottom: 10px;
    }
  `);

  sheet.insertRule(`
    .footer-text {
      font-size: 12px;
      line-height: 1.6;
      margin-top: 10px;
      width: 100%;
      max-width: 600px;
    }
  `);

  sheet.insertRule(`
    .footer-text a {
      margin-left: 4px;
    }
  `);

  sheet.insertRule(`
    .footer-right {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }
  `);

  sheet.insertRule(`
    .social-icons {
      display: flex;
      gap: 16px;
    }
  `);

  sheet.insertRule(`
    .social-icons a {
      padding: 8px;
      border-radius: 9999px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.3s ease;
    }
  `);

  sheet.insertRule(`
    .social-icons a:hover {
      background-color: #6b7280;
    }
  `);

  sheet.insertRule(`
    .social-icons img {
      width: 35px;
      height: 35px;
    }
  `);

  sheet.insertRule(`
    .footer-links {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
    }
  `);

  sheet.insertRule(`
    .footer-links a {
      color: #111827;
      text-decoration: none;
    }
  `);

  sheet.insertRule(`
    .footer-links a:hover {
      text-decoration: underline;
    }
  `);

  sheet.insertRule(`
    @media (max-width: 1024px) {
      .footer {
        padding: 30px 15px;
      }
      
      .footer-container {
        gap: 30px;
      }
      
      .social-icons img {
        width: 30px;
        height: 30px;
      }
    }
  `);

  sheet.insertRule(`
    @media (max-width: 768px) {
      .footer {
        padding: 25px 15px;
        margin-top: 50px;
      }
      
      .footer-container {
        gap: 25px;
      }
      
      .footer-text {
        font-size: 11px;
      }
      
      .social-icons {
        gap: 12px;
      }
      
      .social-icons img {
        width: 28px;
        height: 28px;
      }
    }
  `);

  sheet.insertRule(`
    @media (max-width: 480px) {
      .footer {
        padding: 20px 10px;
        margin-top: 30px;
      }
      
      .footer-container {
        gap: 20px;
      }
      
      .footer-logo {
        height: 20px;
      }
      
      .footer-text {
        font-size: 10px;
      }
      
      .social-icons {
        gap: 10px;
      }
      
      .social-icons img {
        width: 25px;
        height: 25px;
      }
      
      .footer-links {
        font-size: 12px;
      }
    }
  `);
}

addFooterStyles();
