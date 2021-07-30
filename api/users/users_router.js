const router = require("express").Router()
const { getsUsers, findById} = require("./users_model")
const Users = require("./users_model")
const {restricted , only} = require("../auth/auth_middleware")

router.get('/', restricted, only("instructor") , async (req, res) => {
    res.json(await getsUsers())
  })

  router.get('/:id', async (req, res) => {
    res.json(await findById(req.params.id))
  })

  router.put("/:id", (req, res, next) => {
    Users.update(req.params.id, req.body)

    .then(async () => {
      const updateUser = await Users.findById(req.params.id)
      res.status(200).json(updateUser)
    })
    .catch(next)
  })

  router.delete("/:id", async (req, res, next) => {
  const deleteUser = await Users.findById(req.params.id)
  Users.remove(req.params.id)
  .then(() => {
    res.status(200).json(deleteUser)
  })
  .catch(next)
  })

module.exports = router 