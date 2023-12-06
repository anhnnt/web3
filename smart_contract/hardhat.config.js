require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.4',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/gkvC4B9MzqKlfBwO_ZfpPtGcQNwTd2B0',
      accounts: ['48c71bb8ba7f07a3558b06cb2fa7de30ad81a4c9aad62029e37a09ce0a9de872']
    },
  },
};
