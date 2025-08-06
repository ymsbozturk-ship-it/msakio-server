const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/telegram-webhook', (req, res) => {
    console.log("AL SİNYALİ:", req.body);
    res.send('Webhook alındı');
});

app.get('/', (req, res) => {
    res.send('MSAKIO Telegram AL Sinyali Sunucusu çalışıyor!');
});

app.listen(PORT, () => {
    console.log(`Sunucu ${PORT} portunda çalışıyor`);
});