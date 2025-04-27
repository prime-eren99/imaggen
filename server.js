const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('AI Image Generation API');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
