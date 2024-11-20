// server.js im server/ Verzeichnis
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());  // Damit wir JSON-Requests empfangen können

// MongoDB-Verbindung
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

// Dummy Route
app.get('/', (req, res) => {
    res.send("Hello from DnD Character Manager Backend");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
