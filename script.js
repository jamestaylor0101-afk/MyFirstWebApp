// Player information
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


// Get the form
const form = document.querySelector("form");

// Get the player selection
const playerSelect = document.querySelector("#player");

// Get the player information section
const playerInformation = document.querySelector(".player-information");


// Run when the form is submitted
form.addEventListener("submit", function (event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Get the selected player
    const selectedPlayer = playerSelect.value;

    // Check that a player has been selected
    if (selectedPlayer === "") {

        playerInformation.innerHTML = `
            <h2>Player Information</h2>
            <p>Please select a player.</p>
        `;

        return;
    }

    // Get information about the selected player
    const player = players[selectedPlayer];

    // Display the player information
    playerInformation.innerHTML = `
        <h2>Player Information</h2>
        <h3>${player.name}</h3>
        <p><strong>Position:</strong> ${player.position}</p>
        <p><strong>Nationality:</strong> ${player.nationality}</p>
    `;

});