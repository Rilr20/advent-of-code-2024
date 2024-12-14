'use strict';

export default {
    part1(file: string): number {
        // 3 token for button A
        // 1 token for button B

        /**
         * A = A button
         * B = B button
         * p = prize 
         * A*a_x + B*b_X = p_X
         * A*a_y + B*b_y = p_y
         * 
         * a_x + b_x = (p_x / B) + (p_x / A)
         */
        let sections = file.split("\n\n")
        let sum = 0
        sections.forEach((section) => {
            let datas = stringToData(section)
            let ax = datas[0]
            let ay = datas[1]
            let bx = datas[2]
            let by = datas[3]
            let px = datas[4]
            let py = datas[5]

            let res = EquationTimeBitch(ax, ay,bx,by,px,py)
            sum += coinCalc(res[0], res[1])

        })
        return sum
    },
    part2(file: string): number {
        let sections = file.split("\n\n")
        let sum = 0
        sections.forEach((section) => {
            let datas = stringToData(section)
            let ax = datas[0]
            let ay = datas[1]
            let bx = datas[2]
            let by = datas[3]
            let px = datas[4]
            let py = datas[5]

            let res = EquationTimeBitch(ax, ay, bx, by, px + 10000000000000, py + 10000000000000)
            sum += coinCalc(res[0], res[1])

        })
        return sum
    }
}
function EquationTimeBitch(Ax: number, Ay: number, Bx: number, By: number, Px: number, Py: number,): number[] {
    let A = 0

    A = (Py * Bx - Px * By) /(Ay * Bx - Ax * By)

    let B = 0
    B = (Px - A * Ax) / Bx

    if (B% 1 !== 0 || A % 1 !== 0) {
        B = 0
        A = 0
    }

    return [A, B]
}
function stringToData(string: string): number[] {
    let ax: number = 0,
        ay: number = 0,
        bx: number = 0,
        by: number = 0,
        px: number = 0,
        py: number = 0
    let rgx = /[0-9]+/gm
    let splits = string.match(rgx)
    // console.log(splits);
    if (splits) {
        ax = parseInt(splits[0])
        ay = parseInt(splits[1])
        bx = parseInt(splits[2])
        by = parseInt(splits[3])
        px = parseInt(splits[4])
        py = parseInt(splits[5])
    }

    return [ax, ay, bx, by, px, py]
}
function coinCalc(a: number, b:number):number {
    return (a*3) + (b* 1)
}