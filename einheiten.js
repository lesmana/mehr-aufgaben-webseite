'use strict';

var ma = ma || {};

(function(ma) {

  var einheiten = ["mm", "cm", "dm", "m", "km"];

  var potenzen = {"mm": -3, "cm": -2, "dm": -1, "m": 0, "km": 3};

  function randomEinheit() {
    var val = einheiten[Math.floor(Math.random() * einheiten.length)];
    return val;
  };

  function wertVonNach(wert, von , nach) {
    var vonPot = potenzen[von];
    var nachPot = potenzen[nach];
    var diffPot = vonPot - nachPot;
    var neuwert = wert * Math.pow(10, diffPot);
    neuwert = Math.round(neuwert * 100) / 100
    return neuwert;
  }

  //export
  ma.randomEinheit = randomEinheit;
  ma.wertVonNach = wertVonNach;

})(ma);

function nocheineaufgabe() {
  var loesung_elem = document.getElementById("loesung");
  loesung_elem.style.visibility = "hidden";
  var voneinheit = ma.randomEinheit();
  var zueinheit = ma.randomEinheit()
  var wert = rand(1, 100, 2);
  var loesungwert = ma.wertVonNach(wert, voneinheit, zueinheit);
  var loesungeinheit = zueinheit;
  var voneinheit_elem = document.getElementById("voneinheit");
  var zueinheit_elem = document.getElementById("zueinheit");
  var wert_elem = document.getElementById("wert");
  var loesungwert_elem = document.getElementById("loesungwert");
  var loesungeinheit_elem = document.getElementById("loesungeinheit");
  voneinheit_elem.innerHTML = voneinheit;
  zueinheit_elem.innerHTML = zueinheit;
  wert_elem.innerHTML = wert;
  loesungwert_elem.innerHTML = loesungwert;
  loesungeinheit_elem.innerHTML = loesungeinheit
}

function zeigmirdieloesung() {
  var loesung_elem = document.getElementById("loesung");
  loesung_elem.style.visibility = "visible";
}

function rand(min, max) {			
  var randval = Math.floor(Math.random() * (max - min + 1)) + min;
  return randval;
} 

