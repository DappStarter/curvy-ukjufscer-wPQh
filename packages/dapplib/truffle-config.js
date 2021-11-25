require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process outside venture struggle remember prefer proud inflict brass frame gather'; 
let testAccounts = [
"0x6435dfc51c55cb030c6320f8807d047cbeb0d582026e13b7c0932c6ab9b25e2b",
"0x23cc82d2c360df6445a964d7e08cf0dd53bf299a44be7484287df980d4c7e192",
"0x1ab28e3c93952291fdd0775bb31440b75b051a592e9d428f2b6bd990f578705f",
"0x45224840ae3d25f639fee5cfcb20c303efbc6d59b44decfb365182e68be78963",
"0xfea55cc04b50ba02741c41d63f2b23bd1b0636076bac80d5a631b97527b25391",
"0x6b82a5108ade5dcfb71617b21b8177aa99661afcc3f8119671ed182c20eb45fb",
"0x3a0313aba969827b8d8e4efda9d1e407bb21ec456ebdcb89fe14d00aeb66487d",
"0x936a8ed7a5e2020a1555101772924b628cceea7f1b317bd4cb5bbc5e590681f6",
"0x2964c70bf5a8bf9bdbebe97992b91d90da6e6bc9dfed9a98f4c9e5ed3d8e5f00",
"0x929c634a36e6ea195f107ae9a6b21ae53de75a24095e2381fec6c1edcbf23354"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


