const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const server = express()

// const authRouter = require("./auth/auth_router")
const usersRouter = require("./users/users_router")
const classRouter = require("./classes/classes_router")

server.use(express.json())
server.use(helmet())
server.use(cors())

// server.use("/api/auth", authRouter)
server.use("/api/users", usersRouter)
server.use("/api/classes", classRouter)



module.exports = server
