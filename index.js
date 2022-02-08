const display = document.getElementById("display");
const buttons = Array.from(document.getElementsByClassName("button"));
// console.log(buttons);
buttons.map((button) => {
  button.addEventListener("click", (event) => {
    switch (event.target.innerText) {
      case "C":
        display.innerText = "";
        break;
      case "←":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }

        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = " ERROR!";
        }
        break;

      default:
        display.innerText += event.target.innerText;
    }
  });
});
