document.addEventListener('DOMContentLoaded', function() {
    // Dynamically add student information
    const studentInfo = document.getElementById('student-info');
    studentInfo.innerHTML = `<p>Student ID# 200553410 - Name: Mann Malaviya</p>`;

    // MusicBrainz API setup - no API key needed for basic requests
    const apiUrl = `https://musicbrainz.org/ws/2/artist/?query=beatles&fmt=json`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayArtists(data.artists)); // Using 'artists' based on the expected JSON structure
});

function displayArtists(artists) {
    const container = document.getElementById('music-container'); // Ensure this ID matches in your HTML
    artists.forEach(artist => {
        const artistEl = document.createElement('div');
        artistEl.className = 'artist-item'; // Changed class name for clarity
        artistEl.innerHTML = `<h2>${artist.name}</h2><p>Country: ${artist.country || 'Unknown'}</p>`;
        container.appendChild(artistEl);
    });
}
