const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
const { sequelize, User, Post } = require('./models');

sequelize.sync({ force : false })
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
app.post("/signup", async (req, res) => {
    const inputUserName = req.body.username;
    const temp = await User.findOne({ where: { username: inputUserName} });
    
    if(temp === null) {
        const user = User.create({ username: inputUserName });
        const response = { success: true, msg: "회원가입 성공" };
        res.json(response);
    } else {
        const response = { success: false, msg:"중복된 아이디 입니다." };
        res.json(response);
    }
})
app.post("/signin", (req, res) => {

})
app.listen(3000, () => {
    console.log("Server ON");
});