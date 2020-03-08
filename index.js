// Javascript goes here
document.querySelector("button").addEventListener("click", handleClick);

function handleClick() {
  var name1 = document.getElementById("name1").value;
  var birthday1 = (Date.parse(document.getElementById("birthday1").value) / 86400000);
  var name2 = document.getElementById("name2").value;
  var birthday2 = (Date.parse(document.getElementById("birthday2").value) / 86400000);
  var rawDays = Math.abs(birthday1 - birthday2);
  var yearsApart = (Math.floor(rawDays / 365));
  var monthsApart = (Math.floor((rawDays % 365) / 30.5));
  var daysApart = (Math.floor((rawDays % 365) % 30.5));
  if (birthday1 < birthday2) {
    document.querySelector("h1").innerHTML = (" " + name1 + " is " + yearsApart + " years, " + monthsApart + " months, and " + daysApart + " days older than " + name2 + "!");
  } else if (birthday1 >= birthday2) {
    document.querySelector("h1").innerHTML = (" " + name2 + " is " + yearsApart + " years, " + monthsApart + " months, and " + daysApart + " days older than " + name1 + "!");
  }

}
