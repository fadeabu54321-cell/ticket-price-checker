// Prompt for cart total
let total = prompt("Enter cart total:");
total = Number(total);


let isMember = prompt("Are you a member? (yes/no)");


let discount = 0;

if (isMember === "yes" && total >= 200) {
  discount = 0.20;
} else if (isMember === "yes" && total < 200) {
  discount = 0.10;
} else if (isMember === "no" && total >= 200) {
  discount = 0.05;
} else {
  discount = 0;
}


let finalPrice = total - (total * discount);


console.log(`Final price: $${finalPrice.toFixed(2)}`);
alert(`Final price: $${finalPrice.toFixed(2)}`);