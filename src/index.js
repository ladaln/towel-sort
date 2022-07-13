module.exports = function towelSort (matrix) {
    let modifiedArr = [];
    if (matrix) {
        matrix.forEach((item, i) => {
            if (i % 2) {
                item.reverse();
            }
            modifiedArr = modifiedArr.concat(item);
        });
    }
    return modifiedArr;
}
