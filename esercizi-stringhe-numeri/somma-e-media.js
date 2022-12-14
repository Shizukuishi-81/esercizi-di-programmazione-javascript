/*
  Somma e media
  Scrivi un programma che dati 5 numeri restituisca in output la somma e la media.

  Esempio:
    Input: a = 1, b = 2, c = 3, d = 4, e = 5
    Output: somma = 15, media = 3
  
  http://www.imparareaprogrammare.it
*/
var n1 = Math.floor(Math.random()*101);
var n2 = Math.floor(Math.random()*101);
var n3 = Math.floor(Math.random()*101);
var n4 = Math.floor(Math.random()*101);
var n5 = Math.floor(Math.random()*101);
somma = n1+n2+n3+n4+n5;
fattori = 5
media = somma/fattori;
console.log(somma,media); 
