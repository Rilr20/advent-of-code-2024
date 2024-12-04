'use strict';

const XMAS = ["XMAS", "SAMX"]
export default {
    part1(file: string): number {
        // TOO LOW 2287 
        let rows = file.split("\n")
        let sum = 0
        rows.forEach((row, rowId) => {
            row.split('').forEach((element, charId) => {
                // console.log(`${element} : ${i}`);
                sum += horizontal(rows, rowId, charId) ? 1 : 0 // 380 matches
                
                sum += vertical(rows, rowId, charId) ? 1 : 0 // 393 matches
                sum += diagonal(rows,rowId, charId) //1514 matches
                
            });
            // horizontal(file, )
        })
        // console.log("should be 10");

        // horizontal 5
        // verical 3?
        // diagonal 

        // checks horizontal xmas
        // console.log(match?.length);

        return sum
    },
    part2(file: string): number {
        return -1
    }
}
function horizontal(rows: string[], rowId: number, charId: number): boolean {
    //diagonal to the left and to the right
    let xmas = ""
    // let rows = file.split("\n")
    for (let i = 0; i < 4; i++) {
        // console.log(file[rowId + i]);
        xmas += rows[rowId][charId+i]
        // console.log(xmas);
        
    }
    if (XMAS.includes(xmas)) {
        // console.log("I AM TRUE");
        
        return true
    }
    
    return false
}
function vertical(rows: string[], rowId: number, charId: number): boolean {
    //diagonal to the left and to the right
    let xmas = ""
    // let rows = file.split("\n")
    for (let i = 0; i < 4; i++) {
        // console.log(file[rowId + i]);
        // console.log(rows.length);
        // console.log(rowId+i);
        
        if (rowId +i < rows.length) {
            xmas += rows[rowId+i][charId]

        }
        // console.log(xmas);
        
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
    // let rows = file.split("\n")
    for (let i = 0; i < 4; i++) {
        // console.log(file[rowId + i]);
        // diagonal right
        // console.log(`rowId is ${rowId} ${rowId} + ${i} = ${rowId+i} what is rows lenght ${rows.length}`);

        if (rowId + i <= rows.length) {

            xmasLeft += rows[rowId+i][charId + i]

        }

        // diagonal left
        if (rowId - i > -1 && charId - i > -1) {
        // if (rowId + i < rows.length && charId - i >= 0) {
            // console.log(charId - i);
            // console.log(rowId - i);

            xmasRight += rows[rowId - i][charId - i]
            
        }

    }
    if (XMAS.includes(xmasLeft)) {
        //715 ggr
        // console.log("left");

        sum++
    }
    if (XMAS.includes(xmasRight)) {
        //785 ggr
        // console.log("right");

        sum++
    }
    
    return sum

}