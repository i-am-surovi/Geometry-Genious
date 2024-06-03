function calculatePentagonArea(){
    const perimeter = getInputValueByID('pentagon-perimeter');
    const apothem = getInputValueByID('pentagon-apothem');

    const area = 0.5 * perimeter * apothem;
    setInnerTextByID('pentagon-area',area);
}

function getInputValueByID(){
    const inputField = document.getElementById(inputFieldID);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setInnerTextByID(elementID, area){

} 