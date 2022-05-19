const Migrations = artifacts.require("Migrations");
const SimpleApp = artifiacts.require("SimpleApp");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(SimpleApp);

};
