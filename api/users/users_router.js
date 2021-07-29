const router = require("express").Router()
const {getAllUsers, getsUsers} = require("./users_model")

router.get('/', async (req, res) => {
    res.json(await getsUsers())
  })



module.exports = router 