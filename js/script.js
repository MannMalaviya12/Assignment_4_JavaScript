document.addEventListener('DOMContentLoaded', function() {
    // Dynamically add student information
    const studentInfo = document.getElementById('student-info');
    studentInfo.innerHTML = `<p>Student ID# 200553410 - Name: Mann Malaviya</p>`;

    // API setup
    const apiKey = 'YOUR_API_KEY';
    const apiUrl = `https://api.rawg.io/api/games?key=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())   
        .then(data => displayGames(data.results));
});

function displayGames(games) {
    const container = document.getElementById('games-container');
    games.forEach(game => {
        const gameEl = document.createElement('div');
        gameEl.className = 'game-item';
        gameEl.innerHTML = `<h2>${game.name}</h2><p>Released: ${game.released}</p>`;
        container.appendChild(gameEl);
    });
}
