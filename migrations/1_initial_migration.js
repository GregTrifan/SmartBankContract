const SmartBank = artifacts.require("SmartBankAccount");

module.exports = function (deployer) {
  deployer.deploy(SmartBank);
};
