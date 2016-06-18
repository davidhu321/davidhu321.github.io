const dateInput = document.getElementById('date');
const dateOutput = document.getElementById('dateString');
const setDate = () => {
  const date = new Date(dateInput.value);
  const today = new Date();
  date.setTime(date.getTime() + date.getTimezoneOffset() * 60 * 1000);
  if (date.getDate() === today.getDate()  && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()) {
  
    dateOutput.innerHTML = "You are correct"
  } else {
    dateOutput.innerHTML = `Wrong, Try Again`;
  }
}

dateInput.addEventListener("change", setDate)