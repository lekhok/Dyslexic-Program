function boldRandom() {
  let input = document.getElementById("input-text").value;
  let words = input.split(" ");
  let output = "";

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let boldLength = Math.floor(Math.random() * (word.length / 2)) + 1; // Add 1 to ensure at least one character is bolded
    let boldedWord = "<b>" + word.slice(0, boldLength) + "</b>" + word.slice(boldLength);
    output += boldedWord + " ";
  }

  document.getElementById("output-text").innerHTML = output;
}

