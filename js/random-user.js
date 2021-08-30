document.getElementById('user-container').style.display = 'none';

const loadUsers = () => {
    fetch('https://randomuser.me/api')
    .then(res => res.json())
    .then(data => displayUserDitails(data.results[0]));
};


const displayUserDitails = users => {
    document.getElementById('user-container').style.display = 'block';
    console.log(users);
    const userContainer = document.getElementById('user-container');
    userContainer.textContent = '';
    const div = document.createElement('div');
    div.classList.add('mx-auto');
    div.classList.add('p-5');
    div.innerHTML = `
        <div class="d-grid col-2 mx-auto mb-3">
            <img src="${users.picture.large}" class="rounded-circle">
        </div>
        <div class="d-grid col-1 text-center w-100 text-white">
            <h3>Name: ${users.name.title} ${users.name.first} ${users.name.last}</h3>
            <p>City: ${users.location.city}</p>
            <p>Street: ${users.location.street.name}, ${users.location.street.number}</p>
            <p>Coordinates: latitude(${users.location.coordinates.latitude}), longitude(${users.location.coordinates.longitude})</p>
            <P>Timezone: ${users.location.timezone.description} (${users.location.timezone.offset})</p>
        </div>
    `;
    userContainer.appendChild(div);
};