
const container = document.getElementById("container");
const slider = document.getElementById("myRange")
const output = document.getElementById("value")


let rainbowColors = ["red","orange","yellow","green","blue","indigo","violet"]

function randomColor(min) {
  return min[Math.floor(Math.random() * min.length)];     // generates a random number that picks the (string) hand within the array
  }              
  
 

//===================================================//
//                  Buttons
//===================================================//
 
const colorMode = document.getElementById("colormode")
const rainBowMode = document.getElementById("rainbowmode")       
const eraserButton = document.getElementById("eraserbutton")
const clearButton = document.getElementById("clearbutton")

let valueGrid = 32


//===================================================//
//          this function generates the grid
//===================================================//
 
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);

  for (c = 0; c < (rows * cols); c++) {

    let cell = document.createElement("div");

    container.appendChild(cell).className = "grid-item";
  };

//===================================================//
//    eventlistener to change the color of the squares
//===================================================//
 

  let gridSquares = document.querySelectorAll(".grid-item");



// case switch functie maken voor rainbow, color picker, en eraser 
// moet ervoor zorgen als onclick button functie overschakelt naar true en dan de case uitkiest



  const changeBackgroundColor = e => {
   e.target.style.backgroundColor =  randomColor(rainbowColors);
   }

  gridSquares.forEach(div => {
   div.addEventListener("click", changeBackgroundColor, {once: true});
  })



};

//===================================================//
//                  Slider code
//===================================================//
 

output.innerHTML = slider.value
slider.oninput = function() {

  output.innerHTML = this.value +" x "+ this.value

  valueGrid = this.value

  return valueGrid

  
}
 

makeRows(valueGrid, valueGrid)
