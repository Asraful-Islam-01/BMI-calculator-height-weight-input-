//------------------------
//Unit selection system
//------------------------

//Store the current measurement system (metric or imperial)

let currentUnit = "metric";

//Get all unit toggle buttons (.unit-btn elements)
//And attach click event listener for each one
document.querySelectorAll(".unit-btn").forEach((btn) => {
    btn.addEventListener("click", function() {
        //Remove "active" classes from the the buttons to deselect them
        document
           .querySelectorAll(".unit-btn")
           .forEach((b) => classlist.remove("active"));

        // Add "active" class to the clicked button to highlight it
        this.classlist.add("active");

        // Update the currentUnit variable based on the button's data attribute
        currentUnit = this.dataset.unit;

        // Get references to the unit label elements on the page
        const unitLabel = document.querySelector("unit-label");
        const weightUnit = document.querySelector("weight-unit");

        // Update display labels based on selected unit system
        if (currentUnit === "metric") {
            unitLabel.textContent = "cm"; // Height in cm
            weightUnit.textContent = "kg"; // Weight in kg
        } else {
            unitLabel.textContent = "inches"; // Height in inch
            weightUnit.textContent = "Ibs"; // Weight in pounds
        }

        // Clear previous results and reset form when changing units
        resetCalculator();
    });
});



//=========================
// BMI CALCULATOR LOGIC
//=========================


// Main function to calculate BMI from user's input
function calculateBMI() {
    // Get height and weight values from the input fields
    const height = 
}