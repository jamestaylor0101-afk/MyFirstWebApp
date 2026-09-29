// Player info
const players = {
    savio: {
        name: "Savio",
        position: "Forward",
        nationality: "Brazil"
    },

    maddison: {
        name: "James Maddison",
        position: "Midfielder",
        nationality: "England"
    },

    kulusevski: {
        name: "Dejan Kulusevski",
        position: "Midfielder",
        nationality: "Sweden"
    },

    marmoush: {
        name: "Omar Marmoush",
        position: "Forward",
        nationality: "Egypt"
    },

    vanderven: {
        name: "Micky van de Ven",
        position: "Defender",
        nationality: "Netherlands"
    }
};


// DOM finds elements
const form = document.getElementById("player-form");
const playerSelect = document.getElementById("player");
const playerInformation = document.getElementById("player-information");



form.addEventListener("submit", function (event) {

    // Stop page refresh
    event.preventDefault();


    const selectedPlayer = playerSelect.value;

    // Clear previous info
    playerInformation.innerHTML = "";

    // Check selection
    if (selectedPlayer === "") {

        const heading = document.createElement("h2");
        heading.textContent = "Player Information";

        const message = document.createElement("p");
        message.textContent = "Please select a player.";

        playerInformation.appendChild(heading);
        playerInformation.appendChild(message);

        return;
    }

    // Get player info
    const player = players[selectedPlayer];


    const heading = document.createElement("h2");
    heading.textContent = "Player Information";

    const name = document.createElement("h3");
    name.textContent = player.name;

    const position = document.createElement("p");
    position.textContent = "Position: " + player.position;

    const nationality = document.createElement("p");
    nationality.textContent = "Nationality: " + player.nationality;

    // Add the new player elements
    playerInformation.appendChild(heading);
    playerInformation.appendChild(name);
    playerInformation.appendChild(position);
    playerInformation.appendChild(nationality);

});