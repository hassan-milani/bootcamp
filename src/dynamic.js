const changeColorBtn = document.getElementById("changeColorBtn");
const addParagraphBtn = document.getElementById("addParagraphBtn");
const contentDiv = document.getElementById("content");

// Function to generate random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Change Background Color Event
changeColorBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomColor();
});

// Add Paragraph Event
addParagraphBtn.addEventListener("click", () => {
  const p = document.createElement("p");
  p.textContent = "This is a new paragraph added dynamically.";
  contentDiv.appendChild(p);
});
