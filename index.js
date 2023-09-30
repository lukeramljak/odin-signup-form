function changeTheme() {
  const light = document.querySelector(".toggle-light");
  const dark = document.querySelector(".toggle-dark");
  if (document.documentElement.dataset.theme == "dark") {
    light.classList.remove("hidden");
    dark.classList.add("hidden");
    document.documentElement.setAttribute("data-theme", "light");
  } else if (document.documentElement.dataset.theme == "light") {
    light.classList.add("hidden");
    dark.classList.remove("hidden");
    document.documentElement.setAttribute("data-theme", "dark");
  }
}

function checkPasswords(e) {
  const pwField = document.getElementById("password");
  const pwConfirmField = document.getElementById("password-confirm");
  const pwError = document.querySelector(".password-error");

  if (pwField.value !== pwConfirmField.value) {
    e.preventDefault();
    pwField.classList.add("invalid");
    pwConfirmField.classList.add("invalid");
    pwError.classList.remove("hidden");
  }
}

const themeToggle = document.querySelector(".theme-toggle");
const form = document.getElementById("signup");
themeToggle.addEventListener("click", changeTheme);
form.addEventListener("submit", checkPasswords);
