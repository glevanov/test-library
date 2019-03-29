import ISBN from 'isbn-validate';

export const isYear = (str) => {
    const data = Number(str);
    const currentYear = new Date().getFullYear();
    return !data.isNaN
        && data >= 0
        && data <= currentYear;

};

export const isString = (str) => {
    return typeof str === 'string'
        && str.trim() !== ''
};

export const isISBN = (str) => {
    return ISBN(str);
};
