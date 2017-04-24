// mehr aufgaben webseite
// Copyright 2017 Lesmana Zimmer
// Licensed under GNU AGPL version 3 or later
// https://www.gnu.org/licenses/agpl.html

'use strict';

function nocheineaufgabe() {
  var loesung_elem = document.getElementById("loesung");
  loesung_elem.style.visibility = "hidden";
  var laenge = rand(5, 20);
  var breite = rand(5, 20);
  var hoehe = rand(10, 50);
  var laenge_elem = document.getElementById("laenge");
  var breite_elem = document.getElementById("breite");
  var hoehe_elem = document.getElementById("hoehe");
  laenge_elem.innerHTML = laenge;
  breite_elem.innerHTML = breite;
  hoehe_elem.innerHTML = hoehe;
  var volumen = laenge * breite * hoehe
  volumen = Math.round(volumen * 100) / 100
  var volumen_elem = document.getElementById("volumen");
  volumen_elem.innerHTML = volumen;
}

function zeigmirdieloesung() {
  var loesung_elem = document.getElementById("loesung");
  loesung_elem.style.visibility = "visible";
}

function rand(min, max) {			
  var randval = Math.floor(Math.random() * (max - min + 1)) + min;
  return randval;
} 

