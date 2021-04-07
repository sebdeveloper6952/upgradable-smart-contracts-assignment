const { upgradeProxy } = require("@openzeppelin/truffle-upgrades");

const NumberV1 = artifacts.require("NumberV1");
const NumberV2 = artifacts.require("NumberV2");

module.exports = async function(deployer, network, accounts) {
  const existing = await NumberV1.deployed();
  const numberV2 = await upgradeProxy(existing.address, NumberV2, { deployer });
  console.log("Deployed", numberV2.address);
};
