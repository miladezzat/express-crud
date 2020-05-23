var express = require('express');
var router = express.Router();

const userController = require("../controllers/user")

/* GET home page. */
router.get('/', async (req, res, next) => {
  const users = await userController.getAllUser()
  res.render('index', { title: 'User', users });
});

router.post("/", async (req, res, next) => {
  const { phone_number, full_name } = req.body
  const savedUser = await userController.addNewUser({ full_name, phone_number })
  res.redirect("/")
})

router.get("/delete/:id", async (req, res, next) => {
  const id = req.params.id
  const deletedUser = await userController.deleteOneUser(id)
  console.log(deletedUser)
  res.redirect("/")
})


router.get("/update/:id", async (req, res, next) => {
  const id = req.params['id'];
  const user = await userController.getOneUser(id)
  res.render("edit", { title: "User", user })
})

router.post("/update/:id", async (req, res, next) => {
  const id = req.params['id'];
  const user = {
    full_name: req.body['full_name'],
    phone_number: req.body['phone_number']
  }
  const updatedUser = await userController.updateOneUser({ id, user })
  res.redirect("/")
})
module.exports = router;
