document.addEventListener('DOMContentLoaded', function() {
    // Dynamically add student information
    const studentInfo = document.getElementById('student-info');
    studentInfo.innerHTML = `<p>Student ID# 200553410 - Name: Mann Malaviya</p>`;
});

// Function to handle search button click, will request data from your own server
function searchArtist() {
    const input = document.getElementById('search-input');
    const query = input.value;
    const apiUrl = `/search/${encodeURIComponent(query)}`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayResults(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            alert('Failed to fetch artist. Please try again.');
        });
}

// Function to display search results
function displayResults(data) {
    const results = document.getElementById('search-results');
    results.innerHTML = ''; // Clear previous results
    data.data.forEach(artist => {
        const artistEl = document.createElement('div');
        artistEl.innerHTML = `<h3>${artist.name}</h3>
                              <img src="${artist.picture_medium}" alt="${artist.name}">`;
        results.appendChild(artistEl);
    });
}
