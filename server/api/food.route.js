const router = require("express").Router();
const { Food } = require("../db/models");


router.get("/", (req, res, next) => {
  Food.findAll({})
    .then(foods => res.json(foods))
    .catch(next);
});

router.get('/:foodId', (req, res, next) => {
	Food.findById(req.params.foodId)
	.then(food => res.json(food))
	.catch(next);
})



module.exports = router;
