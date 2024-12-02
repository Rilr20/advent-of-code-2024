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
        const rows: string[] = file.split("\n")
        let result: number = 0
        rows.forEach((row:string) => {
            let nums: string[] = row.split(" ")
            const lists = differenceList(convertStringListToNumber(nums))
            
            let incSafe = newIsSafe(lists[0])
            // console.log(`SUPA: ${incSafe}`);
            let decSafe = newIsSafe(lists[1])
            // console.log(`SUPA: ${decSafe}`);

            result += incSafe ? 1 : 0
            result += decSafe ? 1 : 0
        })

        return result
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
function differenceList(numbers:number[]):number[][] {
    let incPrevious = numbers[0] - 1 
    let decPrevious = numbers[0] + 1
    let incList:number[] = []
    let decList:number[] = []
    numbers.forEach((number: number) => {
        const incDifference = number - incPrevious
        incList.push(incDifference)
        const decDifference = decPrevious - number
        decList.push(decDifference)

        incPrevious = number
        decPrevious = number
    })

    return [incList, decList]
}
function newIsSafe(numbers:number[], getNegative=true):boolean {
    // 507 too low
    // 533 too high
    console.log("START: " + `${numbers}`);
    
    let negatives = getNegative ? findAllNegatives(numbers) : []
    let isSafe = true
    // let shouldStop = true
    numbers.forEach((number) => {
        
        if (number <= 0 || number > 3) {
            // console.log("olololololo false");
            
            isSafe = false
        } 
    })
    
    
    if (!isSafe && negatives.length > 0) {
        for (let i = 0; i < numbers.length; i++) {
            if (newIsSafe(numbers.filter((_, j) => j !== i), false)) {
                isSafe = true
            } 
        }
    }

    // console.log();
    // console.log();
    // console.log();  
    return isSafe
}
function findAllNegatives(numbers:number[]):number[][] {
    let negativelist:number[][] = []
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] <= 0 || numbers[i] > 3) {
            negativelist.push([numbers[i], i])
        }
    }
    console.log(` ${negativelist}`);
    
    return negativelist
}