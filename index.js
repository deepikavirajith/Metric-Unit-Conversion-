let lenpara = document.getElementById("lenpara");
let volpara = document.getElementById("volpara");
let masspara = document.getElementById("masspara");
let num = document.getElementById("num");



function convert(){
let val = parseInt(num.value);
//Length(Meter/Feet)
let lenMeters = Math.floor(val * 3.28084);
let lenFeet = Math.floor(val * 0.3048);
lenpara.textContent = `${val} meters = ${lenMeters} feet | ${val} feet = ${lenFeet} meters`;

//Volume(Liters/Gallans)
let volLiters = Math.floor(val * 0.264172);
let volGallans = Math.floor(val * 4.54609);
volpara.textContent = `${val} liters = ${volLiters} gallans | ${val} gallans = ${volGallans} liters`;

//Mass(Kilograms/Pounds)
let massKilo = Math.floor(val * 2.20462);
let massPound = Math.floor(val * 0.453592);
masspara.textContent = `${val} kilograms = ${massKilo} pounds | ${val} pounds = ${massPound} kilograms`;

}
