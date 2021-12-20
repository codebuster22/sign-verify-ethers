const { ethers } = require("ethers");

/**
 * @dev it returns the public address of signer
 * @param {*} message the message that was signed
 * @param {*} signature signature that needs to checked
 * @returns public address of signer
 */
const verifySignature = (message, signature) => ethers.utils.verifyMessage(message, signature);

module.exports = {verifySignature};
