  document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const dropdownMenu = document.getElementById("dropdownMenu");

    toggleButton.addEventListener("click", function () {
      dropdownMenu.classList.toggle("hidden");
    });
  });
