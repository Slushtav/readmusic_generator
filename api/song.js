const { getRandomSong } = require("../lib/deezer");

module.exports = async (req, res) => {

    const song = await getRandomSong();

    const youtube =
        `https://www.youtube.com/results?search_query=` +
        encodeURIComponent(
            song.title + " " + song.artist.name
        );

    const svg = `
<svg xmlns="http://www.w3.org/2000/svg"
width="700"
height="240">

<rect width="100%" height="100%" fill="#111827"/>

<text
x="30"
y="45"
fill="white"
font-size="28"
font-family="Arial">
🎵 Random Song
</text>

<text
x="30"
y="95"
fill="#58a6ff"
font-size="24"
font-family="Arial">

${song.title}

</text>

<text
x="30"
y="130"
fill="white"
font-size="20"
font-family="Arial">

👤 ${song.artist.name}

</text>

<text
x="30"
y="165"
fill="#cccccc"
font-size="18">

💿 ${song.album.title}

</text>

<text
x="30"
y="205"
fill="#00ff99"
font-size="18">

▶ ${youtube}

</text>

</svg>`;

    res.setHeader(
        "Content-Type",
        "image/svg+xml"
    );

    res.send(svg);

};