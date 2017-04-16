'use strict';

function nocheineaufgabe() {
  var volumen_elem = document.getElementById("volumen");
  volumen_elem.innerHTML = "??";
  var laenge = rand(1, 10);
  var breite = rand(1, 10);
  var hoehe = rand(1, 20);
  var laenge_elem = document.getElementById("laenge");
  var breite_elem = document.getElementById("breite");
  var hoehe_elem = document.getElementById("hoehe");
  laenge_elem.innerHTML = laenge;
  breite_elem.innerHTML = breite;
  hoehe_elem.innerHTML = hoehe;
  var volumen = laenge * breite * hoehe
  volumen = Math.round(volumen * 100) / 100
  sessionStorage.setItem("volumen", volumen)
}

function zeigmirdieloesung() {
  var volumen = sessionStorage.getItem("volumen");
  var volumen_elem = document.getElementById("volumen");
  volumen_elem.innerHTML = volumen;
}

function rand(min, max) {			
  var randval = Math.floor(Math.random() * (max - min + 1)) + min;
  return randval;
} 

