document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const header = document.getElementById('header');
    const logo = document.getElementById('logo');
    const logoDark = document.getElementById('logo-dark');

    darkModeToggle.addEventListener('click', function()
        {
            header.classList.toggle('dark-mode');
            if (header.classList.contains('dark-mode')) {
            logo.classList.add('hide');
            logoDark.classList.remove('hide');
            } else {
            logo.classList.remove('hide');
            logoDark.classList.add('hide');
            }

        }
    )
});