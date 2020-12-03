module.exports = (req, res, next) => {
  const { startDate, endDate, minCount, maxCount } = req.body;

  let response = { code: 400, msg: "", records: [] };

  if (!startDate) {
    response.msg = "startDate can't be empty";
    return res.status(400).send(response);
  }

  if (!endDate) {
    response.msg = "endDate can't be empty";
    return res.status(400).send(response);
  }

  if (!minCount) {
    response.msg = "minCount can't be empty";
    return res.status(400).send(response);
  }

  if (!maxCount) {
    response.msg = "maxCount can't be empty";
    return res.status(400).send(response);
  }

  let regex = new RegExp("[0-9]{4}(-)[0-9]{2}(-)[0-9]{2}");

  if (!regex.test(startDate)) {
    response.msg = "startDate must be in format YYYY-MM-DD(e.g 2020-12-11)";
    return res.status(400).send(response);
  }

  if (!regex.test(endDate)) {
    response.msg = "endDate must be in format YYYY-MM-DD(e.g 2020-12-11)";
    return res.status(400).send(response);
  }

  if (parseInt(minCount) > parseInt(maxCount)) {
    response.msg = "minCount should be less than maxCount";
    return res.status(400).send(response);
  }

  return next();
};
