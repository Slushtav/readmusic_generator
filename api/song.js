const fs = require("fs");
const path = require("path");

module.exports = (req, res) => {
    // Membaca database lagu
    const songs = JSON.parse(
        fs.readFileSync(path.join(process.cwd(), "data", "songs.json"), "utf8")
    );

    // Memilih lagu secara acak
    const song = songs[Math.floor(Math.random() * songs.length)];

    // Membuat SVG
    const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="600" height="180">
    <rect width="100%" height="100%" rx="15" fill="#0d1117"/>

    <text x="30" y="40"
          font-size="22"
          fill="#58a6ff"
          font-family="Arial"
          font-weight="bold">
        🎵 Random Song
    </text>

    <text x="30" y="85"
          font-size="28"
          fill="white"
          font-family="Arial">
        ${song.title}
    </text>

    <text x="30" y="120"
          font-size="20"
          fill="#c9d1d9"
          font-family="Arial">
        👤 ${song.artist}
    </text>

    <text x="30" y="150"
          font-size="18"
          fill="#8b949e"
          font-family="Arial">
        💿 ${song.album} • ${song.duration}
    </text>
</svg>
`;

    res.setHeader("Content-Type", "image/svg+xml");
    res.send(svg);
};