
    const toggle = document.getElementById('theme-checkbox');
    const elements = document.querySelectorAll('.toggle-theme');


    function setTheme(theme) {
      // Change theme mode saved in local storage.
      localStorage.setItem('theme', theme);
      
      elements.forEach(el => {
        if (theme === 'night') {
            el.classList.add('dark')
        }
        else {
            el.classList.remove('dark')
        }
    });
  }

    
  
    function updateThemeFromLocalStorage() {
      
        // Get theme mode from local storage.
      const storedTheme = localStorage.getItem('theme');

      if (storedTheme === 'night') {

        // If theme mode is night, then set toggle to that mode and set them to dark.
        toggle.checked = true;
        setTheme('night');

      } else {
        // If theme mode is day, then set toggle to that mode and set them to light.
        toggle.checked = false;
        setTheme('day');
      }

    }




    // Check if there is a local storage entry for the theme.
  
    if (!localStorage.getItem('theme')) {
        // If theme isn't saved in localstorage, create it and set it to day.
      localStorage.setItem('theme', 'day');
    } 
    
    else {
      // Change toggle depending on what has been previously saved in localstorage.
      updateThemeFromLocalStorage();
    }


    

toggle.addEventListener('change', () => {
    if (toggle.checked) {
        setTheme('night');
    } else {
        setTheme('day');
    }
});
  