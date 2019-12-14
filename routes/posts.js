const router = require("express").Router();
const verify = require("./verifyToken");

router.get("/", verify, (req, res) => {
  res.json({
    posts: {
      title: "My first Post",
      description: "Random Texts here and that belong to the store"
    }
  });
  res.send(req.user);
});
module.exports = router;
