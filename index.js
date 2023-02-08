const API_KEY = "NChEMHvzQhHI5cF19sTNTIUlrlLUCZM4YdgZekrQ";
const API_URl = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

async function getNasaPicture() {
  const respone = await fetch(API_URl);
  const data = await respone.json();
  console.log(data);
  const title = data.title;
  const picture = data.url;
  const description = data.explanation;
  document.getElementById("title").innerHTML = title;
  document.getElementById("picture").src = picture;
  document.getElementById("description").innerHTML = description;
}
F:\Video Shoot\Projects\shorts\2project\index.js
getNasaPicture();
