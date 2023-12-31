const navigation = document.querySelector(".navigation");
const hamburgerbar = document.querySelector(".hamburger-bar");
const overlay = document.querySelector(".overlay");

overlay.addEventListener("click", () => {
  hamburgerbar.classList.remove("active");
  navigation.classList.remove("show");
  overlay.classList.remove("show");
});

hamburgerbar.addEventListener("click", () => {
  hamburgerbar.classList.toggle("active");
  navigation.classList.toggle("show");
  overlay.classList.toggle("show");
});

const userComments = document.querySelector(".testimonials-container");

let isDragging = false;

const dragging = (e) => {
  if (!isDragging) return;
  userComments.scrollLeft -= e.movementX;
};

userComments.addEventListener("mousemove", dragging);
userComments.addEventListener("mousedown", () => (isDragging = true));
userComments.addEventListener("mouseup", () => (isDragging = false));
userComments.addEventListener("mouseleave", () => (isDragging = false));

const circleBtns = document.querySelectorAll(".circle-btn");
const slideTestimonials = document.querySelectorAll(".user");
circleBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    circleBtns.forEach((btn) => btn.classList.remove("active"));
    btn.classList.add("active");
    slideTestimonials.forEach((user) => {
      user.style.transform = `translate(${-index * 100}%)`;
    });
  });
});

const userEmail = document.querySelector('[type="email"]');
const submitBtn = document.querySelector(".email-submit");
const error = document.querySelector(".error");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (userEmail.value) {
    var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (userEmail.value.match(validRegex)) {
      error.innerHTML = "";
      userEmail.classList.remove("error");
    } else {
      error.innerHTML = "Please insert a valid email";
    }
  } else {
    error.innerHTML = `Email field is empty`;
    userEmail.classList.add("error");
  }
});
