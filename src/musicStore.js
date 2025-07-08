/*** PLAYLISTS ***/

// Music DB
const playlists = {
    relaxing: "https://open.spotify.com/embed/playlist/1cK2K7vjWQPD6n2QL3BjM3?utm_source=generator",
    instrumental: "https://open.spotify.com/embed/playlist/7cifFUHEE8JzcIZgDLoKdr?utm_source=generator",
    pop: "https://open.spotify.com/embed/playlist/5DXcaEdXuCaLVKtGgIAa4z?utm_source=generator",
    jazz: "https://open.spotify.com/embed/playlist/1R6rxCMG42MOojrkCVDfNk?utm_source=generator",
    rock: "https://open.spotify.com/embed/playlist/4Q7jlsaBFkqURGquc2FCbl?utm_source=generator",
    surprise: "https://open.spotify.com/embed/playlist/3h4bANEIaaXrbfLnzqVdXw?utm_source=generator"
};

document.querySelectorAll('div.music-genres button').forEach(button => {
    button.addEventListener('click', () => {
        const genre = button.dataset.genre;
        loadPlaylist(genre);
    });
});

const loadPlaylist = (genre) => {
    const playlist = playlists[genre];
    document.getElementById('playlist-display').innerHTML = `
        <iframe src="${playlist}" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
    `;
};