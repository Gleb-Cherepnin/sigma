const style = document.createElement("style");
style.textContent = `

/* === HERO === */
.ministry-hero {
  position: relative;
  width: 1335px;
  height: 400px;
  margin: 0 auto 40px auto;
  overflow: hidden;
  border-radius: 0 0 20px 20px;
}
.ministry-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 0 0 20px 20px;
}
.ministry-text {
  position: absolute;
  bottom: 30px;
  left: 30px;
  color: white;
  text-shadow: 0 0 8px rgba(0, 0, 0, 0.7);
}
.ministry-text h1 {
  font-size: 36px;
  margin: 0;
}

/* === КАРТОЧКИ СЛУЖЕНИЙ === */
.ministry-cards {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 40px;
  margin: 40px auto 0;
  max-width: 1100px;
}
.ministry-card {
  position: relative;
  width: 250px;
  height: 280px;
  background-size: cover;
  background-position: center;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;
}
.ministry-card:hover {
  transform: scale(1.02);
}
.card-content {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.card-content h3 {
  font-size: 22px;
}
.card-content ul {
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
}
.card-content ul li {
  font-size: 14px;
  margin-bottom: 4px;
}
.card-button {
  padding: 8px 16px;
  background-color: #f4b400;
  border: none;
  border-radius: 999px;
  color: white;
  font-weight: 600;
  cursor: pointer;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.3s ease;
}
.ministry-card:hover .card-button {
  opacity: 1;
  transform: translateY(0);
}

/* === МОДАЛЬНОЕ ОКНО === */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(20, 20, 20, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  backdrop-filter: blur(4px);
}
.modal {
  background: linear-gradient(135deg, #ffffff, #f7f7f7);
  padding: 30px 30px;
  border-radius: 16px;
  max-width: 420px;
  width: 90%;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-family: "Segoe UI", sans-serif;
  animation: fadeIn 0.3s ease-in-out;
}
.modal h2 {
  margin-bottom: 20px;
  font-size: 22px;
  color: #333;
}
.modal input {
  width: 100%;
  margin: 12px 0;
  padding: 12px;
  font-size: 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
  transition: 0.3s;
}
.modal input:focus {
  outline: none;
  border-color: #4a90e2;
  box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.2);
}
.modal-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  gap: 10px;
}
.modal-buttons button {
  flex: 1;
  padding: 12px 0;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
}
#submit-button {
  background-color: #4a90e2;
  color: white;
}
#submit-button:hover {
  background-color: #357abd;
}
#cancel-button {
  background-color: #e0e0e0;
  color: #333;
}
#cancel-button:hover {
  background-color: #d0d0d0;
}
@keyframes fadeIn {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
`;
document.head.appendChild(style);
