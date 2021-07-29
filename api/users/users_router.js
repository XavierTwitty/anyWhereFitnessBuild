const router = require("express").Router()
const {getAllUsers} = require("./users_model")

router.get('/api/users', async (req, res) => {
    res.json(await getAllUsers())
  })



module.exports = router 