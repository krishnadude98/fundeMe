const { ethers, deployments, network, getNamedAccounts } = require("hardhat");
async function main() {
    const { deployer } = getNamedAccounts();
    const fundeMe = await ethers.getContract("FundMe", deployer);
    console.log("funding");
    const transactionResponse = await fundeMe.withdraw();
    await transactionResponse.wait(1);
    console.log("Got it back");
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.log(err);
        process.exit(1);
    });
