'use strict';

const XMAS = ["XMAS", "SAMX"]
export default {
    part1(file: string): number {
        // TOO LOW 2287 
        let rows = file.split("\n")
        let sum = 0
        rows.forEach((row, rowId) => {
            row.split('').forEach((_, charId) => {

                sum += horizontal(rows, rowId, charId) ? 1 : 0 // 380 matches

                sum += vertical(rows, rowId, charId) ? 1 : 0 // 393 matches
                sum += diagonal(rows, rowId, charId) //1514 matches

            });
        })

        return sum
    },
    part2(file: string): number {
        // too high 2521
        // too low 923
        let rows = file.split("\n")
        let sum = 0
        rows.forEach((row, rowId) => {
            row.split('').forEach((char, charId) => {
                if (char == "A") {
                    sum += leftDiagonal(rows, rowId, charId) && rightDiagonal(rows, rowId, charId) ? 1 : 0
                }
            });
        })
        return sum
    }
}

function leftDiagonal(rows: string[], rowId: number, charId: number): boolean {
    // top left is (-1, +1) bottom right is (+1, -1)
    try {
        
        if (rows[rowId + 1][charId - 1] == "M" && rows[rowId - 1][charId + 1] == "S") {
            
            return true
        }
    } catch (error) {
        
    }

    try {

        if (rows[rowId + 1][charId - 1] == "S" && rows[rowId - 1][charId + 1] == "M") {
            
            return true
        }
    } catch (error) {
        
    }
    
    return false
}

function rightDiagonal(rows: string[], rowId: number, charId: number): boolean {
    // top right is (+1, +1) bottom left is (-1, -1)
    try {

        if (rows[rowId + 1][charId +1] == "M" && rows[rowId - 1][charId - 1] == "S") {

            return true
        }
    } catch (error) {

    }

    try {

        if (rows[rowId + 1][charId + 1] == "S" && rows[rowId - 1][charId - 1] == "M") {

            return true
        }
    } catch (error) {

    }

    return false
}

function horizontal(rows: string[], rowId: number, charId: number): boolean {
    //Horizontal check
    let xmas = ""
    for (let i = 0; i < 4; i++) {
        xmas += rows[rowId][charId + i]

    }
    if (XMAS.includes(xmas)) {

        return true
    }

    return false
}
function vertical(rows: string[], rowId: number, charId: number): boolean {
    //Vertical check
    let xmas = ""
    for (let i = 0; i < 4; i++) {

        if (rows[rowId + i]) {
            xmas += rows[rowId + i][charId]
        }

    }
    if (XMAS.includes(xmas)) {
        return true
    }
    return false
}
function diagonal(rows: string[], rowId: number, charId: number): number {
    //diagonal to the left and to the right
    let xmasLeft = ""
    let xmasRight = ""
    let sum = 0

    for (let i = 0; i < 4; i++) {

        //diagonal DOWN RIGHT 
        if (rows[rowId - i]) {
            xmasRight += rows[rowId - i][charId + i]
        }

        // diagonal DPWM ÖEFT
        if (rows[rowId - i]) {
            xmasLeft += rows[rowId - i][charId - i]

        }

    }
    if (XMAS.includes(xmasLeft)) {
        //785 ggr
        sum++
    }
    if (XMAS.includes(xmasRight)) {
        //715 ggr
        sum++
    }

    return sum

}