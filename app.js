const express = require('express');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
const { sequelize, User, Post } = require('./models');
const url = require('url');
const querystring = require('querystring');

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

app.get('/post', async (req, res) => {
    const path = url.parse(req.url).query;
    const param = querystring.parse(path);
    const posts = await Post.findAll({ where: { board: param.board } });
    res.json({ posts: posts });
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
});

app.post("/signin", async (req, res) => {
    const inputUserName = req.body.username;
    const temp = await User.findOne({ where: { username: inputUserName} });
    
    if(temp !== null) {
        const response = { success: true, msg: "로그인 성공" };
        res.json(response);
    } else {
        const response = { success: false, msg:"존재하지 않는 아이디 입니다." };
        res.json(response);
    }
});

app.post("/post", async (req,res) => {
    let username, userid;
    if(req.body.author !== null) {
        const user = await User.findOne({ where: { username: req.body.author }});
        username = user.username;
        userid = user.userid;
    } else {
        username = "익명";
        userid = null;
    }
    
    const post = Post.create({
        board: req.body.board,
        title: req.body.title,
        content: req.body.content,
        author: username,
        UserUserid: userid
    })

    res.json({ success: true });
});

app.get("/*", (req, res) => {
    res.sendFile(path.resolve("public", "index.html"));
});

app.listen(3000, () => {
    console.log("Server ON");
});