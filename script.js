let ad = prompt(`Adivizi yazin:`);
let sifre = +prompt(`Sifrenizi yazin`);
let registration;

switch (true) {
    case ad == `ERLAMS` && sifre == 1234: 
        registration = `Xos geldiz ERLAMS!!!`
        break;

    default:
        registration = `Istifadeci adi ve ya sifre yansisdir`
        break;
}
document.getElementById('reg').innerHTML = registration;