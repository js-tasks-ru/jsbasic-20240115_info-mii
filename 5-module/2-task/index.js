function toggleText() {
  const button = document.querySelector(".toggle-text-button");
  let elem = document.getElementById("text")
  button.onclick = () => {
    elem.hidden = !elem.hidden;
  }
}
