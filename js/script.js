// Tailwindcss cdn
tailwind.config = {
  theme: {
    extend: {
      colors: {
        clifford: "#da373d",
        primaryColor: "#ABEF5F",
        secondaryColor: "#abef5f80",
        primaryTextColor: "#212121",
        secondaryTextColor: "#737373",
        bgColorOne: "#F9F9F9",
        bgColorTwo: "#F3F3F3",
      },
      backgroundPosition: {
        customBgPosition: "25px 50px",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
};

//
("use strict");

// Analog Clock
let aSeconds = document.querySelector("#aSeconds");
let aMinutes = document.querySelector("#aMinutes");
let aHours = document.querySelector("#aHours");

setInterval(() => {
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * 6;
  let ss = day.getSeconds() * 6;

  aSeconds.style.transform = `rotateZ(${ss}deg)`;
  aMinutes.style.transform = `rotateZ(${mm}deg)`;
  aHours.style.transform = `rotateZ(${hh + mm / 12}deg)`;

  //Digital Clock
  let dSeconds = document.querySelector("#dSeconds");
  let dMinutes = document.querySelector("#dMinutes");
  let dHours = document.querySelector("#dHours");
  let ampm = document.querySelector("#ampm");

  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  // convert 24hr to 12hr clock
  let am = h >= 12 ? "PM" : "AM";

  if (h > 12) {
    h = h - 12;
  }

  // add zero before single digit number
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  dHours.innerText = h;
  dMinutes.innerText = m;
  dSeconds.innerText = s;
  ampm.innerText = am;
});
