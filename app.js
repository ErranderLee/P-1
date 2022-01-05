const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
const { sequelize } = require('./models');

sequelize.sync({ force : true })
    .then(() => {
        console.log("database connected");
    })
    .catch((err) => {
        console.error(err);
    })
app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/*", (req, res) => {
    res.sendFile(path.resolve("public", "index.html"));
});
app.post("/signup", (req, res) => {
    console.log('body:', req.body.username);
})
app.listen(3000, () => {
    console.log("Server ON");
});