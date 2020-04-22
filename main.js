const discriminationTxtSpan = document.querySelector(".discrimination");
const discriminationTxt = `discrimination?`;
let discriminationIndexTxt = 0;

const discriminationAddLetter = () => {
  discriminationTxtSpan.textContent +=
    discriminationTxt[discriminationIndexTxt];
  discriminationIndexTxt++;
  if (discriminationIndexTxt === discriminationTxt.length) {
    clearInterval(indexTyping);
  }
};

const indexTyping = setInterval(discriminationAddLetter, 100);

// -------------------------------COLORFUL BG-----------------------------------------

document.body.addEventListener("mousemove", function (event) {
  const x = event.clientX + 1;
  const y = event.clientY + 1;
  const width = window.innerWidth;
  const height = window.innerHeight;

  const red = (x / width) * 100;
  const green = (y / height) * 100;
  const blue = ((x / width) * 100 + (y / height) * 100) / 2;

  document.body.style.backgroundColor = `rgba(${red}%, ${green}%, ${blue}%, 9%)`;
});
