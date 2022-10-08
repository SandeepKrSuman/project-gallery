window.onload = () => {
    let button = document.querySelector("#btn");
  
    // Function for calculating BMI
    button.addEventListener("click", calculateBMI);
};
  
function calculateBMI() {
  
    let height = parseInt(document
            .querySelector("#height").value);
  
    let weight = parseInt(document
            .querySelector("#weight").value);
  
    let showdata = document.querySelector("#showdata");
  
    if (height === "" || isNaN(height)) 
        showdata.innerHTML = "Provide a valid Height!";
  
    else if (weight === "" || isNaN(weight)) 
        showdata.innerHTML = "Provide a valid Weight!";
  
    else {
  
        let bmi = (weight / ((height * height) 
                            / 10000)).toFixed(2);
  
        if (bmi < 18.6) showdata.innerHTML =
            `Under Weight : <span>${bmi}</span>`;
  
        else if (bmi >= 18.6 && bmi < 24.9) 
            showdata.innerHTML = 
                `Normal : <span>${bmi}</span>`;
  
        else showdata.innerHTML =
            `Over Weight : <span>${bmi}</span>`;
    }
}