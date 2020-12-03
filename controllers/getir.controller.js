const moment = require("moment");

exports.datas = async (req, res) => {
  const { startDate, endDate, minCount, maxCount } = req.body;

  let response = { code: 1, msg: "", records: [] };

  const datas = require("../models/getir");

  datas
    .aggregate([
      {
        $match: {
          createdAt: {
            $gte: moment(startDate).startOf("day").toDate(),
            $lte: moment(endDate).endOf("day").toDate(),
          },
        },
      },
      {
        $project: {
          _id: 0,
          key: "$key",
          createdAt: "$createdAt",
          totalCount: {
            $sum: "$counts",
          },
        },
      },
      {
        $match: {
          totalCount: {
            $gt: Number(minCount),
            $lt: Number(maxCount),
          },
        },
      },
    ])
    .exec((err, collection) => {
      if (err) {
        response.msg = err;
        return res.status(500).send(response);
      }
      response.code = 0;
      response.msg = "success";
      response.records = collection;
      res.status(200).send(response);
    });
};
