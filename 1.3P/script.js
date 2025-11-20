function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  console.log(timeString);
  document.getElementById("time").textContent = timeString;
}

// update every 1 second
setInterval(updateTime, 1000);

// run immediately when page loads
updateTime();
