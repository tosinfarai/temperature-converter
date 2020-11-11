function c_to_f () {
    var c = document.getElementById("celcius").value;
    var f = Math.round((c * 9 / 5) + 32);
    document.getElementById("to_farenheit").value = f;
}

function f_to_c () {
    var f = document.getElementById("farenheit").value;
    var c = Math.round((f - 32) * 5 / 9);
    document.getElementById("to_celcius").value = c;
}