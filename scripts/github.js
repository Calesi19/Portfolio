

async function fetchData() {
  try {
      const response = await fetch(`https://api.github.com/users/Calesi19/repos`);
      const data = await response.json();

      console.log(data);

      for (let i = 0; i < data.length; i++) {
        console.log(data[i].name)

        // Create divs
        let projectBox = document.createElement('div');
        let projectTitle = document.createElement('div');
        let projectDescription = document.createElement('div');
        let tags = document.createElement('div');
        let buttonWrapper = document.createElement('div');
        let button = document.createElement('button');

        // Add class names
        projectBox.className = 'project-box';
        projectTitle.className = 'project-title';
        projectDescription.className = 'project-description';
        tags.className = 'tags';
        buttonWrapper.className = 'button-wrapper';
        
        button.className = 'project-button';

        // Add inner text
        projectTitle.innerText = data[i].name;
        projectDescription.innerText = data[i].description;
        button.innerText = 'Visit Website';

        // Create tags
        try {
          const response = await fetch(data[i].languages_url);
          const tagData = await response.json();
      
          for (const key in tagData) {
            if (tagData.hasOwnProperty(key)) {

              let tag = document.createElement('span');
              tag.className = 'tag';
              tag.innerText = key;
              tags.appendChild(tag);
    
              let backgroundColor;

              switch (key) {
                case 'JavaScript':
                  backgroundColor = "#fdd692"; // Pastel yellow
                  break;
                case 'Python':
                  backgroundColor = "#ff9980"; // Pastel red
                  break;
                case 'HTML':
                  backgroundColor = "#ffafcc"; // Pastel pink
                  break;
                case 'C':
                  backgroundColor = "#7fc8f8"; // Pastel blue
                  break;
                case 'C++':
                  backgroundColor = "#a1e1d4"; // Pastel green
                  break;
                case 'Java':
                  backgroundColor = "#a2cffe"; // Pastel sky blue
                  break;
                case 'Ruby':
                  backgroundColor = "#ff9b9b"; // Pastel salmon
                  break;
                case 'CSS':
                  backgroundColor = "#c7ceea"; // Pastel lavender
                  break;
                case 'PHP':
                  backgroundColor = "#ffb2a7"; // Pastel coral
                  break;
                case 'Swift':
                  backgroundColor = "#ffd06e"; // Pastel yellow-orange
                  break;
                case 'Go':
                  backgroundColor = "#b5ffd9"; // Pastel mint
                  break;
                case 'Rust':
                  backgroundColor = "#c9c9c9"; // Pastel gray
                  break;
                case 'TypeScript':
                  backgroundColor = "#b8e9e5"; // Pastel turquoise
                  break;
                case 'Kotlin':
                  backgroundColor = "#ffc0cb"; // Pastel rose
                  break;
                case 'Scala':
                  backgroundColor = "#f6b4ee"; // Pastel orchid
                  break;
                case 'Perl':
                  backgroundColor = "#f9cb9c"; // Pastel apricot
                  break;
                case 'Haskell':
                  backgroundColor = "#c5ddeb"; // Pastel powder blue
                  break;
                case 'Lua':
                  backgroundColor = "#ffc1a1"; // Pastel peach
                  break;
                case 'R':
                  backgroundColor = "#e8b1b1"; // Pastel light pink
                  break;
                case 'Matlab':
                  backgroundColor = "#ffe5b4"; // Pastel beige
                  break;
                default:
                  backgroundColor = "#ffffff"; // White (default)
              }


              tag.style.backgroundColor = backgroundColor;




            }
          }
      
      
      } catch (error) {
          console.error('Error:', error);
      }

        // Append elements
        buttonWrapper.appendChild(button);
        projectBox.appendChild(projectTitle);
        projectBox.appendChild(projectDescription);
        projectBox.appendChild(tags);
        projectBox.appendChild(buttonWrapper);

        // Append projectBox to main element
        document.querySelector('#project-grid').appendChild(projectBox);
      }

      
  } catch (error) {
      console.error('Error:', error);
  }
}

fetchData();








  