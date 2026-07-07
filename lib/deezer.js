const axios = require("axios");

const keywords = [
    "love",
    "night",
    "dream",
    "sky",
    "fire",
    "blue",
    "star",
    "moon",
    "rain",
    "happy",
    "rock",
    "pop",
    "anime",
    "game"
];

async function getRandomSong() {

    const keyword =
        keywords[Math.floor(Math.random() * keywords.length)];

    const response = await axios.get(
        `https://api.deezer.com/search?q=${keyword}`
    );

    const songs = response.data.data;

    return songs[
        Math.floor(Math.random() * songs.length)
    ];
}

module.exports = {
    getRandomSong
};