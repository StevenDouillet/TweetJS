var express = require('express');
var router = express.Router();

router.post('/tweets', (req, res) => {
  const body = req.body;
  console.log(body);
  res.send(body);
});

module.exports = router;
