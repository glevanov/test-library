export const getCover = (url) => {
    const noCover = require('./nocover.jpg');
    if (!url) {
        return noCover;
    }
    return url;
};

export const emptyBook = {
    title: "",
    cover: "",
    description: "",
    author: "",
    isbn: "",
    year: "",
    rating: 0,
};
