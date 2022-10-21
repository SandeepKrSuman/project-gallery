const convert = () => {
  // alert("he")
  let toConvert = document.getElementById("inp-value").value;
  if (toConvert === "") {
    // alert("Enter the value");
    return;
  }
  toConvert = parseInt(toConvert);

  calculate(toConvert);
};

const calculate = (toConvert) => {
  /*
    STEPS:
    1. Check which dropdown is selected
    2. According to that convert it into different units

    3. According to unit selected in output side show the result
    */

  const input_type = document.getElementById("inp-type").value;

  const output_type = document.getElementById("out-type").value;
  // console.log("check "+2);
  console.log(input_type, output_type);

  // cs - celsius
  // ke - kelvin
  // fh - farenhite

  // console.log("check "+3);

  let fhResult;
  let csResult;
  let keResult;
  if (input_type === "cs") {
    csResult = toConvert;
    fhResult = toConvert * (9 / 5) + 32;
    keResult = toConvert + 273; //cs to kelvin
  } else if (input_type == "fh") {
    csResult = (toConvert - 32) * (5 / 9);
    fhResult = toConvert;
    keResult = csResult - 273; //fh to kelvin
  } else {
    csResult = toConvert - 273;
    fhResult = csResult * (9 / 5) + 32; //kelvin to farenheit
    keResult = toConvert;
  }
  // console.log("check "+4);
  //according to output_type
  let ans;
  if (output_type == "cs") {
    ans = csResult;
  } else if (output_type == "fh") {
    ans = fhResult;
  } else {
    ans = keResult;
  }
  // console.log("check "+5);

  // edit made by @Codefreak69
  // Fixed the Output to 2 decimal places
  document.getElementById("output").innerHTML = ans.toFixed(2);
};

const inputBox = document.getElementById("input-box");
inputBox.addEventListener("keyup", () => {
  let toConvert = document.getElementById("inp-value").value;
  if (toConvert === "") {
    document.getElementById("output").innerHTML = "Output";

    return;
  }
  calculate(parseInt(toConvert));
});
