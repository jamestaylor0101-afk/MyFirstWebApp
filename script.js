// Player info
const API_KEY = "d64fd4d72449c41633d193c846a49a06";

const players = {
    savio: {
        name: "Savio",
        position: "Forward",
        nationality: "Brazil"
    },

    maddison: {
        name: "Maddison",
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


// Find the HTML elements using the DOM
const form = document.getElementById("player-form");
const playerSelect = document.getElementById("player");
const playerInformation = document.getElementById("player-information");


// Run when the form is submitted
form.addEventListener("submit", function (event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Get the selected player
    const selectedPlayer = playerSelect.value;

    // Check that a player has been selected
    if (selectedPlayer === "") {

        playerInformation.innerHTML = "";

        const heading = document.createElement("h2");
        heading.textContent = "Player Information";

        const message = document.createElement("p");
        message.textContent = "Please select a player.";

        playerInformation.appendChild(heading);
        playerInformation.appendChild(message);

        return;
    }


    // Get the player's name
    const playerName = players[selectedPlayer].name;


    // Get player information from the API
    getPlayerFromAPI(playerName);

});


// Function to get player information from API-Football
function getPlayerFromAPI(playerName) {

    const url =
        "https://v3.football.api-sports.io/players?team=47"
        + "&season=2024"
        + "&search=" + encodeURIComponent(playerName);


    fetch(url, {

        method: "GET",

        headers: {
            "x-apisports-key": API_KEY
        }

    })

        .then(response => response.json())

        .then(data => {

            console.log(data);


            // Check whether a player was found
            if (data.results === 0) {

                playerInformation.innerHTML = "";

                const heading = document.createElement("h2");
                heading.textContent = "Player Information";

                const message = document.createElement("p");
                message.textContent = "Player not found.";

                playerInformation.appendChild(heading);
                playerInformation.appendChild(message);

                return;
            }


            // Get the player from the API response
            const player = data.response[0].player;


            // Clear the previous information
            playerInformation.innerHTML = "";


            // Create the HTML elements using the DOM
            const heading = document.createElement("h2");
            heading.textContent = "Player Information";


            const name = document.createElement("h3");
            name.textContent = player.name;


            const nationality = document.createElement("p");
            nationality.textContent =
                "Nationality: " + player.nationality;


            const age = document.createElement("p");
            age.textContent =
                "Age: " + player.age;


            // Add the elements to the webpage
            playerInformation.appendChild(heading);
            playerInformation.appendChild(name);
            playerInformation.appendChild(nationality);
            playerInformation.appendChild(age);

        })


        .catch(error => {

            console.log("Error:", error);

            playerInformation.innerHTML = "";

            const message = document.createElement("p");

            message.textContent =
                "There was a problem getting the player information.";

            playerInformation.appendChild(message);

        });

}