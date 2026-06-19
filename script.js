const form = document.getElementById("bmiForm");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const resultDiv = document.getElementById("result");
const bmiValueDiv = document.getElementById("bmiValue");
const bmiCategoryDiv = document.getElementById("bmiCategory");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const weight = parseFloat(weightInput.value);

    const height = parseFloat(heightInput.value);

    if (!weight || !height || weight <= 0 || height <= 0) {
        alert("Plese enter a valid weight and height");
        return;
    }

    const heightInMeters = height / 100;

    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(1);

    bmiValueDiv.textContent = bmi;

    //Determine BMI category//
    let category, categoryClass;

    if (bmi < 18.5) {
        category = "Underweight";
        categoryClass = "underweight";
    } else if (bmi < 25) {
        category = "Normal Weight";
        categoryClass = "normal";
    } else if (bmi < 30) {
        category = "Overweight";
        categoryClass = "overweight";
    } else {
        category = "Obese";
        categoryClass = "obese";
    }


    bmiCategoryDiv.textContent = category;
    bmiCategoryDiv.className = `bmi-category ${categoryClass}`;

    resultDiv.classList.add("show");
});  