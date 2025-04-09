// This function is called when the button is clicked
function toggleImage() {
  const img = document.getElementById("light");
  const button = document.getElementById("switch");
  const body = document.body;

  if (img.src.includes("https://i.postimg.cc/KjK1wL3c/bulb-off.png")) {
    img.src = "https://i.postimg.cc/6QyTynzr/bulb-on.png";
    button.innerHTML = "Turn me off";
    body.classList.add("light-on");
  } else {
    img.src = "https://i.postimg.cc/KjK1wL3c/bulb-off.png";
    button.innerHTML = "Turn me on";
    body.classList.remove("light-on");
  }
}