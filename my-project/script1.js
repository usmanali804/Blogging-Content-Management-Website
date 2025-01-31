function toggleDropdown() {
    const dropdown = document.getElementById('dropdownMenu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Close dropdown if clicked outside
document.addEventListener('click', function (event) {
    const dropdown = document.getElementById('dropdownMenu');
    const profileIcon = document.querySelector('.profile-icon');
    if (!dropdown.contains(event.target) && !profileIcon.contains(event.target)) {
        dropdown.style.display = 'none';
    }
});