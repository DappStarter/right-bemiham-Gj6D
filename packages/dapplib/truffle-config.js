require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include enroll sure tribe stomach crawl remember code gesture hat army gas'; 
let testAccounts = [
"0xfffea8d3f4bf05d25dbdc2a6a76daa3f9ede5c2e2ed7b3daaa25167b89a26b52",
"0xff870b99159303bdf29e22735ede5df474381f914065e3ce0f32df4af46685f8",
"0xca9ce18074585591fb6821d3c3fa6efe0e7b1e239e762e1461d571b4fb6087f1",
"0x2ecb9bac003fd72b094ecc81cc6baf300f82de007a01d5fce28bf2481b3703ab",
"0xb3b6ff7b40727ab94c39ba4791d81f0e7efe220f39549ed016014da8f3157daf",
"0xf8f6f037bf33cad8d5b363a8526e70da8234aa3c00a4568cd93d75ec6bdf5bb4",
"0xe5bb12d9d4cf62f000952a97c8a42d49877bd99b416e83c2cbececcb93b5ef83",
"0xb0748e74ef0168a94d1b1a4a77706fb3dd341dd58b9e084e0225c43100007c24",
"0x60611e6c43cb4729f54ad58d3087713aaf4b39fa052b52c1df501e00bffe7b60",
"0xf315dcb664c8d6753eb9a5b951bf7bd8259ffef960c556b3ec0ae7d4f131eef9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

