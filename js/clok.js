function askName() {
  let name = prompt("Lütfen Adınızı Giriniz.");
  document.getElementById("myName").inner.Text = name;
}

function showTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let weekDayNumber = date.getDay();


  let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"]
  let daysName = days[dayNumber]

   hours = hours < 10 ? "0" + h : h;
   minutes = minutes < 10 ? "0" + m : m;
   seconds = seconds < 10 ? "0" + s : s;


  let time = hours + ":" + m + ":" + s + " " + daysName;
  document.getElementById("myClock").innerText = time;
  document.getElementById("myClock").textContent = time; 

  setTimeOut(showTime, 1000);

}


askName();
showTime();
