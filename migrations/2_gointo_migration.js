var GointoMigration = artifacts.require("GointoMigration");

module.exports = function(deployer, network, accounts) {
  var admin = accounts[0];
  deployer.deploy(GointoMigration, admin);
};
