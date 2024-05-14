var jwt = require("jsonwebtoken");
const tokenVerify = (req, res, next) => {
  try {
    var decoded = jwt.verify(req.headers.token, process.env.JWT_KEY);
    if (decoded) {
      next();
    } else {
      res.status(401).send("Valid Token Required");
    }
  } catch (error) {
    res.status(500).send("Valid Token Required");
  }
};

module.exports = tokenVerify;
