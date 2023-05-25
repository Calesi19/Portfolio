
function properCapitalization(language) {
  const languageMap = {
      "javascript": "JavaScript",
      "firebase": "FireBase",
      "firestore": "FireStore",
      "sql": "SQL",
      "nosql": "NoSQL",
      "mongodb": "MongoDB",
      "flutter": "Flutter",
      "react": "React",
      "java": "Java",
      "python": "Python",
      "c++": "C++",
      "cpp": "C++",
      "c#": "C#",
      "angular": "Angular",
      "vue": "Vue.js",
      "typescript": "TypeScript",
      "ruby": "Ruby",
      "ruby on rails": "Ruby on Rails",
      "swift": "Swift",
      "kotlin": "Kotlin",
      "php": "PHP",
      "dotnet": ".NET",
      ".net": ".NET",
      "html": "HTML",
      "css": "CSS",
      "shell": "Shell",
      "markdown": "Markdown",
      "vim" : "Vim",
      "database" : "Database",
      "website" : "Website",
      "api" : "API",
      "restful api" : "RESTful API",
      "restful-api" : "RESTful API",
      "ai" : "A.I.",
      "machine learning" : "Machine Learning",
      "game" : "Game",
      "dynamodb" : "DynamoDB",
      "dart": "Dart",
      "beautifulsoup" : "BeautifulSoup",
      "web-scraping" : "Web Scraping"
  };

  return languageMap[language.toLowerCase()] || language.toUpperCase();
}




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

        projectBox.addEventListener("click", function() {
          // Redirect to a different website
          window.location.href = data[i].html_url;
        });

        buttonWrapper.addEventListener("click", function(event) {
          event.stopPropagation(); // Stop event propagation
          // Redirect to inner div website
          window.location.href = data[i].homepage;
        });

        // Add class names
        projectBox.className = 'project-box';
        projectTitle.className = 'project-title';
        projectDescription.className = 'project-description';
        tags.className = 'tags';
        buttonWrapper.className = 'button-wrapper';
        button.className = 'project-button';
        





        

        data[i].topics.forEach(function(item) {
          console.log(item);

          let tag = document.createElement('span');
          tag.className = 'tag';
          tag.innerText = properCapitalization(item);
          tags.appendChild(tag);

          let backgroundColor;

          switch (properCapitalization(item).toUpperCase()) {
            case 'JAVASCRIPT':
              backgroundColor = "#fdd692"; // Pastel yellow
              break;
            case 'PYTHON':
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
            case 'JAVA':
              backgroundColor = "#a2cffe"; // Pastel sky blue
              break;
            case 'RUBY':
              backgroundColor = "#ff9b9b"; // Pastel salmon
              break;
            case 'CSS':
              backgroundColor = "#c7ceea"; // Pastel lavender
              break;
            case 'PHP':
              backgroundColor = "#ffb2a7"; // Pastel coral
              break;
            case 'SWIFT':
              backgroundColor = "#ffd06e"; // Pastel yellow-orange
              break;
            case 'GO':
              backgroundColor = "#b5ffd9"; // Pastel mint
              break;
            case 'RUST':
              backgroundColor = "#c9c9c9"; // Pastel gray
              break;
            case 'TYPESCRIPT':
              backgroundColor = "#b8e9e5"; // Pastel turquoise
              break;
            case 'KOTLIN':
              backgroundColor = "#ffc0cb"; // Pastel rose
              break;
            case 'SCALA':
              backgroundColor = "#f6b4ee"; // Pastel orchid
              break;
            case 'PERL':
              backgroundColor = "#f9cb9c"; // Pastel apricot
              break;
            case 'HASKELL':
              backgroundColor = "#c5ddeb"; // Pastel powder blue
              break;
            case 'LUA':
              backgroundColor = "#ffc1a1"; // Pastel peach
              break;
            case 'R':
              backgroundColor = "#e8b1b1"; // Pastel light pink
              break;
            case 'MATLAB':
              backgroundColor = "#ffe5b4"; // Pastel beige
              break;
            default:
              backgroundColor = "#ffffff"; // White (default)
          }


          tag.style.backgroundColor = backgroundColor;



        });

        






        // Add inner text
        projectTitle.innerText = data[i].name;
        projectDescription.innerText = data[i].description;
        button.innerText = 'View Website';



        // Append elements
        buttonWrapper.appendChild(button);
        projectBox.appendChild(projectTitle);
        projectBox.appendChild(projectDescription);
        projectBox.appendChild(tags);

        if (data[i].homepage != null & data[i].homepage != "") {
          projectBox.appendChild(buttonWrapper);
        }
        

        // Append projectBox to main element
        document.querySelector('#project-grid').appendChild(projectBox);
      }

      
  } catch (error) {
      console.error('Error:', error);
  }
}

fetchData();








  