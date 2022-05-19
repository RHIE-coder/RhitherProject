const Migrations = artifacts.require("Migrations");
const NFT = artifacts.require("NFT");
const Market = artifacts.require("Market");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(NFT);
  deployer.deploy(Market);
};
/*
npm i -D truffle
npm i -D ganache
npm i -D @openzeppelin/contracts
npx ganache
npx truffle compile
npx truffle migrate --reset
npx truffle console
----console----
const t = await NFT.deployed()
t.mint()
const m = await Market.deployed()
m.getListing(0)
t.approve(m.address, 0)
m.listToken(t.address, 0, 1000)
m.getListing(0)
*/