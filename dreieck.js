'use strict';

function nocheineaufgabe() {
  var loesung_elem = document.getElementById("loesung");
  loesung_elem.style.visibility = "hidden";
  var laenge = rand(1, 10);
  var hoehe = rand(1, 20);
  var laenge_elem = document.getElementById("laenge");
  var hoehe_elem = document.getElementById("hoehe");
  laenge_elem.innerHTML = laenge;
  hoehe_elem.innerHTML = hoehe;
  var flaeche = 0.5 * laenge * hoehe;
  flaeche = Math.round(flaeche * 100) / 100
  var flaeche_elem = document.getElementById("flaeche");
  flaeche_elem.innerHTML = flaeche;
}

function zeigmirdieloesung() {
  var loesung_elem = document.getElementById("loesung");
  loesung_elem.style.visibility = "visible";
}

function rand(min, max) {			
  var randval = Math.floor(Math.random() * (max - min + 1)) + min;
  return randval;
} 

