/**
 * Objective: get base, height of a triangle. Calculate the area by using the provided formula and then display the area.
 * step-1: get base value of triangle
 * step-2: added in id in the base input field
 * step-3: use getElementById to access the input field 
 * step-4: get value from the input field. (value in string now)
 * step-5: convert the value to a number. (use parseFloat)
 * 
 */ 

function calculateTriangleArea(){

    const triangleBaseInput = document.getElementById("triangle-base");

    const triangleHeightInput = document.getElementById("triangle-height");

    const triangleArea = 0.5 * parseFloat(triangleBaseInput.value) * parseFloat(triangleHeightInput.value)

    // display triangle area
    const area = document.getElementById("triangle-area")
    area.innerText = triangleArea;
    
    console.log("Area of the triangle", triangleArea);
}