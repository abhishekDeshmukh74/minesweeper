function minesweeper(matrix) {
    const output = []
    for (let i = 0; i < matrix.length; i++) {
        output[i] = []
        for (let j = 0; j < matrix[i].length; j++) {
            const isAllowed = [i]
            const jsAllowed = [j]
            if (i + 1 <= matrix.length - 1) {
                isAllowed.push(i + 1)
            }
            if (i - 1 >= 0) {
                isAllowed.push(i - 1)
            }
            if (j + 1 <= matrix[i].length - 1) {
                jsAllowed.push(j + 1)
            }
            if (j - 1 >= 0) {
                jsAllowed.push(j - 1)
            }
            output[i][j] = getNeighborsAddition(i, j, isAllowed.sort(), jsAllowed.sort())
        }
    }

    function getNeighborsAddition(currentI, currentJ, isAllowed, jsAllowed) {
        let addition = 0
        for (let k = 0; k < isAllowed.length; k++) {
            for (let l = 0; l < jsAllowed.length; l++) {
                if (!(isAllowed[k] === currentI && jsAllowed[l] === currentJ)) {
                    addition += matrix[isAllowed[k]][jsAllowed[l]] ? 1 : 0
                }
            }
        }
        return addition
    }
    return output
}


console.log(minesweeper([
    [true, false, false],
    [false, true, false],
    [false, false, false]
]));
console.log(minesweeper([
    [false, false, false],
    [false, false, false]
]));
console.log(minesweeper([
    [true, false, false, true],
    [false, false, true, false],
    [true, true, false, true]
]));
