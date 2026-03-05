// // filters
// const filter = document.querySelector("#filter-location");
// const mensaje = document.querySelector("#filter-selected-value");

// filter.addEventListener("change", () => {
//   //recuperamos todos los articles de jobs
//   const jobs = document.querySelectorAll(".job-listing-card");
//   //Importante para cargar dinamicamente los jobs, el evento change se ejecuta antes de cargar los jobs, 
//   // por lo que no encuentra ningún article, para solucionarlo, el evento change se debe agregar después de cargar los jobs o usar event delegation
//   // console.log("Filtro cambiado:", event.target.value);
//   const selectedValue = filter.value;

//   if(selectedValue){
//     mensaje.textContent = `Seleccionaste: ${selectedValue}`;
//   } else {
//     mensaje.textContent = "";
//   }

//   jobs.forEach(job => {
//     // const modalidad = job.dataset.modalidad; // Accedemos al valor del data-modalidad
//     const modalidad = job.getAttribute("data-modalidad"); // Otra forma de acceder al valor del data-modalidad
//     const isShown = selectedValue === "" || selectedValue === modalidad;
//     job.classList.toggle("is-hidden", !isShown); //o (isShow === flase) Agrega o quita la clase is-hidden según isShown

//     // if(selectedValue === "" || selectedValue === modalidad){
//     //   // job.style.display = "flex"
//     //   job.classList.remove("is-hidden");
//     // } else {
//     //   // job.style.display = "none"
//     //   job.classList.add("is-hidden");
//     // }
//   })
// });


// const filterExperienceLevel = document.querySelector('#filter-experience-level');
// const messageExperienceLevel = document.querySelector("#filter-selected-value-experience-level");
 
// filterExperienceLevel.addEventListener("change", () => {
//   const jobs = document.querySelectorAll(".job-listing-card");
//   const selectedValue = filterExperienceLevel.value;
//   console.log("Filtro de experiencia cambiado:", selectedValue);

//   if(selectedValue) messageExperienceLevel.textContent = `Nivel de experiencia seleccionado: ${selectedValue}`;
//   else messageExperienceLevel.textContent = "";

//   jobs.forEach(job => {
//     const experienceLevel = job.getAttribute("data-nivel")
//     const isShowm = selectedValue === ''  || selectedValue === experienceLevel;
//     job.classList.toggle('is-hidden', !isShowm);
//   })
// });


// const technoligyFilter = document.querySelector('#filter-technology');
// const messageTechnology = document.querySelector("#filter-selected-value-technology");

// technoligyFilter.addEventListener('change', () => {
//   const jobs = document.querySelectorAll(".job-listing-card");
//   const selectedValue = technoligyFilter.value;
//   console.log("Filtro de tecnología cambiado:", selectedValue);

//   if(selectedValue) messageTechnology.textContent = `Tecnología seleccionada: ${selectedValue}`;
//   else messageTechnology.textContent = "";

//   jobs.forEach(job => {
//     const technology = job.getAttribute("data-technology");
//     const isShowt = selectedValue === '' || selectedValue === technology;
//     job.classList.toggle('is-hidden', !isShowt);
//   })
// })


// Logica para el buscador de texto en el título de los jobs
const searchInput = document.querySelector('#job-search-input');

searchInput.addEventListener('input', () => {
  const jobCards = document.querySelectorAll('.job-listing-card');
  
  const query = searchInput.value.toUpperCase();
  console.log("Busqueda:", query);
  
  
  jobCards.forEach(job => {
    // const titulo = job.dataset.titulo; // Convertimos el título a mayúsculas para hacer una búsqueda case-insensitive
    const titulo = job.getAttribute("data-titulo"); // Convertimos el título a mayúsculas para hacer una búsqueda case-insensitive
    const isShown = titulo.toLocaleLowerCase().includes(query.toLocaleLowerCase());
    job.classList.toggle('is-hidden', !isShown);
  })
  
  // Se podría acceder al título de cada job iterando sobne el Nodelist, con el h3 dentro de cada job, pero como el título 
  // ya se guardó en un atributo data-titulo, es más sencillo acceder a él directamente con job.dataset.titulo
  // const jobCards = document.querySelectorAll(".job-listing-card");
  
  // jobCards.forEach((job) => {
  //   const titulo = job.querySelector("h3").textContent;
  //   console.log("Título:", titulo);
  // });
})

// searchInput.addEventListener("blur", () => {
//   searchInput.value = "";
//   console.log("Busqueda limpiada"); 
// });

// const searchForm = document.querySelector("#job-search-form");
// searchForm.addEventListener("submit", (event) => {
//   event.preventDefault(); 
//   console.log("Formulario de búsqueda enviado");
// });

// document.addEventListener("keydown", (event) => {
//   console.log("Tecla presionada:", event.key);
//   if(event.key === "Escape"){
//     searchInput.value = "";
//     console.log("Busqueda limpiada con Escape"); 
//   }
// });


// Refactorizando el código para evitar la repetición y mejorar la mantenibilidad
const filterLocation = document.querySelector('#filter-location');
const filterExperienceLevel = document.querySelector('#filter-experience-level');
const filterTechnology = document.querySelector('#filter-technology');

// Función para aplicar los filtros
function applyFilters() {
  // Recuperamos todos los jobs
  const jobs = document.querySelectorAll('.job-listing-card');

  // Obtenemos los valores seleccionados de cada filtro
  const selectedLocation = filterLocation.value;
  const selectedExperienceLevel = filterExperienceLevel.value;
  const selectedTechnology = filterTechnology.value;

  // Iteramos sobre cada job para determinar si se muestra o se oculta
  jobs.forEach(job => {
    // Obtenemos los atributos de cada job
    const jobLocation = job.getAttribute('data-modalidad');
    const jobExperienceLevel = job.getAttribute('data-nivel');
    const jobTecnology = job.getAttribute('data-technology');

    // Verificamos si cada filtro coincide o si el filtro está vacío (lo que significa que no se aplica ese filtro)
    const isLocationMatch = selectedLocation === '' || selectedLocation === jobLocation;
    const isExperienceLevelMatch = selectedExperienceLevel === '' || selectedExperienceLevel === jobExperienceLevel;
    const isTechnologyMatch = selectedTechnology === '' || selectedTechnology === jobTecnology;

    const isShown = isLocationMatch && isExperienceLevelMatch && isTechnologyMatch; 
    job.classList.toggle('is-hidden', !isShown); // Agrega o quita la clase is-hidden según isShown
  })
}

filterLocation.addEventListener('change', applyFilters);
filterExperienceLevel.addEventListener('change', applyFilters);
filterTechnology.addEventListener('change', applyFilters);