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
        // triggering a function with an event parameter (e).
        num.addEventListener("animationend", (e) => {
            //creating an if statment to check if the animation is equal to goIn
            //and checkin gthe index to see if its not equal to nextToLast
            if(e.animationName === "goIn" && index !== nextToLast) {
                num.classList.remove("in")
                num.classList.add("out")
            // creating an else if statment to check if the current event is out and checking if there are siblings (spans, which there are. the spans are all considered equal)
            // checking the siblings by useing a built in method called next element sibling
            } else if (e.animationName === "goOut" && num.nextElementSibling) {
                num.nextElementSibling.classList.add("in")
            } else {
                counter.classList.add("hide")
                final.classList.add("show")
            }
        })
    })
}