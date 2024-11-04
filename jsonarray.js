var projectarray = [
    {
      'img' : 'images/netflix-project.png',
      'imgalt' : 'netflix clone project',
      'name' : 'Netlix Home page Clone',
      'description' : 'created a responsive netflix home page clone',
      'livedemo' : 'https://balajisudarshan.github.io/netflix-home-page-clone/',
      'github' : 'https://github.com/balajisudarshan/netflix-home-page-clone'
    },
   
  ];
  
  console.log("ocn");
  
  document.addEventListener("DOMContentLoaded", function(event) {
    var container = document.querySelector(".card-container"); 
    buildProject(projectarray, container); // Pass the container as an argument
  });
  
  function buildProject(data, container) {
    if (!data || !Array.isArray(data)) return; // or throw an error
  
    for (var i = 0; i < data.length; i++) {
      const card = `
        <div class="project-card">
          <img src=${data[i]?.img} alt=${data[i]?.imgalt}>
          <h3>${data[i]?.name}</h3>
          <p>${data[i]?.description}</p>
          <div class="buttons">
            <a href=${data[i]?.livedemo} target="_blank" class="btn live-demo">Live Demo</a>
            <a href=${data[i]?.github} target="_blank" class="btn github">GitHub</a>
          </div>
        </div>
      `;
      container.innerHTML += card;
    }
  }