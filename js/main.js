// toggle spin class on icon
window.addEventListener("pageshow", () => {
  // we should to stop this progress until page loaded to get svg 
  // because i element change to svg element
  let btnSetting = document.querySelector(".toggle-settings");
  let iconSetting = document.querySelector(".toggle-settings svg");
  let settingsPart = document.querySelector(".settings-box");


  btnSetting.addEventListener("click", () => {
    // toggle class fa-spin for rotation on self
    iconSetting.classList.toggle("fa-spin");
    // toggle class open on main settings box
    settingsPart.classList.toggle("open");
  })
});
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\










// change main color
let root = document.querySelector(":root");
let colorsBtn = document.querySelectorAll(".colors-list li");

if (localStorage.getItem("mainColor")) {
  root.style.setProperty("--main-color", localStorage.getItem("mainColor"));
  colorsBtn.forEach(colorBtn => {
    colorBtn.classList.remove("active")
    if (colorBtn.dataset.color === (localStorage.getItem("mainColor"))) {
      colorBtn.classList.add("active");
    }
  });
} else {
  root.style.setProperty("--main-color", "#FF9800");
}
// loop on all list items
colorsBtn.forEach(colorBtn => {
  // click on all list items
  colorBtn.addEventListener("click", (e) => {
    // remove active class from all list items
    colorsBtn.forEach(ele => {
      ele.classList.remove("active");
    });
    // add active class to color clicked
    e.target.classList.add("active");
    // add current color to local storage
    localStorage.setItem("mainColor", e.target.dataset.color);
    // set current color on root
    root.style.setProperty("--main-color", localStorage.getItem("mainColor"));
  });
});
//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\










// show the link in nav bar
let links = document.querySelector(".header .links");
let burgerIcon = document.querySelector(".header button");
let arrImage = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"];

burgerIcon.addEventListener("click", () => {
  if (links.classList.contains("hide")) {
    links.classList.remove("hide");
    links.classList.add("show");
  } else if (links.classList.contains("show")) {
    links.classList.remove("show");
    links.classList.add("hide");
  }
});
// \\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\










// toggle bullets
let choiceBtn = document.querySelectorAll(".bullets-option span");
let bullets = document.querySelector(".bullets")
choiceBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    choiceBtn.forEach(span => {
      span.classList.remove("active");
    });
    btn.classList.add("active");
  });
});
choiceBtn.forEach((span) => {
  span.addEventListener("click", (e) => {
    e.target.dataset.display === "show" ?
      bullets.style.display = "block" :
      bullets.style.display = "none";
    localStorage.setItem("display", e.target.dataset.display)
  })
})
if (localStorage.getItem("display")) {
  localStorage.getItem("display") === "show" ?
    bullets.style.display = "block" :
    bullets.style.display = "none";
  choiceBtn.forEach(span => {
    span.classList.remove("active");
    if (span.dataset.display === localStorage.getItem("display")) {
      span.classList.add("active")
    }
  })
}
// \\//\\//\\//\\//\\//\\//\\//\\//\\//\\//\\











// random background image for landing page
let landingImage = document.querySelector(".landing-page");
let choiceBackground = document.querySelectorAll(".random-backgrounds span");

choiceBackground.forEach((btn) => {
  btn.addEventListener("click", () => {
    choiceBackground.forEach(span => {
      // remove active class from all element
      span.classList.remove("active");
    });
    // add active class for element that clicked
    btn.classList.add("active");
  });
});
// we declare randomNum out of  changeBackground() 
// for store tha image that the user stop random img on it
let randomNum;

function changeBackground() {
  randomNum = Math.floor(Math.random() * arrImage.length + 1);
  landingImage.style.backgroundImage = `url("../images/0${randomNum}.jpg")`;
  localStorage.setItem("indexImage", randomNum);
}

if (localStorage.getItem("background") === "no") {
  if (localStorage.getItem("indexImage")) {
    landingImage.style.backgroundImage = `url("../images/0${localStorage.getItem("indexImage")}.jpg")`;
  }
}else{
  landingImage.style.backgroundImage = `url("../images/01.jpg")`;
}
// change the background frequently
let timerID = setInterval(changeBackground, 4000);

// change the background frequently depending on user choice
choiceBackground.forEach((span) => {
  span.addEventListener("click", (e) => {
    e.target.dataset.background === "no" ?
      clearInterval(timerID) :
      timerID = setInterval(changeBackground, 4000);
    localStorage.setItem("background", e.target.dataset.background)
  })
});
// if there is a previous selection
if (localStorage.getItem("background")) {
  choiceBackground.forEach(span => {
    // remove active class from all element
    span.classList.remove("active");
    // add active class to element that refer to previous selection
    if (span.dataset.background === localStorage.getItem("background")) {
      span.classList.add("active");
    }
  })
  // change state interval depending on local storage data
  localStorage.getItem("background") === "yes" ?
    timerID = setInterval(changeBackground, 4000) :
    clearInterval(timerID);
}
// \\//\\//\\//\\//\\//\\//\\//\\//\\//\\










// handle width by data progress
let progresses = document.querySelectorAll(".skill-progress span");
let skillsSec = document.querySelector(".skills-section");

window.addEventListener("scroll", () => {
  if (skillsSec.getBoundingClientRect().top <= 400) {
    progresses.forEach((span) => {
      let width = span.getAttribute("data-progress");
      span.style.width = `${width}`;
    });
  }
});
// \\//\\//\\//\\//\\//\\//\\//\\//\\//\\











// gallery popup
let gallery = document.querySelectorAll(".gallery-section .box img");
let popUp = document.querySelector(".popUp");
let imgPopUp = document.querySelector(".popUp img");
let btnClose = document.querySelector(".popUp button");
let overlay = document.querySelector(".overlay-gallery");
let titlePopUp = document.querySelector(".popUp h1");
let arrNum = ["one", "two", "three", "four", "five", "sex", "seven", "eight", "nine", "ten"]

// show popUp
gallery.forEach((img, i) => {
  img.addEventListener("click", () => {
    // change popup title depending on its order on the gallery 
    let indexImg = arrNum[i];
    titlePopUp.innerHTML = `Image ${indexImg}`;
    // change img src to the img that i click on 
    let scr = img.getAttribute("src");
    imgPopUp.setAttribute("src", scr);
    // show img with big size
    popUp.classList.add("show");
    overlay.classList.add("show");
  });
});
// hide popUp
btnClose.addEventListener("click", () => {
  popUp.classList.remove("show");
  overlay.classList.remove("show");
});
// \\//\\//\\//\\//\\//\\//\\//\\//\\//\\










// reset options
document.querySelector(".reset-options").onclick = function () {
  // remove all data in local storage 
  localStorage.removeItem("display");
  localStorage.removeItem("mainColor");
  localStorage.removeItem("background");
  // reload the page to start on cleanliness
  window.location.reload();
}