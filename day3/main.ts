'use strict';

export default {
    part1(file: string): number {
        const pattern = /mul\([0-9]+,[0-9]+\)/gm

        // const all = pattern.exec(file)
        const all = file.match(pattern)
        let sum = 0
        all?.forEach((item) => {
            let nums = item.match(/[0-9]+/g)
            console.log(nums);
            
            if (nums !== null) {
                sum += mul(parseInt(nums[0]), parseInt(nums[1]))
            }
        })
        console.log(all);

        return sum
    },
    part2(file: string): number {
        return -1
    }
}
function mul(x: number, y: number) {
    return x * y
}