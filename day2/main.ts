'use strict';

export default {
    part1(file: string): number {
        const rows: string[] = file.split("\n")
        let result: number = 0
        rows.forEach((row: string) => {
            let nums: string[] = row.split(" ")
            result += isSafe(convertStringListToNumber(nums)) || isSafe(convertStringListToNumber(nums), true) ? 1 : 0
        })
        return result
    },
    part2(file: string): number {
        return -1
    }
}
function isSafe(numbers: number[], decrement = false): boolean {
    let previous = decrement ? numbers[0] + 1 : numbers[0] - 1
    let isSafe = true

    numbers.forEach((number: number) => {
        let shouldStop
        if (!decrement) {
            const difference = number - previous

            shouldStop = difference < 0 || difference > 3 || difference == 0 ? true : false
        }

        if (decrement) {
            const difference = previous - number

            shouldStop = difference < 0 || difference > 3 || difference == 0 ? true : false
        }

        if (shouldStop) {
            isSafe = false
        }
        previous = number
    })

    return isSafe
}

function convertStringListToNumber(number: string[]): number[] {
    let returnList: number[] = []
    number.forEach(item => {
        returnList.push(parseInt(item))
    })

    return returnList
}