const user = JSON.parse(localStorage.getItem('forumUser'));
if(!user) { window.location.href = 'index.html'; }
else { document.getElementById('welcome').textContent = `Witaj, ${user.rank} ${user.name}!`; }

const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('forumUser');
    window.location.href = 'index.html';
});

// Lista działów forum
const sections = [
    {name: "Ogólne", threads: 5, lastPost: "Admin H"},
    {name: "Minecraft", threads: 8, lastPost: "Km Kmuser"},
    {name: "PvP / Survival", threads: 4, lastPost: "M Moderator"},
    {name: "Off-topic", threads: 3, lastPost: "J@ JUser"}
];

const sectionsDiv = document.getElementById('sections');
sections.forEach(section => {
    const div = document.createElement('div');
    div.className = 'post';
    div.innerHTML = `<strong>${section.name}</strong> - Wątki: ${section.threads} - Ostatni post: ${section.lastPost}`;
    sectionsDiv.appendChild(div);
});
