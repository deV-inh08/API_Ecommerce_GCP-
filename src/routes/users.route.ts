import express from "express";

const router = express.Router

const usersRouter = router()

usersRouter.post('/login', (req, res) => {
    res.send("<h1>User login</h1>")
})
