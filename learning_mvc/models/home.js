// core module
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtil");

//fake databse
// const registeredHomes = [];

module.exports = class Home {
  constructor(houseName, price, location, rating, photoURL) {
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoURL = photoURL;
  }

  save() {
    Home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      const homeDatapath = path.join(rootDir, "data", "homes.json");
      fs.writeFile(homeDatapath, JSON.stringify(registeredHomes), (error) => {
        console.log("File Writing Concluded", error);
      });
    });
  }

  static fetchAll(callback) {
    const homeDatapath = path.join(rootDir, "data", "homes.json");
    fs.readFile(homeDatapath, (err, data) => {
      if (!err) {
        callback(JSON.parse(data));
      } else callback([]);
    });
  }
};
