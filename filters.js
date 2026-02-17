// filters
const filter = document.querySelector("#filter-location");
const mensaje = document.querySelector("#filter-selected-value");

filter.addEventListener("change", () => {
  //recuperamos todos los articles de jobs
  const jobs = document.querySelectorAll(".job-listing-card");
  //Importante para cargar dinamicamente los jobs, el evento change se ejecuta antes de cargar los jobs, 
  // por lo que no encuentra ningún article, para solucionarlo, el evento change se debe agregar después de cargar los jobs o usar event delegation
  // console.log("Filtro cambiado:", event.target.value);
  const selectedValue = filter.value;

  if(selectedValue){
    mensaje.textContent = `Seleccionaste: ${selectedValue}`;
  } else {
    mensaje.textContent = "";
  }

  jobs.forEach(job => {
    // const modalidad = job.dataset.modalidad; // Accedemos al valor del data-modalidad
    const modalidad = job.getAttribute("data-modalidad"); // Otra forma de acceder al valor del data-modalidad
    const isShown = selectedValue === "" || selectedValue === modalidad;
    job.classList.toggle("is-hidden", !isShown); //o (isShow === flase) Agrega o quita la clase is-hidden según isShown

    // if(selectedValue === "" || selectedValue === modalidad){
    //   // job.style.display = "flex"
    //   job.classList.remove("is-hidden");
    // } else {
    //   // job.style.display = "none"
    //   job.classList.add("is-hidden");
    // }
  })
});


const filterExperienceLevel = document.querySelector('#filter-experience-level');
const messageExperienceLevel = document.querySelector("#filter-selected-value-experience-level");
 
filterExperienceLevel.addEventListener("change", () => {
  const jobs = document.querySelectorAll(".job-listing-card");
  const selectedValue = filterExperienceLevel.value;
  console.log("Filtro de experiencia cambiado:", selectedValue);

  if(selectedValue) messageExperienceLevel.textContent = `Nivel de experiencia seleccionado: ${selectedValue}`;
  else messageExperienceLevel.textContent = "";

  jobs.forEach(job => {
    const experienceLevel = job.getAttribute("data-nivel")
    const isShowm = selectedValue === ''  || selectedValue === experienceLevel;
    job.classList.toggle('is-hidden', !isShowm);
  })
});


const technoligyFilter = document.querySelector('#filter-technology');
const messageTechnology = document.querySelector("#filter-selected-value-technology");

technoligyFilter.addEventListener('change', () => {
  const jobs = document.querySelectorAll(".job-listing-card");
  const selectedValue = technoligyFilter.value;
  console.log("Filtro de tecnología cambiado:", selectedValue);

  if(selectedValue) messageTechnology.textContent = `Tecnología seleccionada: ${selectedValue}`;
  else messageTechnology.textContent = "";

  jobs.forEach(job => {
    const technology = job.getAttribute("data-technology");
    const isShowt = selectedValue === '' || selectedValue === technology;
    job.classList.toggle('is-hidden', !isShowt);
  })
})




// example the events with input and form
// const searchInput = document.querySelector("#job-search-input");
// searchInput.addEventListener("input", () => {
//   const query = searchInput.value.toUpperCase();
//   console.log("Busqueda:", query); 
// });

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

