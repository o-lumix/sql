// ConnexionString.js

function generateConnectionString() {
    const dbName = document.getElementById('dbName').value;
    const uid = document.getElementById('uid').value;
    const password = document.getElementById('password').value;
    const host = document.getElementById('host').value;

    // Mapping hébergeurs vers IPs
    const hostIPs = {
        "epycore": "185.200.246.238:3306",
        "kheberg": "panel.kheberg.fr",
        "soon": "SOON",
        "soon2": "SOON"
    };

    // Sélection de l'IP de l'hébergeur
    const ip = hostIPs[host.toLowerCase()] || "default IP";  // Remplacer "default IP" par une IP par défaut

    if (password.includes("=")) {
        document.getElementById('passwordWarning').style.display = 'block';
        document.getElementById('connectionString').innerText = "";
    } else {
        document.getElementById('passwordWarning').style.display = 'none';
        const connectionString = `server=${ip};uid=${uid};database=${dbName};password=${password};`;
        document.getElementById('connectionString').innerText = connectionString;
    }
}
