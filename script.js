const container = document.getElementById("container");
const input = document.getElementById("myRange")
const output = document.getElementById("value")
const colorInput ="red"
let outputRange = 0

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


//===================================================//
//        reloads the page when pressing clear button
//===================================================//


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
//    event listener to change the color of the squares
//===================================================//
 

  let gridSquares = document.querySelectorAll(".grid-item");




colorMode.addEventListener("click", function () {
  
  const changeBackgroundColor = e => {

    let color = document.getElementById('colorInputColor').value
    e.target.style.backgroundColor =  color;
    }
 
   gridSquares.forEach(div => {
    div.addEventListener("click", changeBackgroundColor, {once: true});
 
} )

  })


  rainBowMode.addEventListener("click", function () {
  
    const changeBackgroundColor = e => {
      e.target.style.backgroundColor =  randomColor(rainbowColors);
      }
   
   
     gridSquares.forEach(div => {
      div.addEventListener("click", changeBackgroundColor, {once: true});
   
  } )
  
    })
  
  
    eraserButton.addEventListener("click", function () {
  
      const changeBackgroundColor = e => {
        e.target.style.backgroundColor =  "white";
        }
     
     
       gridSquares.forEach(div => {
        div.addEventListener("click", changeBackgroundColor, {once: true});
     
    } )
    
      })


      clearButton.addEventListener("click", function () {
        location.reload()
      } )
      


};

//===================================================//
//                  Slider code
//===================================================//
 


output.innerText = input.value + 'x' + input.value

input.addEventListener("input", function (){

 output.innerText = input.value + 'x' + input.value

 container.textContent = ""

makeRows(input.value, input.value)  

})



