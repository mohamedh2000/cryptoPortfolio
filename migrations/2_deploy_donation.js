const Donate = artifacts.require("Donate");

module.exports = function (deployer) {
    deployer.deploy(Donate).then(() => {
        console.log(Donate.address);
    });
}