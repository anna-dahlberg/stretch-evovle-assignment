const fetchProfilesButton = document.getElementById('fetchProfilesButton');
const profileCardContainer = document.getElementById('profileCardContainer');

fetchProfilesButton.addEventListener('click', async () => {
    try {        
        const response = await fetch('/api/profiles');
        const profiles = await response.json();

        profileCardContainer.innerHTML = '';
    
        profiles.forEach( profile  => {
            const profileCard = document.createElement('div');
            profileCard.classList.add('profileCard');
    
            profileCard.innerHTML = `
                <img src="${profile.picture.large}" class="profileImage"/>
            `;
    
            profileCardContainer.appendChild(profileCard);
        });

    } catch (error) {
        profileCardContainer.innerHTML = '<p>Failed to load profiles</p>';
        console.error('Error fetching profiles:', error);
    }

});