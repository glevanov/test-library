export default (url) => {
    const noCover = require('../nocover.jpg');
    if (!url) {
        return noCover;
    }
    return url;
};
