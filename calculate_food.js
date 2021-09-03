let assert = require('assert')

let myArgs = process.argv.slice(2);

if (myArgs.length < 4 || myArgs.length >= 5) {
    console.log("Invalid number of arguments. Arguments passed:", myArgs)
    console.log("Please input arguments in the following order\n args[0]:SmallDogsCount \n args[1]:MediumDogsCount \n args[2]:LargeDogsCount \n args[3]:LeftOverFood")
    process.exit(1)
}

try {
    testInvalidDogValues();
    testInvalidLeftFood();
    testValidLeftFood();
    let calculatedFoodForNextMonth = CalculateFood(myArgs[0], myArgs[1], myArgs[2], myArgs[3]);
    console.log("calculatedFoodForNextMonth", calculatedFoodForNextMonth);
} catch (err) {
    console.log(err)
    process.exit(1)
}


function CalculateFood(smallDogsCount, mediumDogsCount, largeDogsCount, leftOverFood) {
    if (smallDogsCount < 0 ||
        mediumDogsCount < 0 ||
        largeDogsCount < 0) {
        throw new Error("Dogs can't be less than zero.")
    }

    if (smallDogsCount % 1 !== 0 ||
        mediumDogsCount % 1 !== 0 ||
        largeDogsCount % 1 !== 0) {
        throw new Error("Dogs count can be only integer.")
    }

    if (leftOverFood < 0) {
        throw new Error("Left over food can't be less than zero.")
    }

    if (smallDogsCount * 1 + mediumDogsCount * 1 + largeDogsCount * 1 > 30) {
        throw new Error("Dogs count can't be more than 30.")
    }

    if (((smallDogsCount * 10) +
        (mediumDogsCount * 20) +
        (largeDogsCount * 30)) === 0) {
        throw new Error("Left over food can't be less than zero.")
    }

    let foodOfRemainingDogs = (smallDogsCount * 10) +
        (mediumDogsCount * 20) +
        (largeDogsCount * 30) - leftOverFood;
    foodOfRemainingDogs = foodOfRemainingDogs + (foodOfRemainingDogs * .2)

    return foodOfRemainingDogs
}

function testInvalidDogValues() {
    // Test case to validate small dogs count less than 0
    assert.throws(() => {
        CalculateFood(-1, 1, 1, 1)
    }, new Error('Dogs can\'t be less than zero.'))
    // Test case to validate medium dogs count less than 0
    assert.throws(() => {
        CalculateFood(1, -1, 1, 1)
    }, new Error('Dogs can\'t be less than zero.'))
    // Test case to validate large dogs count less than 0
    assert.throws(() => {
        CalculateFood(1, 1, -1, 1)
    }, new Error('Dogs can\'t be less than zero.'))
    // Test case to validate dogs count more than 30 (smallDogsCount+mediumDogsCount+largeDogsCount)
    assert.throws(() => {
        CalculateFood(20, 10, 5, 1)
    }, new Error('Dogs count can\'t be more than 30.'))
    // Test case to validate small dogs count in float values
    assert.throws(() => {
        CalculateFood(5.5, 3, 7, 1)
    }, new Error('Dogs count can be only integer.'))
    // Test case to validate medium dogs count in float values
    assert.throws(() => {
        CalculateFood(5, 3.5, 7, 1)
    }, new Error('Dogs count can be only integer.'))
    // Test case to validate large dogs count in float values
    assert.throws(() => {
        CalculateFood(5, 3, 7.5, 1)
    }, new Error('Dogs count can be only integer.'))
    // Test case to validate dogs count in float values
    assert.throws(() => {
        CalculateFood(5.5, 3.5, 7.5, 1)
    }, new Error('Dogs count can be only integer.'))
}

function testInvalidLeftFood() {
    // Test case to validate food less than 0 lbs
    assert.throws(() => {
        CalculateFood(1, 1, 1, -1)
    }, new Error('Left over food can\'t be less than zero.'))
    // Test case to validate if dogs count is equal to 0
    assert.throws(() => {
        CalculateFood(0, 0, 0, 17)
    }, new Error('Left over food can\'t be less than zero.'))
}

function testValidLeftFood() {
    // Test case to validate valid food left
    let result = CalculateFood(5, 3, 7, 17)
    assert.strictEqual(result, 363.6, "Invalid food count.")
    // Test case to validate food to be ordered when Small dogs count is 0
    let foodToBeOrderedML = CalculateFood(0, 3, 7, 17)
    console.log("foodToBeOrderedML", foodToBeOrderedML);
    assert.strictEqual(foodToBeOrderedML, 303.6, "Food to be ordered when Small dogs count is 0.")
    // Test case to validate food to be ordered when Medium dogs count is 0
    let foodToBeOrderedSL = CalculateFood(5, 0, 7, 17)
    console.log("foodToBeOrderedSL", foodToBeOrderedSL);
    assert.strictEqual(foodToBeOrderedSL, 291.6, "Food to be ordered when Medium dogs count is 0.")
    // Test case to validate food to be ordered when Large dogs count is 0
    let foodToBeOrderedSM = CalculateFood(5, 3, 0, 17)
    console.log("foodToBeOrderedSM", foodToBeOrderedSM);
    assert.strictEqual(foodToBeOrderedSM, 111.6, "Food to be ordered when Medium dogs count is 0.")
    // Test case to validate food to be ordered when left over food is a float value
    let foodToBeOrdered = CalculateFood(5, 3, 7, 17.5)
    console.log("foodToBeOrdered", foodToBeOrdered);
    assert.strictEqual(foodToBeOrdered, 363, "Food to be ordered when left over food is a float value.")
}

