const controllers = {};

var sequelize = require("../model/database");
var Films = require("../model/Films");

sequelize.sync();

controllers.delete = async (req, res) => {
  const { id } = req.body;

  const del = await Films.destroy({
    where: { id: id },
  });

  res / json({ success: true, deleted: del, message: "Deleted successful" });
};

controllers.get = async (req, res) => {
  const { id } = req.params;
  const data = await Films.findAll({
    where: { id: id },
  })
    .then(function (data) {
      console.log(data);
      return data;
    })
    .catch((error) => {
      return error;
    });

  res.json({ success: true, data: data });
};

controllers.list = async (req, res) => {
  const data = await Films.findAll()

    .then(function (data) {
      console.log(data);
      return data;
    })
    .catch((error) => {
      return error;
    });
  res.json({
    success: true,
    data: data,
  });
};

controllers.create = async (req, res) => {
  const { name, rate, my_rate, genre } = req.body;
  const data = await Films.create({
    name: name,
    rate: rate,
    my_rate: my_rate,
    genre: genre,
  })
    .then(function (data) {
      return data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
  res.status(200).json({
    success: true,
    message: "Данные сохранены",
    data: data,
  });
};

controllers.update = async (req, res) => {
  console.log(req.body);

  const { id } = req.params;
  const { name, rate, my_rate, genre } = req.body;

  const data = await Films.update(
    {
      name: name,
      rate: rate,
      my_rate: my_rate,
      genre: genre,
    },
    {
      where: { id: id },
    }
  )

    .then(function (data) {
      return data;
    })
    .catch((error) => {
      return error;
    });

  res.json({ success: true, data: data, message: "Updata successful" });
};

// controllers.testdata = async (req, res) => {
//   const response = await sequelize
//     .sync()
//     .then(function () {
//       // create role
//       Role.create({
//         role: "User",
//       });
//       // create employee

//       Employee.create({
//         name: "Vova",
//         roleId: 1,
//       });

//       const data = Employee.findAll();
//       return data;
//     })
//     .catch((error) => {
//       return error;
//     });

//   res.json({ success: true, data: response });
// };
// controllers.test = (req, res) => {
//   const data = {
//     name: "Vova",
//     age: 18,
//   };

//   console.log("execute");
//   res.json(data);
// };

module.exports = controllers;
