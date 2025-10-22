function isLeap(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}

const year = 1990;
console.log(isLeap(year)); // Output: false      