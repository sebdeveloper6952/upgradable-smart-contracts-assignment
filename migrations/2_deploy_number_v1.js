const { deployProxy } = require("@openzeppelin/truffle-upgrades");

const NumberV1 = artifacts.require("NumberV1");

module.exports = async function (deployer, network, accounts) {
  const instance = await deployProxy(NumberV1, [accounts[0]], { deployer });
  console.log("Deployed", instance.address);
};
