function calculateParallelogramArea(){

    const parallelogramBaseInput = document.getElementById("parallelogram-base");

    const parallelogramHeightInput = document.getElementById("parallelogram-height");

    const parallelogramArea = parseFloat(parallelogramBaseInput.value) * parseFloat(parallelogramHeightInput.value)

    // display triangle area
    // const area = document.getElementById("triangle-area")
    // area.innerText = triangleArea;
    
    console.log("Area of the parallelogram", parallelogramArea);
}