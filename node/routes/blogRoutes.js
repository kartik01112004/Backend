const express = require("express");
const blogController = require("../controller/blogController");

const router = express.Router();

router.get("/create", blogController.blog_create_get);
router.get("/", blogController.blog_index);
router.post("/", blogController.blog_create_post);
//if we dont use : this before whatever parameter
//we wanna access it will litteraly go to that url
//and to to the intended on
router.get("/:id", blogController.blog_details);
router.delete("/:id", blogController.blog_delete);

module.exports = router;
