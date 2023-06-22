/* Please ❤ this if you like it! */

(function ($) {
  "use strict";

  $(function () {
    var header = $(".start-style");
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 10) {
        header.removeClass("start-style").addClass("scroll-on");
      } else {
        header.removeClass("scroll-on").addClass("start-style");
      }
    });
  });

  //Animation

  $(document).ready(function () {
    $("body.hero-anime").removeClass("hero-anime");
  });

  //Menu On Hover

  $("body").on("mouseenter mouseleave", ".nav-item", function (e) {
    if ($(window).width() > 750) {
      var _d = $(e.target).closest(".nav-item");
      _d.addClass("show");
      setTimeout(function () {
        _d[_d.is(":hover") ? "addClass" : "removeClass"]("show");
      }, 1);
    }
  });

  //Switch light/dark

  $("#switch").on("click", function () {
    if ($("body").hasClass("dark")) {
      $("body").removeClass("dark");
      $("#switch").removeClass("switched");
    } else {
      $("body").addClass("dark");
      $("#switch").addClass("switched");
    }
  });
})(jQuery);

/*const element = document.querySelector('.navigation-wrap');
        const height = element.offsetHeight;
        console.log('Element height:', height);
            const requiredHeight = height + 10
        document.getElementById('snapshot-container-header').style.marginTop = `${requiredHeight}px`*/
function updateImageContainerMargin() {
  var navHeight = document.querySelector(".navigation-wrap").offsetHeight;
  var imageContainer = document.querySelector(".image-container-news");
  navHeight += 10;
  imageContainer.style.marginTop = navHeight + "px";
}
var navHeight = document.querySelector(".navigation-wrap").offsetHeight;
var imageContainer = document.querySelector(".image-container-news");
navHeight += 10;
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

const urlParams = new URLSearchParams(window.location.search);
const read = urlParams.get("date");
const count = urlParams.get("count");
if (!read) {
  window.location = window.location.origin;
}
for (let i = 1; i < parseInt(count) + 1; i++) {
  const img = document.createElement("img");
  console.log('asdas')
  img.src = `${window.location.origin}/pdf/news/${read}/${i}.jpg`;
  img.classList.add("snapshot-image-news");
  img.alt = `news-image${i}`;

  // Get a reference to the target div element
  const targetDiv = document.getElementById("hydro-news-container");

  // Append the image element to the target div
  targetDiv.appendChild(img);
}
