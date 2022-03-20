const routers = [
  {
    prefix: "auth",
    router: require("./auth.route"),
  },
  {
    prefix: "student",
    router: require("./student.route"),
  },
];

module.exports = routers;
