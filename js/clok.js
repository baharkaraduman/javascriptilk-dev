function askName() {
  let name = prompt("Lütfen Adinizi Giriniz.");
  document.getElementById("myName").innerText = name;
}

function showTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let dayNumber = date.getDay();


  let days = ["Pazar", "Pazartesi", "Sali", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
  let daysName = days[dayNumber]

   hours = hours < 10 ? "0" + hours : hours;
   minutes = minutes < 10 ? "0" + minutes : minutes;
   seconds = seconds < 10 ? "0" + seconds : seconds;


  let time = hours + ":" + minutes + ":" + seconds + " " + daysName;
  document.getElementById("myClock").innerText = time;
  document.getElementById("myClock").textContent = time; 

  setTimeout(showTime, 1000);

}


askName();
showTime();
