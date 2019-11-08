// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need XX to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.

function calculateSupply(age, amuontPerDay) {
    let result = age * 365 * amuontPerDay
    console.log(`you will need ${result} to last you until the ripe all age of ${age}`);
    return result    
}
let result1 = calculateSupply(10, 2)
let result2 = calculateSupply(12, 12)
let result3 = calculateSupply(22, 32)
