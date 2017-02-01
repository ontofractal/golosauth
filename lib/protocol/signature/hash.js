var crypto = require('crypto');

/** @arg {string|Buffer} data
    @arg {string} [digest = null] - 'hex', 'binary' or 'base64'
    @return {string|Buffer} - Buffer when digest is null, or string
*/
function sha1(data, encoding) {
    return crypto.createHash('sha1').update(data).digest(encoding)
}

/** @arg {string|Buffer} data
    @arg {string} [digest = null] - 'hex', 'binary' or 'base64'
    @return {string|Buffer} - Buffer when digest is null, or string
*/
function sha256(data, encoding) {
    return crypto.createHash('sha256').update(data).digest(encoding)
}

/** @arg {string|Buffer} data
    @arg {string} [digest = null] - 'hex', 'binary' or 'base64'
    @return {string|Buffer} - Buffer when digest is null, or string
*/
function sha512(data, encoding) {
    return crypto.createHash('sha512').update(data).digest(encoding)
}

function HmacSHA256(buffer, secret) {
    return crypto.createHmac('sha256', secret).update(buffer).digest()
}

function ripemd160(data) {
    return crypto.createHash('rmd160').update(data).digest()
}

module.exports = {
    sha1: sha1,
    sha256: sha256,
    sha512: sha512,
    HmacSHA256: HmacSHA256,
    ripemd160: ripemd160
}
