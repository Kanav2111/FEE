const nameInput = document.getElementById('name-input');
const bioInput = document.getElementById('bio-input');
const picInput = document.getElementById('pic-input');
const updateButton = document.getElementById('update-button');

const profileName = document.getElementById('profile-name');
const profileBio = document.getElementById('profile-bio');
const profilePic = document.getElementById('profile-pic');

updateButton.addEventListener('click', function() {
    profileName.textContent = nameInput.value ? nameInput.value : 'Name: Monk\'s 😁';
    profileBio.textContent = bioInput.value ? bioInput.value : 'Bio: Bio Still 🙄';
    profilePic.src = picInput.value ? picInput.value : '';
});

// https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk img link