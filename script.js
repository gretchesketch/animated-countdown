// using query select all is how i will bring in all the spans inside of nums.
// query selecter all is creating a node list.
const nums = document.querySelectorAll(".nums span")
const counter = document.querySelector(".counter")
const finalMessage = document.querySelector(".final")
const replay = document.querySelector("#replay")

// calling animation function.
runAnimation()

 // creating animation function.
function runAnimation() {
    //loop through the numbers we brought in under the name of nums.
    // using a call back in the for each i am calling mine num to represent each individual digit under the name nums(plural).
    // giving it a second parameter of index which will treat it like an array that starts at 0.
    nums.forEach((num, index) => {
        //creating a variable to get the next to last digit in the array.
        const nextToLast = nums.length - 1

        // creating an event lister because we want to know when the event ends.
        //using num to represent the current number the event is effecting.
        // animationend is just lik click. its a built in event.
        num.addEventListener("animationend", (e) => {

        })
    })
}