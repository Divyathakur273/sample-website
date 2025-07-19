function showMessage() {
  alert("Thanks for visiting CodeLucky!");
}

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Live clock
function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();
  clock.textContent = now.toLocaleTimeString();
}

setInterval(updateClock, 1000); // Update every second
updateClock(); // Initial call

