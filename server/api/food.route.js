const router = require("express").Router();
const { Food } = require("../db/models");

router.get("/", (req, res, next) => {
  Food.findAll({})
    .then(foods => res.json(foods))
    .catch(next);
});

module.exports = router;
