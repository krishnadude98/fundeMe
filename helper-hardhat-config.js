const networkconfig = {
    5: {
        name: "gorelli",
        ethUsdPrice: "0xD4a33860578De61DBAbDc8BFdb98FD742fA7028e",
    },
    80001: {
        name: "polygon",
        ethUsdPrice: "0x7bAC85A8a13A4BcD8abb3eB7d6b4d632c5a57676",
    },
};

const developmentChains = ["hardhat", "localhost"];
const DECIMALS = 8;
const INITIAL_ANSWER = 20000000000;

module.exports = {
    networkconfig,
    developmentChains,
    DECIMALS,
    INITIAL_ANSWER,
};
