const { projectId, mnemonic } = require("./secrets.json");
const HDWalletProvider = require("@truffle/hdwallet-provider");

module.exports = {
  compilers: {
    solc: {
      version: "0.8.9",
    },
  },
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },
    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    ropsten: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://ropsten.infura.io/v3/${projectId}`
        ),
      network_id: 3, // Ropsten's id
      gas: 5500000, // Ropsten has a lower block limit than mainnet
      confirmations: 2, // # of confs to wait between deployments. (default: 0)
      timeoutBlocks: 200, // # of blocks before a deployment times out  (minimum/default: 50)
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },
    rinkeby: {
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://rinkeby.infura.io/v3/${projectId}`
        ),
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
      skipDryRun: true, // Skip dry run before migrations? (default: false for public nets )
    },
  },
};
