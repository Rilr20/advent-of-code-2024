'use strict';

const XMAS = ["XMAS", "SAMX"]
export default {
    part1(file: string): number {
        // TOO LOW 2287 
        let rows = file.split("\n")
        let sum = 0
        rows.forEach((row, rowId) => {
            row.split('').forEach((_, charId) => {
                // console.log(`${element} : ${i}`);
                console.log(charId);
                
                sum += horizontal(rows, rowId, charId) ? 1 : 0 // 380 matches
                
                sum += vertical(rows, rowId, charId) ? 1 : 0 // 393 matches
                sum += diagonal(rows,rowId, charId) //1514 matches
                
            });
            // horizontal(file, )
        })

        return sum
    },
    part2(file: string): number {
        return -1
    }
}
function horizontal(rows: string[], rowId: number, charId: number): boolean {
    //Horizontal check
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
    //Vertical check
    let xmas = ""
    for (let i = 0; i < 4; i++) {
        
        if (rows[rowId + i]) {
            xmas += rows[rowId+i][charId]
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
    // let rows = file.split("\n")
    for (let i = 0; i < 4; i++) {

        //diagonal DOWN RIGHT 
        if (rows[rowId-i]) {
            xmasRight += rows[rowId-i][charId + i]
            console.log(`${rowId + i} ${charId + i}`);

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