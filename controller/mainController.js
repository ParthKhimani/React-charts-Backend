const Users = require("../model/users");

const statusData = (req, res, next) => {
  var status = [];
  var active = 0;
  var inactive = 0;
  var disabled = 0;

  Users.find().then((result) => {
    for (let i = 0; i < result.length; i++) {
      if (result[i].status == "active") {
        active++;
      }
      if (result[i].status == "inactive") {
        inactive++;
      }
      if (result[i].status == "disabled") {
        disabled++;
      }
    }
    status.push({ active: active, inactive: inactive, disabled: disabled });
    res.json(status);
  });
};

const signedUpData = async (req, res, next) => {
  var year = req.boy;
  try {
    const startDate = new Date(year, 0, 1);
    const endDate = new Date(year, 11, 31);
    Users.find({
      $where: {
        $gte: [{ created_at: startDate }],
        $lte: [{ created_at: endDate }],
      },
    }).then((result) => {
      res.json(result);
    });
  } catch (error) {
    console.log(error);
  }
};

const usersTable = (req, res, next) => {
  Users.find().then((result) => {
    console.log(result);
    res.json(result);
  });
};

module.exports = { statusData, signedUpData, usersTable };
