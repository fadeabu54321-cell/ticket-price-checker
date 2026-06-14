
let age = prompt("Enter your age:");
age = Number(age);
let price;


if (age < 5) {
  price = "Free";
} else if (age >= 5 && age <= 17) {
  price = "$10";
} else if (age >= 18 && age <= 64) {
  price = "$20";
} else if (age >= 65) {
  price = "$12";
} else {
  price = "Invalid age";
}

console.log("Ticket price:", price);
alert("Ticket price: " + price);