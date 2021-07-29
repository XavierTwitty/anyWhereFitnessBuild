const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
//add RESTRICT and only middleware 

const server = express()

const authRouter = require("./auth/auth_router")
const usersRouter = require("./users/users_router")
const classRouter = require("./classes/classes_router")

server.use(express.json())
server.use(helmet())
server.use(cors())

server.use("/api/auth", authRouter)
server.use("/api/users", usersRouter)
server.use("/api/classes", classRouter)

server.get("/", (req, res) => {
  res.json({
    api: "up"
  })
})

server.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500).json({
    message: err.message,
    stack: err.stack
  })
})

module.exports = server
