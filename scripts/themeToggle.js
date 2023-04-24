
    const toggle = document.getElementById('theme-checkbox');
    const whiteElements = document.querySelectorAll('.white');
    const blackElements = document.querySelectorAll('.black')


    function setTheme(theme) {
      // Change theme mode saved in local storage.
      localStorage.setItem('theme', theme);
      

      whiteElements.forEach(el => {
        if (theme === 'night') {
            el.style.backgroundColor = 'black';
            el.style.color = 'white';
        }
        else {
            el.style.backgroundColor = 'white';
            el.style.color = 'black';
        }
    });

        blackElements.forEach(el => {
            if (theme === 'night') {
                el.style.backgroundColor = 'white';
                el.style.color = 'black';
            }
            else {
                el.style.backgroundColor = 'black';
                el.style.color = 'white';
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
        console.log('night')
        setTheme('night');
    } else {
        console.log('day')
        setTheme('day');
    }
});
  