const router = require("express").Router()
const {getAllUsers} = require("./users_model")

router.get('/', async (req, res) => {
    res.json(await getAllUsers())
  })



module.exports = router 