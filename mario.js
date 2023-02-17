// printPyramid(5);
// TODO #2
// Take in user input for the height
const button = document.getElementById("pyramid-button");
      button.addEventListener("click", () => {
       document.getElementById("pyramid").innerText = "";
        
        n = document.getElementById("height").value;
        let string = "";
        
for (let i = 1; i <= n; i++) {
  string = "";
  // printing spaces
  for (let j = 0; j < n - i; j++) {
    string += ".";
  }
  // printing star
  for (let k = 0; k < i; k++) {
    string += "#";
  }
  string += "\n";

  newP = document.createElement("p");
  newP.innerText = string;
  document.getElementById("pyramid").appendChild(newP);
  
}
});

function printPyramid(height) {

}