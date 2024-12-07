'use strict';

export default {
    part1(file: string): number {
        let result = 0
        let rows = file.split("\n")
        rows.forEach((row) => {
            let answer = row.split(":")
            let numList = answer[1].split(" ")
            numList.shift()
            let expresions = createExpression(numList)
            result += calcNumber(expresions, parseInt(answer[0])) ? parseInt(answer[0]) : 0    
        })
        return result
    },
    part2(file: string): number {
        return -1
    }
}
function createExpression(numList:string[]) {
    let expressions:string[] = [numList[0]]

    numList.shift()
    numList.forEach(number => {
        let newExpr:string[] = []
        expressions.forEach(expression => {
            let  addExpression = `${expression} + ${number}`
            newExpr.push(addExpression)
            let muktExpression = `${expression} * ${number}`
            newExpr.push(muktExpression)

        });
        expressions = newExpr
    });
    return expressions
}

function calcNumber(expressions:string[], result: number):boolean {
    let results:number[]  = []
    
    expressions.forEach(expression => {
        let parts = expression.split(" ")
        let sum:number = parseInt(parts[0])
        
        for (let i = 1; i < parts.length; i++) {
            let nextValue =parseInt(parts[i+1])
            if (parts[i] === '+') {
                sum += nextValue;
            } else if (parts[i] === '*') {
                sum *= nextValue;
            }
        }
        results.push(sum)
    });

    
    return results.includes(result) ? true : false
}