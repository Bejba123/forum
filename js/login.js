const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(e){
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const rank = document.getElementById('rank').value;

    if(username !== ''){
        localStorage.setItem('forumUser', JSON.stringify({name: username, rank: rank}));
        window.location.href = 'home.html';
    }
});
