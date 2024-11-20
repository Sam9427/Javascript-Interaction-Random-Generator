
const fortunes = [
  "Walk in your worth today and you will get good news!",
  "An new opportunity is on the horizon.",
  "Good things comes to those who wait.",
  "Adventure awaits in unexpected places.",
  "Today will be a great day!."
];


function generate() {
  const name = document.getElementById("nameInput").value.trim();
  const output = document.getElementById("output");

  if (!name) {
    output.textContent = "Please enter your name to get a fortune.";
    return;
  }

  
  const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  output.textContent = `${name}, your fortune is: ${randomFortune}`;
}


function restyle() {
  const output = document.getElementById("output");
  const colors = ["white", "blue", "pink", "turqouise", "lavendar"];
  const fonts = ["Arial", "Verdana", "Georgia", "Tahoma", "Courier New"];
  const fontSizes = ["1.5em", "2em", "2.5em", "3em"];

  
  output.style.color = colors[Math.floor(Math.random() * colors.length)];
  output.style.fontFamily = fonts[Math.floor(Math.random() * fonts.length)];
  output.style.fontSize = fontSizes[Math.floor(Math.random() * fontSizes.length)];
}
