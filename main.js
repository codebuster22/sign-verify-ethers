const { ethers } = require("ethers");
const {signMessage} = require("./sign");
const {verifySignature} = require("./verify");
const messageToSign = "This is a fake message that needs to be signed, I used this to showcase how to sign a string message.";
const hashToSign = "0x1234";


const main = async () => {
    await signString();
    await signHash()
}

const signString = async () => {
    console.log("\n Signing String \n");
    const signer = ethers.Wallet.createRandom();
    const signature = await signMessage(messageToSign, signer);
    console.log(`This is how the signature will look:- ${signature}`);
    const whoWasTheSigner = verifySignature(messageToSign, signature);
    console.log(`This is what you get from VerifySignature:- ${whoWasTheSigner}`);
    console.log(`Original Signer:- ${signer.address} || Retrieved Signer:- ${whoWasTheSigner}`);
}

const signHash = async () => {
    console.log("\n Signing Hash or Hexadecimal \n");
    const signer = ethers.Wallet.createRandom();
    // as we are signing the has, we need to convert it to arrayify using ethers.utils.arrayify()
    const arrayifiedHash = ethers.utils.arrayify(hashToSign);
    const signature = await signMessage(arrayifiedHash, signer);
    console.log(`This is how the signature will look:- ${signature}`);
    const whoWasTheSigner = verifySignature(arrayifiedHash, signature);
    console.log(`This is what you get from VerifySignature:- ${whoWasTheSigner}`);
    console.log(`Original Signer:- ${signer.address} || Retrieved Signer:- ${whoWasTheSigner}`);
}

main();