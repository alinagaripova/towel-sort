
// You should implement your task here.

module.exports = function towelSort (matrix) {
    let result = []
    if (matrix == undefined) {
        return result
    } else {
        for (let i1 = 0; i1 < matrix.length; i1++) {
            if (i1%2 == 0) {
                for (let i2 = 0; i2 < matrix[i1].length; i2++) {
                    result.push(matrix[i1][i2])
                }
            } else {
                for (let i2 = matrix[i1].length-1; i2 >= 0; i2--) {
                    result.push(matrix[i1][i2])
                }
            }

        }
    }
    return result;
}
