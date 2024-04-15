function register() {
    const username = document.getElementById('username').value;
    const uuid = document.getElementById('uuid').value;
    const qq = document.getElementById('qq').value;

    const data = {
        username: username,
        uuid: uuid,
        qq: qq
    };

    fetch('https://morax.669.ink/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        alert(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}
