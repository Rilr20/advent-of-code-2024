'use strict';

export default {
    part1(file: string, blinks:number): number {
        // too high 280144
        let stoneString = file.split(" ")
        console.log(stoneString);
        let stoneNumber = stringToNum(stoneString)
        console.log(stoneNumber);

        for (let i = 1; i <= blinks; i++) {
            stoneNumber = stoneRules(stoneNumber)
        }
        console.log(stoneNumber);
        
        return stoneNumber.length
    },
    part2(file: string): number {
        return -1
    }
}
function stoneRules(stones:number[]):number[] {
    let newStones:number[] = []
    let id = 0
    stones.forEach((stone) => {
        // RULES
        // If the stone is engraved with the number 0, it is replaced by a stone engraved with the number 1.

        //If the stone is engraved with a number that has an even number of digits, it is replaced by two stones.
        // The left half of the digits are engraved on the new left stone, and the right half of the digits are engraved on the new right stone.
        //(The new numbers don't keep extra leading zeroes: 1000 would become stones 10 and 0.)

        //If none of the other rules apply, the stone is replaced by a new stone; the old stone's number multiplied by 2024 is engraved on the new stone.
        if (stone == 0) {
            newStones[id] = 1
        } else if (stone.toString().length % 2 == 0) {
            let stoneString = stone.toString()
            newStones[id] = parseInt(stoneString.slice(0, stoneString.length / 2))
            id++
            newStones[id] = parseInt(stoneString.slice(stoneString.length / 2, stoneString.length))
        } else {
            newStones[id] = stone*2024
        }
        id++
    })
    return newStones
}
function stringToNum(stringArr: string[]):number[] {
    let numbers:number[] = []
    stringArr.map((string) => {
        numbers.push(parseInt(string))
    })
    return numbers
}