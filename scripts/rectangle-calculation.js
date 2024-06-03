function calculateRectangleArea(){

    const rectangleWidthInput = document.getElementById("rectangle-width");

    const rectangleLengthInput = document.getElementById("rectangle-length");

    const rectangleArea = parseFloat(rectangleWidthInput.value) * parseFloat(rectangleLengthInput.value)

    // display triangle area
    // const area = document.getElementById("rectangle-area")
    // area.innerText = rectangleArea;
    
    console.log("Area of the rectangle", rectangleArea);
}