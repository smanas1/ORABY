const secureApi = (req, res, next) => {
  if (req.headers.key == 1111) {
    next();
  } else {
    res.status(401).send("api is not assessable");
  }
};

module.exports = secureApi;
