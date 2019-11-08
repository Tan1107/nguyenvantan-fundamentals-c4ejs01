//bai1. You know how old your dog is in human years, but what about dog years? Calculate it!
// Write a function named calculateDogAge that:
// takes 1 argument: your puppy's age.
// calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
// outputs the result to the screen like so: "Your doggie is XX years old in dog years!"
// Call the function three times with different sets of values.


function calcalateDogAge(puppyAge){
    let doggieAge = puppyAge * 7
    console.log(`your doggie is ${doggieAge} years old in dog year`);
    return doggieAge
}
let doggie1 = calcalateDogAge(12)
let doggie2 = calcalateDogAge(3)
let doggie3 = calcalateDogAge(4)
