'use strict';

export default {
    part1(file: string): number {
        // too high 5154

        let rows = file.split("\n")
        const height = rows.length
        const width = rows[0].length
        console.log(`${height}, ${width}`);
        let guardPos = findPosition(rows)

        let direction = "u"
        let visited: string[] = []
        visited.push(posToString(guardPos))
        while (guardPos[0] < width - 1 && guardPos[0] >= 0
            && guardPos[1] < height - 1 && guardPos[1] >= 0
        ) {
            // console.log(posToString(guardPos));

            if (lookAhead(rows, guardPos[0], guardPos[1], direction)) {
                // console.log(`move it ${guardPos}`);

                guardPos = move(direction, guardPos[0], guardPos[1])
                visited.push(posToString(guardPos))
            } else {
                console.log("direction time");

                console.log(direction);
                direction = changeDirection(direction)
                console.log(direction);

            }
            // console.log(direction);

        }

        console.log(visited.length);

        let uniquePositions = new Set(visited)
        let array = [...uniquePositions]
        // console.log(array);

        // console.log(array.length);

        return array.length

    },
    part2(file: string): number {
        
        return -1
    }
}
function findPosition(rows: string[]): number[] {
    let guard = "^"
    let result: number[] = []
    rows.forEach((row, rowId) => {
        if (row.includes(guard)) {
            result[1] = rowId
            result[0] = row.indexOf(guard)

        }
    })
    // result[0] = X
    // result[1] = Y
    return result
}

function posToString(guardPos: number[]): string {
    return `${guardPos[0]},${guardPos[1]}`
}

function move(direction: string, guardX: number, guardY: number): number[] {
    // console.log(direction);

    let position: number[] = []
    let newX = guardX
    let newY = guardY
    switch (direction) {
        case "u":
            newY = guardY - 1
            position = [newX, newY]
            break;
        case "d":
            newY = guardY + 1
            position = [newX, newY]
            break;
        case "l":
            newX = guardX - 1
            position = [newX, newY]
            break;
        case "r":
            newX = guardX + 1
            position = [newX, newY]
            break;
    }
    return position
}
function changeDirection(direction: string): string {
    switch (direction) {
        case "u":
            return "r"
        case "d":
            return "l"
        case "l":
            return "u"
        case "r":
            return "d"
        default:
            return ""
    }
}
function lookAhead(rows: string[], guardX: number, guardY: number, direction: string): boolean {
    let isBlocked: boolean = false

    switch (direction) {
        case "u":
            if (rows[guardY - 1]) {
                console.log(rows[guardY - 1][guardX]);

                isBlocked = rows[guardY - 1][guardX] != "#"
            } else {

                isBlocked = true
            }
            break;
        case "d":
            if (rows[guardY + 1]) {
                console.log(rows[guardY + 1][guardX]);

                isBlocked = rows[guardY + 1][guardX] != "#"

            } else {
                isBlocked = true
            }
            break;
        case "l":
            console.log(rows[guardY][guardX - 1]);

            isBlocked = rows[guardY][guardX - 1] != "#"
            break;
        case "r":
            console.log(rows[guardY][guardX + 1]);

            isBlocked = rows[guardY][guardX + 1] != "#"

            break;
    }
    if (isBlocked == false) {
        console.log("change direction");

    }
    return isBlocked
}