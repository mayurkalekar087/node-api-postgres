const {Router} = require("express");
const controller = require("../controllers/controller");
const router = Router();

router.get("/",controller.getStudent);
router.get("/:id",controller.getStudentById);
router.post("/",controller.addStudent);
router.put("/:id",controller.updateStudent);
router.delete("/:id",controller.removeStudent);

module.exports = router;
