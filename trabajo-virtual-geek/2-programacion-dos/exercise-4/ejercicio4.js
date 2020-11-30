let totalPersonas = 9;
let chupitoSake = 2; //2 euros
let totalCuenta = 128;
let pagoPorPersona, pagoAna;

totalCuenta = totalCuenta - chupitoSake;

pagoPorPersona = totalCuenta / 9;
pagoAna = pagoPorPersona + chupitoSake;
console.log("Cada persona exepto Ana debe pagar " + pagoPorPersona + " euros por la cena de Naviadad, mientras que Ana debe pagar " + pagoAna + " euros por que pidio un Chupito de Sake.");