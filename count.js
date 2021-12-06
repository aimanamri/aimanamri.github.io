function calculateDifference(thenString) {
    const second = 1000
    const minute = 60 * second
    const hour = 60 * minute
    const day = 24 * hour
    const month = 30 * day // approximately
    const year = 365 * day // approximately
    
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const now = new Date();
    const then = new Date(thenString);
  
    let difference = (now - then);
    const time = [{ year }, { month }, { day }, { hour }].map((item, i, a) => {
      const [[unitName, unit]] = Object.entries(item)
      const units = difference / unit | 0
      difference -= unit * units
      const maybePlural = units === 1 ? "" : "s"
      return units > 0 ? units + " " + unitName + maybePlural : ""
    }).filter(x => x)
  
    const formattedTime = time.length > 1 ? [...time.slice(0, -1), "and", time.slice(-1)].join(" ") : time[1]
    return formattedTime
  }
  
function displayDifference() {
    displayBox.textContent = calculateDifference(dateInput.value + ", " + timeInput.value)
}

const dateInput = document.querySelector(".date")
const timeInput = document.querySelector(".time")
const displayBox = document.querySelector(".js-display-difference")
dateInput.addEventListener("change", displayDifference)
timeInput.addEventListener("change", displayDifference)
displayDifference()
setInterval(displayDifference, 1000)

function hehehe() {
var x = document.getElementById("COUNTDOWN");
if (x.style.display === "none") {
     x.style.display = "block";
} else {
    x.style.display = "none";
 }
}
