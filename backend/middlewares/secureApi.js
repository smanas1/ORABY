const secureApi = (req, res, next) => {
  if (req.headers.key == process.env.API_KEY) {
    next();
  } else {
    res.status(401).send("Api is not Assessable");
  }
};

module.exports = secureApi;
