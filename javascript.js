function calc(op) {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var output = 0;

    switch (op) {
        case 'soma':
            output = num1 + num2;
            break;
        case 'subtrair':
            output = num1 - num2;
            break;
        case 'multiplicar':
            output = num1 * num2;
            break;
        case 'dividir':
            output = num1 / num2;
            break;
    }

    document.getElementById("output").value = output;
}