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
clickedSigns.forEach((el) => {
  el.addEventListener("click", () => {
    let clickedSignName = el.innerText.toLowerCase(); //gives the name of sign the user clicks on
    horoscopeTitle.innerText = clickedSignName.toUpperCase();
    fetch(
      `https://astrosage-api.herokuapp.com/api/horoscope/${clickedSignName}/daily`
    )
      .then((response) => response.json())
      .then((data) => (horoscopeContent.innerText = data.horoscope));
    
    
    
      
      
  });
});

