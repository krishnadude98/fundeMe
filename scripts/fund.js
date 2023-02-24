const { ethers, deployments, network, getNamedAccounts } = require("hardhat");
async function main() {
    const { deployer } = getNamedAccounts();
    const fundeMe = await ethers.getContract("FundMe", deployer);
    console.log("Funding Contract....");
    const transactionResponse = await fundeMe.fund({
        value: ethers.utils.parseEther("0.5"),
    });
    await transactionResponse.wait(1);
    console.log("Funded!!");
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.log(err);
        process.exit(1);
    });
