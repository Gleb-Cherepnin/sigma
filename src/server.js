require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const fetch = globalThis.fetch;

const app = express();
app.use(cors());
app.use(bodyParser.json());

const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const CHAT_ID = process.env.CHAT_ID;

app.post("/sendTelegram", async (req, res) => {
  console.log("Получен запрос на /sendTelegram", req.body);

  const { firstName, lastName, phone, ministry } = req.body;

  if (!firstName || !lastName || !phone || !ministry) {
    return res.status(400).json({ error: "Поля не заполнены" });
  }

  const message = `Новая заявка на служение:\nИмя: ${firstName} ${lastName}\nТелефон: ${phone}\nСлужение: ${ministry}`;

  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: message,
      }),
    });

    const data = await response.json();
    console.log("Ответ Telegram API:", data);

    if (data.ok) {
      res.json({ success: true });
    } else {
      console.error("Ошибка Telegram API:", data);
      res.status(500).json({ error: "Ошибка Telegram API" });
    }
  } catch (err) {
    console.error("Ошибка сервера при отправке в Telegram:", err);
    res.status(500).json({ error: "Ошибка сервера" });
  }
});

app.get("/getChatId", async (req, res) => {
  const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/getUpdates`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Ответ getUpdates:", data);
    res.send(data);
  } catch (error) {
    console.error("Ошибка при получении chat ID:", error);
    res.status(500).send("Ошибка");
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
