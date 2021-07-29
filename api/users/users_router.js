const router = require("express").Router()
const { getAllUsers , insertUser } = require("./users_model")

router.get('/api/users', async (req, res) => {
    res.json(await getAllUsers())
  })

router.post('/api/users', async (req, res) => {
    res.status(201).json(await insertUser(req.body))
  })

module.exports = router 