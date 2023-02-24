const { network } = require("hardhat");
const { verify } = require("../utils/verify");
const { networkconfig } = require("../helper-hardhat-config");
const {
    developmentChains,
    INITIAL_ANSWER,
    DECIMALS,
} = require("../helper-hardhat-config");

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const chainId = network.config.chainid;

    //we use harhat mock contract
    let ethUstAddress;
    if (developmentChains.includes(network.name)) {
        const ethUstAggregator = await deployments.get("MockV3Aggregator");
        ethUstAddress = ethUstAggregator.address;
    } else {
        ethUstAddress = networkconfig[chainId]["ethUsdPrice"];
    }
    const fundMe = await deploy("FundMe", {
        from: deployer,
        args: [ethUstAddress],
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    });

    if (
        !developmentChains.includes(network.name) &&
        process.env.ETHERSCAN_API_KEY
    ) {
        await verify(fundMe.address, [ethUstAddress]);
    }

    console.log("-------------------------------------------");
};

module.exports.tags = ["all", "fundme"];
