
// Map of language capitalizations and colors
const languageMap = {
  "javascript": ["JavaScript", "yellow"],
  "firebase": ["FireBase", "orange"],
  "firestore": ["FireStore", "orange"],
  "sql": ["SQL", "green"],
  "nosql": ["NoSQL", "green"],
  "mongodb": ["MongoDB", "green"],
  "flutter": ["Flutter", "blue"],
  "react": ["React", "purple"],
  "java": ["Java", "green"],
  "python": ["Python", "red"],
  "c++": ["C++", "blue"],
  "cpp": ["C++", "blue"],
  "c#": ["C#", "blue"],
  "angular": ["Angular", "red"],
  "vue": ["Vue.js", "green"],
  "typescript": ["TypeScript", "turquoise"],
  "ruby": ["Ruby", "salmon"],
  "ruby on rails": ["Ruby on Rails", "salmon"],
  "swift": ["Swift", "yellowOrange"],
  "kotlin": ["Kotlin", "rose"],
  "php": ["PHP", "coral"],
  "dotnet": [".NET", "lavender"],
  ".net": [".NET", "lavender"],
  "html": ["HTML", "pink"],
  "css": ["CSS", "lavender"],
  "shell": ["Shell", "green"],
  "markdown": ["Markdown", "yellow"],
  "vim" : ["Vim", "green"],
  "database" : ["Database", "apricot"],
  "website" : ["Website", "blue"],
  "api" : ["API", "red"],
  "restful api" : ["RESTful API", "red"],
  "restful-api" : ["RESTful API", "red"],
  "ai" : ["A.I.", "purple"],
  "machine learning" : ["Machine Learning", "purple"],
  "game" : ["Game", "purple"],
  "dynamodb" : ["DynamoDB", "green"],
  "dart": ["Dart", "blue"],
  "beautifulsoup" : ["BeautifulSoup", "green"],
  "web-scraping" : ["Web Scraping", "pink"]
};

// Map of color names to color codes
const colorMap = {
  "yellow": "#fdd692",
  "orange": "#ff9980",
  "green": "#a1e1d4",
  "blue": "#7fc8f8",
  "purple": "#c7ceea",
  "skyBlue": "#a2cffe",
  "red": "#ffafcc",
  "turquoise": "#b8e9e5",
  "salmon": "#ff9b9b",
  "yellowOrange": "#ffd06e",
  "rose": "#ffc0cb",
  "coral": "#ffb2a7",
  "lavender": "#c7ceea",
  "pink": "#ffafcc",
  "apricot": "#f9cb9c"
};

// Proper capitalization function
function properCapitalization(language) {
  const langData = languageMap[language.toLowerCase()];
  return langData ? langData[0] : language.toUpperCase();
}


// Get color for language
function getColorForLanguage(language) {
  const langData = languageMap[language.toLowerCase()];
  return langData ? colorMap[langData[1]] : "#ffffff";
}



// Your fetchData function...
async function fetchData() {
  try {
      // Fetching data and other logic...
      const response = await fetch(`https://api.github.com/users/Calesi19/repos`);
      const data = await response.json();

      console.log(data);


      for (let i = 0; i < data.length; i++) {
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

          // Get the background color from the map
          const backgroundColor = getColorForLanguage(item);

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



