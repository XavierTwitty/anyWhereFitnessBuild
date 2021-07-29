const router = require("express").Router()
const { getsUsers} = require("./users_model")

router.get('/', async (req, res) => {
    res.json(await getsUsers())
  })

  // router.get('/:id', async (req, res) => {
  //   res.json(await findById())
  // })

  router.put("/:id", (req, res, next) => {
    res.json({message:"updating a user "})
    next()
  })

  router.delete("/:id", (req, res, next) => {
    res.json({message:"deleting a user a user "})
    next()
  })

module.exports = router 