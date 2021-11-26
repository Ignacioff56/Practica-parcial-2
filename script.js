function validateForm() {
    if (document.getElementById('pesos').value <= 0) {
        alert("METE UNE NUMERE VALIDE BIGOTE DE MERDE");
        return false;
    }
    return true;
}

var cotizaciones = {
    dolares: 105.75,
    euros: 120.5,
};

input_currency = document.getElementById('moneda');
input_amount = document.getElementById('pesos');

function displayResult(result) {
    var tit = document.querySelector("h3");
    tit.innerText = "$ " + result.toFixed(2);
}

function calculo() {
    if (!(validateForm())) {
        return false;
    }

    var total = input_amount.value * (cotizaciones[input_currency.value]);
    displayResult(total);
    return false;
}
////////////////////////////////////////////////////////////////////////////////
// Add currency

function validate_currency() {
    if (document.getElementById('nombre').value <= 0) {
        alert("Escriba un nombre valido");
        return false;
    }
    if (document.getElementById('valor').value <= 0) {
        alert("proporcione un valor.");
        return false;
    }
    return true;
}

function add_currency() {
    if (!(validate_currency())) {
        return false;
    }

    input_nombre = document.getElementById('nombre');
    input_valor = document.getElementById('valor');

    input_currency.options.add(new Option(input_nombre.value, input_nombre.value));

    cotizaciones[input_nombre.value] = input_valor.value;
    return true;

}