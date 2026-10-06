// Player info
const API_KEY = "d64fd4d72449c41633d193c846a49a06";

const players = {

    lloris: {
        name: "Lloris"
    },

    emerson: {
        name: "Emerson"
    },

    romero: {
        name: "Romero"
    },

    dier: {
        name: "Dier"
    },

    davies: {
        name: "Davies"
    },

    perisic: {
        name: "Perisic"
    },

    hojbjerg: {
        name: "Hojbjerg"
    },

    bentancur: {
        name: "Bentancur"
    },

    kulusevski: {
        name: "Kulusevski"
    },

    kane: {
        name: "Kane"
    },

    son: {
        name: "Heung-Min Son"
    }

};


// Find the HTML elements using the DOM
const form = document.getElementById("player-form");
const playerSelect = document.getElementById("player");
const playerInformation = document.getElementById("player-information");


$("#player-form").submit(function (event) {

    event.preventDefault();

    const selectedPlayer = $("#player").val();

    if (selectedPlayer === "") {

        $("#player-information").html(
            "<h2>Player Information</h2>" +
            "<p>Please select a player.</p>"
        );

        return;
    }

    const playerName = players[selectedPlayer].name;

    getPlayerFromAPI(playerName);

});


// Function to get player information from API-Football
function getPlayerFromAPI(playerName) {

    $("#player-information").html(
        "<h2>Player Information</h2>" +
        "<p>Loading player information...</p>"
    );

    const url =
        "https://v3.football.api-sports.io/players?team=47"
        + "&season=2022"
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

            const stats = data.response[0].statistics[0];

            // Clear player info
            $("#player-information").hide();
            $("#player-information").empty();


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

            const team = document.createElement("p");
            team.textContent = "Team: " + stats.team.name;

            const position = document.createElement("p");
            position.textContent = "Position: " + stats.games.position;

            const appearances = document.createElement("p");
            appearances.textContent = "Appearances: " + stats.games.appearences;

            const goals = document.createElement("p");
            goals.textContent = "Goals: " + stats.goals.total;

            const assists = document.createElement("p");
            assists.textContent = "Assists: " + stats.goals.assists;


            // Add the elements to the webpage
            playerInformation.appendChild(heading);
            playerInformation.appendChild(name);
            playerInformation.appendChild(nationality);
            playerInformation.appendChild(age);
            playerInformation.appendChild(team);
            playerInformation.appendChild(position);
            playerInformation.appendChild(appearances);
            playerInformation.appendChild(goals);
            playerInformation.appendChild(assists);

            $("#player-information").fadeIn(600);

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