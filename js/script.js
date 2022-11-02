let ad = prompt('adi yaz:');
let yas = prompt('yasinizi yazin:');
let netice;

if (yas < 13 ) {
    netice = ad + ' usaqdir!!'
}
else if  (yas >= 13 && yas <= 18){
    netice = ad + ' yeniyetmedir!'
}
else if  (yas >= 18 && yas <= 36) {
    netice = ad + ' gencdir!'
}
else if  (yas >= 36 && yas <= 45) {
    netice = ad + ' cavandir!'
}
else if  (yas >= 45 && yas <= 65) {
    netice = ad + ' yasli!'
}
else if  (yas >= 65 && yas <= 100) {
    netice = ad + ' qoca!'
}
else {
    netice = ad + ' sen olmusen xeberin yoxdur!'
}

document.getElementById('qoca').innerHTML = netice;