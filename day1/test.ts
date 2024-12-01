'use strict';
import fs from "fs";
import main from "./main";
// import * from "./main.ts"
// const fs = require("fs");
const { part1, part2 } = main


function getFile(filepath:string) {
    try {
        return fs.readFileSync(filepath).toString();
    } catch (error) {
        return ""
    }
}

function part_1_test_example_1() {
    let file = getFile('example.txt');
    let result = part1(file);
    const expected = -1
    console.log("Part 1 returned " + result);
    result === expected ? console.log("PASSED: part 2 returned " + result) : console.log("FAILED: part 2 returned " + result + " instead of " + expected);

}

function part_1_test_real_input() {
    let file = getFile('input.txt');
    let result = part1(file);
    console.log("Part 1 returned " + result);
}

function part_2_test_example_1() {
    let file = getFile('example.txt');
    let result = part1(file);
    const expected = -1
    console.log("Part 1 returned " + result);
    result === expected ? console.log("PASSED: part 2 returned " + result) : console.log("FAILED: part 2 returned " + result + " instead of " + expected);

}

function part_2_test_real_input() {
    let file = getFile('input.txt');
    let result = part1(file);
    console.log("Part 1 returned " + result);
}

function run() {
    part_1_test_example_1()
    part_1_test_real_input()

    part_2_test_example_1()
    part_2_test_real_input()
}

run()