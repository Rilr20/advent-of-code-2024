'use strict';

export default {
    part1(file: string): number {
        /**
         * Pick two points.
         * Find the X-Y distance between them. 
         * Add that same distance to each of the two points, each going in the exact opposite direction to the other point.
         * Enjoy a pancake afterward.
         */

        let rows = file.split("\n")
        let sum = 0
        const height = rows.length
        const width = rows[0].length
        rows.forEach((row, rowId) => {
            // console.log(row);
            let chars = row.split("")
            chars.forEach((char, charId)=> {
                // console.log(char);
                if (char !== "." && char !== "#") {
                    console.log(char);
                    sum += findAntinodes(rows, rowId, charId,height, width) ? 1: 0
                    
                }
            })
        })
        
        // How many unique locations within the bounds of the map contain an antinode?
        return sum
    },
    part2(file: string): number {
        return -1
    }
}
function findAntinodes(rows:string[], charY:number, charX:number, boardHeight:number, boardWidth:number) {
    let antinodeCoords:number[][] = []
    let currentSignal = rows[charY][charX]
    console.log(`I am the signal: ${currentSignal}`);
    
    console.log(positions(charX, charY, 1));
    console.log(positions(charX, charY, 2));
    /**
     * start at the charY,charY coordinates
     * increment by +1 check if the positions contain a char that isn't "."
     * profit?
     */
    
    
    for (let i = 1; i < boardWidth; i++) {
        
        // const element = array[i];
        let positionsRes = positions(charX, charY, i)
        positionsRes.forEach(pos => {
            // console.log(rows[pos[1]][pos[0]]);
            if (rows[pos[1]] && rows[pos[1]][pos[0]] !== "." && rows[pos[1]][pos[0]] !== undefined) {
                // console.log(`${pos} contains ${rows[pos[1]][pos[0]]}`);
                antinodeCoords.push(pos)
            }
        });
        // are there # or any other signal here and both being same distance from each other

        //?!?!? one of them should be a signal the other antinode?
        // the returns might be totally wrong
        return antinodeCoords.every((item) => {
            
            return antinodeCoords.every((item2) => {
                // console.log(rows[item[1]]);
                // console.log(rows);
                
                // console.log(rows[item[1]][item[0]]);
                
                // console.log(rows[item[1]][item[0]]);
                
                if (item !== item2 && rows[item[1]][item[0]] == currentSignal) {

                    console.log("tja tja" + `item1 is ${item[0]}${item[1]} ${item2}` + `item(${rows[item2[1]][item2[0]]}) 2 is ${item2[0]}${item[1]} ${item2}`);
                    
                    //item1 is equal to current signal and thus the (X,Y) should be compared to start position
                    //item2 (X,Y) should also be compared to start position
                    //if both (X,Y) of item1 and item2 then they are for the same singal?
                    let dif = difference(charX, charY, item[0], item[1])
                    console.log(dif + " i am dif");
                    let dif2 = difference(charX, charY, item2[0], item2[1])
                    console.log(dif2 + " i am dif2");
                    if (dif == dif) {
                        return true
                    }
                }
            })
        })
    }
    console.log(antinodeCoords);
    
}
function difference(ax:number, ay:number, bx:number, by:number) {
    let pos:number[]= []
    pos[0]=Math.abs(ax - bx)
    pos[1]=Math.abs(ay - by)
    return posToString(pos)
}


function posToString(guardPos: number[]): string {
    return `${guardPos[0]},${guardPos[1]}`
}
function positions(x:number, y:number, radius:number):number[][] {
    // let intervalX = [x - radius, x+radius]
    // let intervalY = [y - radius, x+radius]
    let positions: number[][] = []

    for (let dx = -radius; dx <= radius; dx++) {
        for (let dy = -radius; dy <= radius; dy++) {
            // Only include positions at the exact distance of the radius
            if (Math.abs(dx) === radius || Math.abs(dy) === radius) {
                positions.push([x + dx, y + dy]);
            }
        }
    }

    return positions
}