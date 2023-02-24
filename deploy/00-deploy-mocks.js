const { network } = require("hardhat");
const {
    developmentChains,
    INITIAL_ANSWER,
    DECIMALS,
} = require("../helper-hardhat-config");

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments;
    const { deployer } = await getNamedAccounts();
    const chainId = network.config.chainid;

    if (developmentChains.includes(network.name)) {
        console.log("Local network detected ! Deploying mocks...");
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            args: [DECIMALS, INITIAL_ANSWER],
        });
        console.log("MOCKS DEPLOYED");
        console.log("-------------------------");
    }
};

module.exports.tags = ["all", "mocks"];
