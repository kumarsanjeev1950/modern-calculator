const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
let currentInput = "";

function updateDisplay() {
  display.value = currentInput;
}

function calculate() {
  try {
    currentInput = eval(currentInput.replace(/÷/g, "/").replace(/×/g, "*"));
    updateDisplay();
  } catch {
    display.value = "Error";
  }
}

// Handle button clicks
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.dataset.value;

    if (button.classList.contains("clear")) {
      currentInput = "";
      updateDisplay();
    } else if (button.classList.contains("equal")) {
      calculate();
    } else {
      currentInput += value;
      updateDisplay();
    }
  });
});

// Handle keyboard input
document.addEventListener("keydown", (e) => {
  const key = e.key;

  if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
    currentInput += key;
    updateDisplay();
  } else if (key === "Enter" || key === "=") {
    e.preventDefault();
    calculate();
  } else if (key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
  } else if (key.toLowerCase() === "c") {
    currentInput = "";
    updateDisplay();
  }
});
