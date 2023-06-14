// select construction page buttons
const button = document.querySelector(".options button");

function donate() {
    const amount = prompt("How much would you like to donate?");
    alert(`Do you want to donate ${amount} Bells?`);
}

button.addEventListener("click", donate);