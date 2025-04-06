const fetchProfilesButton = document.getElementById('fetchProfilesButton');
const profileCardContainer = document.getElementById('profileCardContainer');

fetchProfilesButton.addEventListener('click', () => {

        const response = fetch('api/profiles');
        const data = response.json();
        console.log(data);
        const profiles = data;

        profiles.forEach( profile  => {
            const profileCard = document.createElement('div');
            profileCard.classList.add('profileCard');
    
            profileCard.innerHTML = `
                <img src="${profile.picture.large}" class="profileImage"/>
            `;

            profileCardContainer.appendChild(profileCard);
        });

});