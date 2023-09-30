const themeToggle = document.querySelector(".theme-toggle");

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

themeToggle.addEventListener("click", changeTheme);
