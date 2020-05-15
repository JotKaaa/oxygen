// --------typing: word 'discrimination'------------

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

// -------------------menu mobile--------------------

const burger = document.querySelector(".burger");
const aboutContainer = document.querySelector(".aboutContainer");
const podcastsContainer = document.querySelector(".podcastsContainer");
const o2 = document.querySelector(".o2");
const co2 = document.querySelector(".co2");
const contactContainer = document.querySelector(".contactContainer");
const webDescriptionMobile = document.querySelector(".webDescriptionMobile");
const helpBreath = document.querySelector(".helpBreath");
const helpBreath02 = document.querySelector(".helpBreath02");
const workshopsContainer = document.querySelector(".workshopsContainer");
const contactUs = document.querySelector(".contactUs");

burger.addEventListener("click", function () {
  burger.classList.toggle("active");
  aboutContainer.classList.toggle("active");
  podcastsContainer.classList.toggle("active");
  o2.classList.toggle("active");
  co2.classList.toggle("active");
  contactContainer.classList.toggle("active");
  webDescriptionMobile.classList.toggle("active");
  helpBreath.classList.toggle("active");
  helpBreath02.classList.toggle("active");
  workshopsContainer.classList.toggle("active");
  contactUs.classList.toggle("active");
});

// --------------------nav slider--------------------

$(".about").on("click", function () {
  $("body, html").animate(
    {
      scrollTop: $(".s1").offset().top,
    },
    1000
  );
});

$(".podcasts").on("click", function () {
  $("body, html").animate(
    {
      scrollTop: $(".s2").offset().top,
    },
    1000
  );
});

$(".workshops").on("click", function () {
  $("body, html").animate(
    {
      scrollTop: $(".s3").offset().top,
    },
    1000
  );
});

$(".contact").on("click", function () {
  $("body, html").animate(
    {
      scrollTop: $(".s4").offset().top,
    },
    1000
  );
});

// --------------------myCursor-------------------

var myCursor = document.getElementById("myCursor");
document.addEventListener("mousemove", function (e) {
  var x = e.clientX;
  var y = e.clientY;
  myCursor.style.left = x + "px";
  myCursor.style.top = y + "px";
});
