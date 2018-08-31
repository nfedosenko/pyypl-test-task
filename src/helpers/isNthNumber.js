/**
 * Helper function for checking if current item in array is the nth one
 * @param n
 * @param number
 * @returns {boolean}
 */
const isNthNumber = (n, number) => {
    return number % n === 0;
};

export default isNthNumber;