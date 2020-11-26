const NovaxToken = artifacts.require('NovaxToken');

module.exports = async function(deployer, network, accounts) {
  // Deploy Token
  await deployer.deploy(NovaxToken)
  const novaxToken = await NovaxToken.deployed()
}