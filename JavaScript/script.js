// JavaScript Document
$(document).ready(function () {
  $("#autoWidth").lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $("#autoWidth").removeClass("cS-hidden");
    },
  });
});

//! Horoscope Logic
const clickedSigns = document.querySelectorAll(".sign");
const horoscopeTitle = document.querySelector(".horoscopePanelBox-title");
const horoscopeContent = document.querySelector(".horoscopePanelBox-content");

// Functions

//  EventListeners
// clickedSigns.forEach((el) => {
//   el.addEventListener("click", () => {
//     let clickedSignName = el.innerText.toLowerCase(); //gives the name of sign the user clicks on
//     horoscopeTitle.innerText = clickedSignName.toUpperCase();
//     fetch(
//       `http://sandipbgt.com/theastrologer/api/horoscope/${clickedSignName}/today`
//     )
//       .then((response) => response.json())
//       .then((data) => console.log(data));

//   });
// });

clickedSigns.forEach((el) => {
  el.addEventListener("click", () => {
    let clickedSignName = el.innerText; //gives the name of sign the user clicks on
    horoscopeTitle.innerText = clickedSignName.toUpperCase();
    fetch("../horoscope.json")
      .then((response) => response.json())
      .then((data) => {
        const horoscopes = data.horoscopes;
        for (let i = 0; i < horoscopes.length; i++) {
          if (horoscopes[i].sunsign === clickedSignName) {
            horoscopeContent.innerText = horoscopes[i].horoscope;
          }
        }
      });
  });
});
