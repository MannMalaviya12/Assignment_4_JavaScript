document.addEventListener('DOMContentLoaded', function() {
    const studentInfo = document.getElementById('student-info');
    studentInfo.innerHTML = `<p>Student ID# 200553410 - Name: Mann Malaviya</p>`;
});

function searchArtist() {
    const input = document.getElementById('search-input');
    const query = input.value;
    const apiUrl = `https://api.deezer.com/search/artist/?q=${encodeURIComponent(query)}&output=json`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const results = document.getElementById('search-results');
            results.innerHTML = ''; // Clear previous results
            data.data.forEach(artist => {
                const artistEl = document.createElement('div');
                artistEl.innerHTML = `<h3>${artist.name}</h3>
                                      <img src="${artist.picture_medium}" alt="${artist.name}">
                                      <button onclick="playTracks('${artist.id}')">Play Top Tracks</button>`;
                results.appendChild(artistEl);
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Failed to fetch artist. Please try again.');
        });
}

function playTracks(artistId) {
    const apiUrl = `https://api.deezer.com/artist/${artistId}/top?limit=5&output=json`;
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            data.data.forEach(track => {
                const audio = new Audio(track.preview);
                audio.play();
            });
        })
        .catch(error => {
            console.error('Error fetching top tracks:', error);
            alert('Failed to play tracks. Please try again.');
        });
}
