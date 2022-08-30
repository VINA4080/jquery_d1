let input = $('.nombre_input');
let input1 = $('#nombre1');
let input2 = $('#nombre2');
let signe = $('select');

input.on("keyup", function(){
    // console.log(this);
    let signeValue = signe.val();
    let input1Value = input1.val();
    let input2Value = input2.val();
    
    if (isNaN(input1Value)) {
        alert("Veuillez entrer un nombre");
    }
    if (isNaN(input2Value)) {
        alert("Veuillez entrer un nombre");
    }
    if (signeValue === '+') {
        var resultat = parseInt(input1Value) + parseInt(input2Value);
    }
    if (signeValue === '-') {
        var resultat = input1Value - input2Value;
    }
    if (signeValue === '/') {
        var resultat = input1Value / input2Value;
    }
    if (signeValue === '*') {
        var resultat = input1Value * input2Value;
    }
    
    $('#result').val(resultat);
    $('span').html(resultat);
});