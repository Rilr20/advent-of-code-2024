'use strict';

export default {
    part1(file: string): number {
        const lines = file.split("\n")

        let left_list: number[] = []
        let right_list: number[] = []

        lines.forEach(line => {
            left_list.push(parseInt(line.split("   ")[0]))
            right_list.push(parseInt(line.split("   ")[1]))
        })

        left_list = left_list.sort((a, b) => a - b)
        right_list = right_list.sort((a, b) => a - b)

        let sum = 0
        while(left_list.length > 0) {
            sum += Math.abs(left_list[0] - right_list[0])
            left_list.shift()
            right_list.shift()
        }

        return sum
    },
    part2(file: string): number {
        const lines = file.split("\n")

        let left_list: number[] = []
        let right_list: number[] = []

        lines.forEach(line => {
            left_list.push(parseInt(line.split("   ")[0]))
            right_list.push(parseInt(line.split("   ")[1]))
        })

        let sum = 0
        while (left_list.length > 0) {
            let filter = left_list[0]
            let sorted_right = right_list.filter((item) => item == filter)
            sum += filter * sorted_right.length

            left_list.shift()
        }

        return sum
    }
}