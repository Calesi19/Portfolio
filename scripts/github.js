
const username = 'Calesi19'; // Replace with desired Github username
const apiUrl = `https://api.github.com/users/${username}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

  