// Player info
const API_KEY = "d64fd4d72449c41633d193c846a49a06";

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

function getPlayerFromAPI(playerName) {

    fetch("https://v3.football.api-sports.io/players?search=" + playerName + "&season=2025", {
        method: "GET",

        headers: {
            "x-apisports-key": API_KEY
        }
    })

        .then(response => response.json())

        .then(data => {

            console.log(data);

            if (data.results === 0) {

                console.log("No player found");
                console.log(data);

                playerInformation.innerHTML = "<p>No player found.</p>";

                return;
            }

            const player = data.response[0].player;

            playerInformation.innerHTML = "";

            const heading = document.createElement("h2");
            heading.textContent = "Player Information";

            const name = document.createElement("h3");
            name.textContent = player.name;

            const nationality = document.createElement("p");
            nationality.textContent = "Nationality: " + player.nationality;

            const age = document.createElement("p");
            age.textContent = "Age: " + player.age;

            playerInformation.appendChild(heading);
            playerInformation.appendChild(name);
            playerInformation.appendChild(nationality);
            playerInformation.appendChild(age);

        })

        .catch(error => {

            console.log("Error:", error);

            playerInformation.innerHTML =
                "<p>There was a problem getting the player information.</p>";

        });
}


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
    const playerName = players[selectedPlayer].name;

    getPlayerFromAPI(playerName);

    // Add the new player elements
    playerInformation.appendChild(heading);
    playerInformation.appendChild(name);
    playerInformation.appendChild(position);
    playerInformation.appendChild(nationality);

});