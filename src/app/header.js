// styles.js

function addStyles() {
  const style = document.createElement("style");
  document.head.appendChild(style);
  const sheet = style.sheet;

  // Добавляем стили по одной записи
  sheet.insertRule(
    `body {
    margin: 0;
    font-family: 'Montserrat', sans-serif;
  }`,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `header {
    background: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 40px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    position: sticky;
    top: 0;
    z-index: 1000;
  }`,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `.logo-wrap {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end; 
  }`,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `.logo {
    display: flex;
    align-items: center;
    gap: 8px;
  }`,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `.logo img {
    height: 40px;
    width: auto;
  }`,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `.logo-spacer {
    width: 40px;
  }`,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `nav {
    display: flex;
    align-items: center;
    gap: 30px;
    flex: 1;
    justify-content: center;
  }`,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `nav a {
    text-decoration: none;
    color: #0B132A;
    font-weight: 600;
    transition: color 0.3s;
  }`,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `nav a:hover {
    color: #F4B400;
  }`,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `.actions-wrap {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-start; 
  }`,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `.actions {
    display: flex;
    align-items: center;
    gap: 10px;
  }`,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `.actions-spacer {
    width: 40px; 
  }`,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `.donate-btn {
    padding: 8px 18px;
    border: 2px solid #F4B400;
    border-radius: 999px;
    background: transparent;
    color: #0B132A;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.3s;
  }`,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `.donate-btn:hover {
    background: #F4B400;
    color: white;
  }`,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `.dropdown {
    position: relative;
  }`,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `.dropdown-btn {
    text-decoration: none;
    color: #0B132A;
    font-weight: 600;
    padding: 8px 12px;
    display: inline-block;
    cursor: pointer;
    border-radius: 6px;
    transition: background 0.2s;
  }`,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `.dropdown-btn:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }`,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `.dropdown-content {
    position: absolute;
    top: 100%;
    left: 0;
    display: none;
    flex-direction: column;
    background-color: #fff;
    min-width: 200px;
    padding: 8px 0;
    border-radius: 8px;
    box-shadow: 0 8px 16px rgba(0,0,0,0.1);
    z-index: 1000;
    transition: opacity 0.2s ease, transform 0.2s ease;
    opacity: 0;
    transform: translateY(10px);
    pointer-events: none;
  }`,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `.dropdown.show .dropdown-content {
    display: flex;
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
  }`,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `.dropdown-content a {
    padding: 10px 16px;
    text-decoration: none;
    color: #0B132A;
    font-weight: 500;
    white-space: nowrap;
    transition: background 0.2s, color 0.2s;
    border-radius: 6px;
  }`,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `.dropdown-content a:hover {
    background-color: rgba(0, 0, 0, 0.05);
    color: #0B132A;
  }`,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `@media screen and (max-width: 1024px) {
      header {
        padding: 10px 20px;
      }
      
      nav {
        gap: 15px;
      }
      
      nav a {
        font-size: 14px;
        white-space: nowrap;
      }
      
      .logo img {
        height: 35px;
      }

      .donate-btn {
        margin-left: 30px;
      }
    }`,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `@media screen and (max-width: 768px) {
      header {
        padding: 10px 20px;
      }
      
      nav {
        display: none;
      }
      
      .logo-wrap {
        justify-content: flex-start;
      }
      
      .actions-wrap {
        justify-content: flex-end;
      }
      
      .logo-spacer, .actions-spacer {
        display: none;
      }
    }`,
    sheet.cssRules.length
  );

  sheet.insertRule(
    `@media screen and (max-width: 480px) {
      .logo img {
        height: 30px;
      }
      
      nav a {
        font-size: 14px;
      }
      
      .donate-btn {
        padding: 6px 14px;
        font-size: 14px;
      }
    }`,
    sheet.cssRules.length
  );
}

addStyles();

document.addEventListener("DOMContentLoaded", () => {
  const style = document.createElement("style");
  style.textContent = `
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 40px;
      background-color: white;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .logo {
      height: 50px;
      width: auto;
    }

    .header-text {
      font-size: 18px;
      color: #333;
    }

    .header-right {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .donate-button {
      background-color: #ff6b00;
      color: white;
      padding: 10px 20px;
      border-radius: 25px;
      text-decoration: none;
      font-weight: 500;
      transition: background-color 0.3s ease;
    }

    .donate-button:hover {
      background-color: #e05a00;
    }

    @media screen and (max-width: 768px) {
      .header {
        padding: 15px 20px;
      }

      .header-text {
        display: none;
      }

      .logo {
        height: 40px;
      }

      .donate-button {
        padding: 8px 16px;
        font-size: 14px;
      }
    }

    @media screen and (max-width: 480px) {
      .header {
        padding: 10px 15px;
      }

      .logo {
        height: 35px;
      }

      .donate-button {
        padding: 6px 12px;
        font-size: 13px;
      }
    }
  `;
  document.head.appendChild(style);
});
