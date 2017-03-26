/***************************
This is JavaScript (JS), the programming language that powers the web (and this is a comment, which you can delete).

To use this file, link it to your markup by placing a <script> in the <body> of your HTML file:

  <body>
    <script src="script.js"></script>

replacing "script.js" with the name of this JS file.

Learn more about JavaScript at

https://developer.mozilla.org/en-US/Learn/JavaScript
***************************/
var canvas = undefined;
var canvasContext = undefined;

var offset=0.5;
var jump=10;

window.onload = function(){
  draw();
}

function start() {
  canvas = document.getElementById("myCanvas");
  canvasContext = canvas.getContext("2d");
}

document.addEventListener('DOMContentLoaded', start);
 

function draw() {
  canvasContext.fillStyle = "white";
  canvasContext.fillRect(0, 0, canvas.width, canvas.height);

  if(jump<0)
    return;

  canvasContext.beginPath();
  
  //check if grid checkbox is checked
  //turns grid off or on
  if(document.getElementById('grid').checked == true){
    
  // Draw Graph Paper.
  canvasContext.strokeStyle= document.getElementById('graphColor').value;
  canvasContext.lineWidth=1;

  for (var x = offset; x <= canvas.width; x += jump) {

    canvasContext.moveTo(x, 0);
    canvasContext.lineTo(x, canvas.height);

  }

  canvasContext.moveTo(canvas.width-offset, 0);
  canvasContext.lineTo(canvas.width-offset, canvas.height);

  for (var y = offset; y <= canvas.height; y += jump) {

    canvasContext.moveTo(0, y);
    canvasContext.lineTo(canvas.width, y);

  }
  canvasContext.stroke();
  }


  // Setup Axises
  canvasContext.strokeStyle="#000000";
  canvasContext.lineWidth=2;


  canvasContext.beginPath();
  // Draw X Axis
  canvasContext.moveTo(0,(canvas.height+jump)/2-offset);
  canvasContext.lineTo(canvas.width,(canvas.height+jump)/2-offset);


  // Draw Y Axis
  canvasContext.moveTo(canvas.width/2,-offset);
  canvasContext.lineTo(canvas.width/2,canvas.height-offset);

  canvasContext.stroke();
  
  
  // Setup mark lines
  canvasContext.strokeStyle="#FFA500";
  canvasContext.lineWidth=2;


  canvasContext.beginPath();
  // Draw Y Axis marking at 5 and 10
  canvasContext.moveTo(240,120);
  canvasContext.lineTo(260,120);
  
  canvasContext.moveTo(240,60);
  canvasContext.lineTo(260,60);
  
  canvasContext.moveTo(240,240);
  canvasContext.lineTo(260,240);

  canvasContext.moveTo(240,300);
  canvasContext.lineTo(260,300);

  // Draw X Axis marking at 5 and 10
  canvasContext.moveTo(190,170);
  canvasContext.lineTo(190,190);
  
  canvasContext.moveTo(130,170);
  canvasContext.lineTo(130,190);
  
  canvasContext.moveTo(310,170);
  canvasContext.lineTo(310,190);

  canvasContext.moveTo(370,170);
  canvasContext.lineTo(370,190);

  canvasContext.stroke();

   // Draw Graph
  canvasContext.save();
  
  if(document.getElementById('EQ1').checked == true){
      presetEquation1();
  }else if(document.getElementById('EQ2').checked == true){
      presetEquation2();
  }else if(document.getElementById('EQ3').checked == true){
      presetEquation3();
  }else if(document.getElementById('selectEQ').checked == true){
      plotDropEquation();
  }else if(document.getElementById('typeEQ').checked == true){
      plotEquation();
  }
  canvasContext.restore();

}


//first button preset equation
function presetEquation1(){

  canvasContext.strokeStyle="#FF0000";

  canvasContext.beginPath();
  canvasContext.translate(canvas.width/2,(canvas.height+jump)/2-offset);
  for (var x = -canvas.width/2; x <= canvas.width; x += jump) {
    canvasContext.lineTo(x, eval(document.data.EQ1.value));
  }
  canvasContext.stroke();		
}


