const router = require("express").Router()
const {getAllClasses} = require("./classes_model")


router.get('/', async (req, res) => {
    res.json(await getAllClasses())
  })

  module.exports = router