var navLinks = document.getElementById("navLinks");
function openMenu() {
  navLinks.style.right = "0";
}
function closeMenu() {
  navLinks.style.right = "-200px";
}

//Log In/Sign Up //
const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
