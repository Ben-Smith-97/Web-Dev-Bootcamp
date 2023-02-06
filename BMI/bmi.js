function bmiCalculator() {

    var weight = Number(document.getElementById("weight").value);
    var height = Number(document.getElementById("height").value);
    var finalWeight = weight * .45;
    var finalHeight = height * .025;


    var BMI = (finalWeight / Math.pow(finalHeight, 2));

    document.getElementById("output").innerHTML = BMI;

}