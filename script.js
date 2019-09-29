var container = document.querySelector(".sketch-pad-container");
var sketchPad = document.querySelector(".sketch-pad");
var gridButton = document.querySelector("#new-grid");
var clearButton = document.querySelector("#clear");
var blackBrush = document.querySelector("#brush-black");
var colorfulBrush = document.querySelector("#brush-colorful");
var squares = document.querySelectorAll(".square")


gridButton.addEventListener("click", function(){
  appendNewSketchPad(appendChildToContainer(prompt("How many squares per side do you want?", "26")))
})

clearButton.addEventListener("click", function(){
  var squares = document.querySelectorAll(".square")
  squares.forEach(square => {
    square.style.background = "white";
  })
})

blackBrush.addEventListener("click", function (){
  var squares = document.querySelectorAll(".square")
  squares.forEach(square => {
    square.addEventListener("mouseover", function(e){
      e.target.style.backgroundColor = "rgb(0, 0, 0)"; 
    })
  })
})

colorfulBrush.addEventListener("click", function(){
  var squares = document.querySelectorAll(".square")
  squares.forEach(square => {
    square.addEventListener("mouseover", function(e){
      var r = Math.floor(Math.random() * 256);
      var g = Math.floor(Math.random() * 256);
      var b = Math.floor(Math.random() * 256);
      e.target.style.backgroundColor = `rgb(${r} ${g} ${b})`;
    })
  })     
})

function appendChildToContainer(num){
  const sketchPad = document.createElement("div");
  sketchPad.classList.add("sketch-pad");
  console.log(container)
  for (var i =0; i < num * num; i++){
    var newGridCreated = document.createElement("div");
    newGridCreated.classList.add("square");
    newGridCreated.style.backgroundColor = "white";
    sketchPad.appendChild(newGridCreated);
    document.documentElement.style.setProperty("--squares-per-side",num);
  }
  return sketchPad
}

function appendNewSketchPad(sketchPad) {
  container.removeChild(document.querySelector(".sketch-pad"));
  console.log(container,"vhasv")
  container.appendChild(sketchPad);
}

appendNewSketchPad(appendChildToContainer(24));
