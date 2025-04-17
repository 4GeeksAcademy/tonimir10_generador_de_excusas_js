import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
const who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
const action = ['ate', 'peed', 'crushed', 'broke'];
const what = ['my homework', 'my phone', 'the car'];
const when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
const quien = '¿Quien es culpable?';
const accion = '¿Que hizo?';
const que = '¿Que quieres evitar?';
const cuando = '¿Cuando?';
const randomWho = Math.floor(Math.random()*who.length);
const randomAction = Math.floor(Math.random()*action.length);
const randomWhat = Math.floor(Math.random()*what.length);
const randomWhen = Math.floor(Math.random()*when.length);

document.getElementById("excuse").innerHTML = who[randomWho] + " " + action[randomAction] + " " + what[randomWhat] + " " + when[randomWhen] ;
document.getElementById("preguntas").innerHTML = quien +" "+ accion + " " + que + " " + cuando ;
};
