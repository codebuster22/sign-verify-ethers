/**
 * @dev this method signs a message, where message is converted to be EIP-191 compliant
 * @param {*} message message that needs to be signed, if the message is a hash or hexadecimal, convert it using 'ethers.utils.arrayify()'
 * @param {*} signer ethers.Signer object of the signer, who needs to sign the message
 * @returns Raw Signature
 */
const signMessage = async (message, signer) => await signer.signMessage(message);

module.exports = {signMessage};
