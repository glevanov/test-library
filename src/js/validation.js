import { isbn } from 'simple-isbn';

export const isYear = (str) => {
    const data = Number(str);
    const currentYear = new Date().getFullYear();
    return !data.isNaN
        && str.trim() !== ''
        && data >= 0
        && data <= currentYear;
};

export const isISBN = (str) => isbn.isValidIsbn(str);
