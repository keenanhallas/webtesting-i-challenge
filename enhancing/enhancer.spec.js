const { exportAllDeclaration } = require('@babel/types');
const { italic } = require('chalk');
const { describe } = require('yargs');
const enhancer = require('./enhancer.js');
// test away!

// describe("Testing item enhancer functions", () => {
//     it.todo("- Write tests");
// });

it.todo("- Write tests");

it("Tests the repair function", () => {
    const item = {
        name: "Short sword",
        durability: 50,
        enhancement: 0
    };
    console.log(item);
    const repairedItem = enhancer.repair(item);
    console.log(repairedItem);
    expect(repairedItem.durability).toBe(100);
});

it("Tests enhancement success", () => {
    const item = {
        name: "Short sword",
        durability: 50,
        enhancement: 0
    };
    console.log(item);
    const enhancedItem = enhancer.success(item);
    console.log(enhancedItem);
    expect(enhancedItem.enhancement).toBe(1);
});

it("Tests items with max enhancement aren't altered", () => {
    const item = {
        name: "Short sword",
        durability: 50,
        enhancement: 20
    };
    console.log(item);
    const enhancedItem = enhancer.success(item);
    console.log(enhancedItem);
    expect(enhancedItem.enhancement).toBe(20);
});

it("Tests failure with enhancement under 15", () => {
    const item = {
        name: "Short sword",
        durability: 100,
        enhancement: 14
    };
    console.log(item);
    const failedItem = enhancer.fail(item);
    console.log(failedItem);
    expect(failedItem.durability).toBe(95);
});

it("Tests failure with enhancement at 15", () => {
    const item = {
        name: "Short sword",
        durability: 100,
        enhancement: 15
    };
    console.log(item);
    const failedItem = enhancer.fail(item);
    console.log(failedItem);
    expect(failedItem.durability).toBe(90);
});

it("Tests that enhancement doesn't change with enhancement at 16", () => {
    const item = {
        name: "Short sword",
        durability: 100,
        enhancement: 16
    };
    console.log(item);
    const failedItem = enhancer.fail(item);
    console.log(failedItem);
    expect(failedItem.enhancement).toBe(16);
});

it("Tests that enhancement is lowered with enhancement over 16", () => {
    const item = {
        name: "Short sword",
        durability: 100,
        enhancement: 17
    };
    console.log(item);
    const failedItem = enhancer.fail(item);
    console.log(failedItem);
    expect(failedItem.enhancement).toBe(16);
});