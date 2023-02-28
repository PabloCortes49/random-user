let number = 10;
let url = `https://randomuser.me/api?results=${number}`;
requestUsers();

const button = document.querySelector('.request');
button.addEventListener('click', function() {
    number = number + 10;
    url = `https://randomuser.me/api?results=${number}`;
    requestUsers();
});

function requestUsers() {
    axios.get(url)
        .then(function (response) {
            const users = response.data.results;
            const list = document.querySelector('.list');
            list.innerHTML = '';
            users.forEach(function (user, number) {
                list.innerHTML = list.innerHTML + `
                <div class="user">
                    <img src="https://randomuser.me/api/portraits/med/women/92.jpg" alt="">
                    <p>Sheryl</p>
                    <p>sheryl.lambert@example.com</p>
                    <button>Ver más</button>
                </div>
                <h1>${user.name.first}, ${user.email}, ${user.picture.medium}</h1>
            `;
            });
        })
        .catch(function (error) {
            alert('La petición ha fallado');
        });
}