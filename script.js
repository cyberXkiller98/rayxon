const daysCount = document.getElementById("days-count");

function updateCountdown() {
  const now = new Date();
  const eventDate = new Date("2025-07-06T00:00:00");
  const diffTime = eventDate - now;
  const days = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  daysCount.textContent = days;
}

updateCountdown();
setInterval(updateCountdown, 1000 * 60 * 60 * 24);
  