'use strict';

export default {
    part1(file: string): number {
        const pattern = /mul\([0-9]+,[0-9]+\)/gm

        // const all = pattern.exec(file)
        const all = file.match(pattern)
        let sum = 0
        sum += fullMul(all)

        return sum
    },
    part2(file: string): number {
        // too low 1980837
        // too low 46219039
        // part one 166630675
        // too high 102113099

        const pattern = /mul\([0-9]+,[0-9]+\)/gm
        let sum = 0
        // let result = file.match(dos)
        // donts contains do, [0] only contains only dos
        let donts = file.split("don't()")

        let firstDos =donts[0].match(pattern)
        sum += fullMul(firstDos)

        donts.forEach((item) => {

            // split_dos[0] are donts
            let split_dos = item.split("do()")

            split_dos.shift()
            
            split_dos.forEach((split_do) => {
                const all = split_do.match(pattern)
                
                sum += fullMul(all)
            })
        })

        return sum
    }
}
function mul(x: number, y: number) {
    return x * y
}
function fullMul(list: RegExpMatchArray | null) {
    let sum = 0
    list?.forEach((item) => {
        let nums = item.match(/[0-9]+/g)
        // console.log(nums);

        if (nums !== null) {
            sum += mul(parseInt(nums[0]), parseInt(nums[1]))
        }
    })
    return sum
}