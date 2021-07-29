const router = require("express").Router()
const { getsUsers} = require("./users_model")

router.get('/', async (req, res) => {
    res.json(await getsUsers())
  })

  // router.get('/:id', async (req, res) => {
  //   res.json(await findById())
  // })

module.exports = router 