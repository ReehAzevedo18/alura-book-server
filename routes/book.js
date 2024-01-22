const { Router } = require("express");
const { getBooks, postBook, patchBook, deleteBook  } = require("../controllers/book");
const router = Router();

router.get("/", getBooks);

router.get("/:id", getBooks);

router.post("/", postBook);

router.patch("/:id", patchBook);

router.delete("/:id", deleteBook);

module.exports = router;
