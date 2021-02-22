// Get the hour
const today = new Date();
const hour = today.getHours();

// Here you can change your name
const name = ' Basim';

// Here you can change your greetings
const gree1 = 'Go to Sleep,  ' + name + "!";
const gree2 = 'Good morning,  ' + name + "!";
const gree3 = 'Good afternoon  ' + name + "!";
const gree4 = 'Good evening,  ' + name + "!";
const gree5 = 'Good evening,  ' + name + "!";
const gree6 = 'Good evening,  ' + name + "!";

// Define the hours of the greetings
if (hour >= 23 && hour < 5) {
  document.getElementById('greetings').innerText = gree1 + name;
} else if (hour >= 6 && hour < 12) {
  document.getElementById('greetings').innerText = gree2 + name;
} else if (hour >= 12 && hour < 17) {
  document.getElementById('greetings').innerText = gree3 + name;
} else {
  document.getElementById('greetings').innerText = gree4 + name;
}
