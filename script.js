const form = document.getElementById("bmiForm");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const resultDiv = document.getElementById("result");
const bmiValueDiv = document.getElementById("bmiValue");
const bmiCategoryDiv = document.getElementById("bmiCategory");

form.addEventListener("submit", (e)=> {
    e.preventDefault();

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    if (!weight || !height || weight <= 0 || height <= 0) {
        alert("Please Enter a Valid Weight and height")
        return;
    }

    // Convert cm to m
    const heightInMeters = height / 100; 
    // BMI = weight(kg) / height(m)^2
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    //Display BMI value
    bmiValueDiv.textContent = bmi;

    //Determine category
    let category, categoryClass;
    if (bmi < 18.5) {
        category = "Underweight";
        categoryClass = "underweight"
    } else if (bmi < 25) {
        category = "Normar Weight"
        categoryClass = "underweight"
    } else if (bmi < 30) {
        category = "Overweight"
        categoryClass = "overweight"
    } else {
        category = "Obese";
        categoryClass = "obese";
    }

    // Update category display 
    bmiCategoryDiv.textContent = category;
    bmiCategoryDiv.className = `bmi-category ${categoryClass}`;

    // Show result
    resultDiv.classList.add("show");
    
});
