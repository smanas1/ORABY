const imageUpload = (req, res) => {
  res.json(req.files);
};
module.exports = imageUpload;
