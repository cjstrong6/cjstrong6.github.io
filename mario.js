const heightRange = document.getElementById("height-range");
const pyramid = document.getElementById("pyramid");
const characterSelect = document.getElementById("character-select");

function drawPyramid(){
  pyramid.innerText = "";

  const height = heightRange.value;
  const character = characterSelect.value;

  let string = "";

  for (let i = 1; i <= height; i++){
    string = "";

    for (let j = 0; j < height - i; j++){
      string += " ";
    }

    for (let k = 0; k < i; k++){
      string += character;
    }

    string += "\n";

    const newP = document.createElement("pre");

    // Create a text node with the content you want to display
    const textNode = document.createTextNode(string);

// Append the text node to the paragraph element
    newP.appendChild(textNode);
    
    //newP.innerText = string;
    pyramid.appendChild(newP);
    
  }
}

// set the default height to 5 lines
// heightRange.value = 5;

heightRange.addEventListener("input", drawPyramid);
characterSelect.addEventListener("change", drawPyramid);

drawPyramid();
