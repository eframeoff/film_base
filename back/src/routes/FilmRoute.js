const express = require("express");
const router = express.Router();
const FilmController = require("../controllers/FilmController");

router.get("/list", FilmController.list);
router.post("/create", FilmController.create);
router.get("/get/:id", FilmController.get);
router.post("/update/:id", FilmController.update);
router.post("/delete", FilmController.delete);

// router.get("/datatest", EmployeeController.testdata);
// router.get("/test", EmployeeController.test);
// router.get("/save", (req, res) => {
//   res.json({ status: "Employe saved" });
// });

module.exports = router;
