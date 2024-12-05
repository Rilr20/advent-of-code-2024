'use strict';

export default {
    part1(file: string): number {
        let pageNumbers = file.split("\n")
        let pageOrdering = pageNumbers.splice(0, pageNumbers.indexOf(''))
        // console.log(pageOrdering);
        pageNumbers.shift()
        // console.log(pageNumbers);

        /**
         * if the line includes both 97 and 13 
         * then 97 shall appear before 13
         * 97|13
         */
        let sum = 0

        pageNumbers.forEach((page) => {
            let orderingTrue = true
            // console.log("NEW PAGE");
            
            pageOrdering.forEach((order) => {
                
                let orderSplit = order.split("|")
                // console.log(orderSplit);
                
                if (page.includes(orderSplit[0]) && page.includes(orderSplit[1])) {
                    // console.log("I CONTAIN OBTH");
                    
                    if (!appearFirst(page, orderSplit[0], orderSplit[1])) {
                        orderingTrue = false
                    }

                } 
            })
            if (orderingTrue) {
                // console.log("i was true");
                sum += returnMiddleNumber(page)   
                
            } 
            // console.log(page);
            
        })

        return sum
    },
    part2(file: string): number {
        return -1
    }
}
function appearFirst(pageNumbers:string, firstNumber:string, secondNumber:string):boolean {
    let split = pageNumbers.split(",")

    // console.log(split);
    let firstIndex = split.indexOf(firstNumber)
    let secondIndex = split.indexOf(secondNumber)
    // console.log(firstIndex);
    // console.log(secondIndex);
    
    if (firstIndex < secondIndex) {
        // console.log("first index appears before second index");
        return true
    }

    return false
}

function returnMiddleNumber(pageNumbers:string):number {
    let split = pageNumbers.split(",")
    let middle = Math.floor(split.length / 2)
    // console.log(split.length);
    // console.log(middle);
    
    return parseInt(split[middle])
} 