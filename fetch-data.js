//Fetch API para cargar los jobs desde un archivo JSON
const container = document.querySelector(".jobs-listings");

fetch("./data.json")
  .then(response => response.json())
  .then((jobs) => {
    jobs.forEach(job => {
    const article = document.createElement("article");
    article.classList.add("job-listing-card");

    article.dataset.modalidad = job.data.modalidad; // Agregamos el atributo data-modalidad al article
    article.dataset.nivel = job.data.nivel; // Agregamos el atributo data-nivel al article
    article.dataset.technology = job.data.technology; // Agregamos el atributo data-technology al article

    article.innerHTML = `
      <div>
        <h3>${job.titulo}</h3>
        <small>${job.empresa} | ${job.ubicacion}</small>
        <p>${job.descripcion}</p>
      </div>
      <button class="button-apply-job">Aplicar</button>
    `;
    // document.querySelector(".jobs-listings").appendChild(article);
    container.appendChild(article);
    });
  })