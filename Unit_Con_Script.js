function convert() {
    const inputValue = parseFloat(document.getElementById('input').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
    let result = 0;

    if (fromUnit === 'meters' && toUnit === 'feet') {
        result = inputValue * 3.28084;
    } else if (fromUnit === 'meters' && toUnit === 'inches') {
        result = inputValue * 39.3701;
    } else if (fromUnit === 'meters' && toUnit === 'centimeters') {
        result = inputValue * 100;
    } else if (fromUnit === 'feet' && toUnit === 'meters') {
        result = inputValue / 3.28084;
    } else if (fromUnit === 'feet' && toUnit === 'inches') {
        result = inputValue * 12;
    } else if (fromUnit === 'feet' && toUnit === 'centimeters') {
        result = inputValue * 30.48;
    } else if (fromUnit === 'inches' && toUnit === 'meters') {
        result = inputValue / 39.3701;
    } else if (fromUnit === 'inches' && toUnit === 'feet') {
        result = inputValue / 12;
    } else if (fromUnit === 'inches' && toUnit === 'centimeters') {
        result = inputValue * 2.54;
    } else if (fromUnit === 'centimeters' && toUnit === 'meters') {
        result = inputValue / 100;
    } else if (fromUnit === 'centimeters' && toUnit === 'feet') {
        result = inputValue / 30.48;
    } else if (fromUnit === 'centimeters' && toUnit === 'inches') {
        result = inputValue / 2.54;
    } else {
        result = inputValue; // Conversion is within the same unit, no change.
    }

    document.getElementById('result').innerHTML = `${inputValue} ${fromUnit} is equal to ${result.toFixed(2)} ${toUnit}`;
}