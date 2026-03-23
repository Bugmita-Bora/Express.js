const Home = require("../models/home");
exports.getAddHome = (req, res, next) => {
  res.render("addHome", {
    pageTitle: "Add Home to airbnb",
    currentPage: "addHome",
  });
};

exports.postAddHome = (req, res, next) => {
  const { houseName, price, location, rating, photoURL } = req.body;
  const home = new Home(houseName, price, location, rating, photoURL);
  home.save();

  res.render("homeAdded", {
    pageTitle: "Home Added Successfully",
    currentPage: "home Addeed",
  });
};

exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) =>
    res.render("home", {
      registeredHomes: registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "Home",
    }),
  );
};

//since we are not using the variables anywhere so directly exports likhskte h

// const getAddHome = (req, res, next) => {
//   res.render("addHome", { pageTitle: "Add Home to airbnb" });
// };
// exports.getAddHome = getAddHome