//second button preset equation
function presetEquation2(){

  canvasContext.strokeStyle="#FF0000";

  canvasContext.beginPath();
  canvasContext.translate(canvas.width/2,(canvas.height+jump)/2-offset);
  for (var x = -canvas.width/2; x <= canvas.width; x += jump) {
    canvasContext.lineTo(x, eval(document.data.EQ2.value));
  }
  canvasContext.stroke();		
}


//third button preset equation
function presetEquation3(){

  canvasContext.strokeStyle="#FF0000";

  canvasContext.beginPath();
  canvasContext.translate(canvas.width/2,(canvas.height+jump)/2-offset);
  for (var x = -canvas.width/2; x <= canvas.width; x += jump) {
    canvasContext.lineTo(x, eval(document.data.EQ3.value));
  }
  canvasContext.stroke();		
}
  

//plots selected equation from drop down menu
function plotDropEquation(){
  
    canvasContext.strokeStyle="#FF0000";

    canvasContext.beginPath();
    canvasContext.translate(canvas.width/2,(canvas.height+jump)/2-offset);
    for (var x = -canvas.width/2; x <= canvas.width; x += jump) {
      canvasContext.lineTo(-x,eval(document.getElementById('dropmenu').value))
    }
    canvasContext.stroke();		
}


//plots equations in text box
function plotEquation(){

  canvasContext.strokeStyle="#FF0000";

  canvasContext.beginPath();
  canvasContext.translate(canvas.width/2,(canvas.height+jump)/2-offset);
  for (var x = -canvas.width/2; x <= canvas.width; x += jump) {
    canvasContext.lineTo(-x, eval(document.data.equation.value));
  }
  canvasContext.stroke();		
}
  

//enables drop down menu 
function enableDrop(){
  document.getElementById('dropmenu').disabled = false;
}
  

//disables drop down menu
function disableDrop(){
  document.getElementById('dropmenu').disabled = true;
}


//enables manual plot text box and plot button
function enableManualPlot(){
  document.getElementById('Plot').disabled = false;
  document.getElementById('manEquation').disabled = false;
}


//disables manual plot text box and plot button
function disableManualPlot(){
  document.getElementById('Plot').disabled = true;
  document.getElementById('manEquation').disabled = true;
}


//sets x-axis name to the right of graph
function setX_Axis(){
  var x = document.getElementById('extraText1');
  var text = document.getElementById('x-axis').value;
  
  
  var text_element = document.createElement("PARAGRAPH");
  var new_text = document.createTextNode(text);
  
  
  text_element.appendChild(new_text);
  
  text_element.style.fontFamily = "Comic Sans MS, cursive, sans-serif";
  text_element.style.color = "#FF0000";
  text_element.style.position = "absolute";
  text_element.style.left = "510px";
  text_element.style.top = "240px";
  
  
  if (x.hasChildNodes()) {
    x.removeChild(x.childNodes[0]);
  }
  
   x.appendChild(text_element);
}


//sets y-axis name to the right of graph
function setY_Axis(){
  var y = document.getElementById('extraText2');
  var text = document.getElementById('y-axis').value;


  var text_element = document.createElement("PARAGRAPH");
  var new_text = document.createTextNode(text);


  text_element.appendChild(new_text);

  text_element.style.fontFamily = "Comic Sans MS, cursive, sans-serif";
  text_element.style.color = "#FF0000";
  text_element.style.position = "absolute";
  text_element.style.left = "250px";
  text_element.style.top = "58px";


  if (y.hasChildNodes()) {
    y.removeChild(y.childNodes[0]);
  }

  y.appendChild(text_element);
}


//sets title at top left of graph
function setTitle(){
  var title = document.getElementById('extraText3');
  var text = document.getElementById('title').value;


  var text_element = document.createElement("PARAGRAPH");
  var new_text = document.createTextNode(text);


  text_element.appendChild(new_text);

  text_element.style.fontFamily = "Comic Sans MS, cursive, sans-serif";
  text_element.style.color = "#FF0000";
  text_element.style.position = "absolute";
  text_element.style.left = "10px";
  text_element.style.top = "50px";


  if (title.hasChildNodes()) {
    title.removeChild(title.childNodes[0]);
  }

  title.appendChild(text_element);
}



