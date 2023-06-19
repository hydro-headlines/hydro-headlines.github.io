$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});

function updateImageContainerMargin() {
  var navHeight = document.querySelector(".navigation-wrap").offsetHeight;
  var imageContainer = document.querySelector(".timeline");
  imageContainer.style.marginTop = navHeight + "px";
}
var navHeight = document.querySelector(".navigation-wrap").offsetHeight;
var imageContainer = document.querySelector(".timeline");
imageContainer.style.marginTop = navHeight + "px";
// Call the function initially
updateImageContainerMargin();

// Call the function on window resize
window.addEventListener("resize", updateImageContainerMargin);

// Select all elements with the class "my-class"
const elements = document.querySelectorAll(".hydro-disabled");

// Add a click event listener to each element
elements.forEach((element) => {
  element.addEventListener("click", () => {
    // Handle the click event for each element
    console.log("Element clicked:", element);
    alert("Sorry for the inconvenience, That feature is still WIP");
    // Add your desired actions or behavior here
  });
});
