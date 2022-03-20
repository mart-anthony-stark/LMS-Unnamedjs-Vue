const router = ({ GET }) => {
  GET("/", (req, res) => {
    res.send("Home");
  });
};
module.exports = router;
