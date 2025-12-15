function findDestination() {
    const budget = document.querySelector("#budget").value;
    const climate = document.querySelector("#climate").value;
    const result = document.querySelector("#result");

    // Logic for choosing a destination
    if (budget === "low" && climate === "warm") {
        result.innerText = "We recommend: Costa Rica! 🌴 Great for jungles, beaches, and adventure.";
    } 
    else if (budget === "medium" && climate === "warm") {
        result.innerText = "We recommend: Greece! 🏛️ Perfect for warm weather, beaches, and culture.";
    } 
    else if (budget === "high" && climate === "cool") {
        result.innerText = "We recommend: Japan! 🌸 Beautiful landscapes, temples, and unique cities.";
    } 
    else if (budget === "medium" && climate === "cool") {
        result.innerText = "We recommend: South Africa! 🐘 Safari experiences and gorgeous coastlines.";
    } 
    else {
        result.innerText = "Try exploring all our destinations — each one has something amazing!";
    }
}

function checkTravelExperience() {
    let traveled = document.querySelector('input[name="traveled"]:checked');

    if (!traveled) {
        alert("Please select Yes or No.");
        return false;
    }

    if (traveled.value === "yes") {
        alert("Awesome! Let's find your next adventure!");
    } else {
        alert("No worries — we’ll help you plan your first international trip!");
    }

    return true;
}

function showSelectedDestinations() {
    let checks = document.querySelectorAll('.location-section input[type="checkbox"]:checked');
    let output = document.getElementById("dest-output");

    if (checks.length === 0) {
        output.innerHTML = "No destinations selected yet.";
        return;
    }

    let list = [];
    checks.forEach(c => list.push(c.labels[0].innerText));

    output.innerHTML = "You selected: " + list.join(", ");
}

function greetUser() {
    let username = document.getElementById("name").value;

    if (username.trim() === "") {
        document.getElementById("greeting").innerHTML = "Hello traveler!";
    } else {
        document.getElementById("greeting").innerHTML = "Welcome, " + username + "!";
    }
}