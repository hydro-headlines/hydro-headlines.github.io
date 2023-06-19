function updateImageContainerMargin() {
  var navHeight = document.querySelector(".navigation-wrap").offsetHeight;
  var imageContainer = document.querySelector(".panels");
  imageContainer.style.marginTop = navHeight + "px";
}
var navHeight = document.querySelector(".navigation-wrap").offsetHeight;
var imageContainer = document.querySelector(".panels");
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
