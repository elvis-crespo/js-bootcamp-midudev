// const botones = document.querySelectorAll(".button-apply-job");
// console.log(botones);

// if(botones != null){
//   console.log("Los botones se han cargado correctamente");

//   botones.forEach((boton) => {
//     boton.title = "Haz clic para aplicar";

//     boton.addEventListener("click", () => {
//       boton.textContent = "¡Gracias por aplicar!";
//       boton.classList.add("is-applied");
//       boton.disabled = true;
//       boton.title = "Ya aplicaste a esta oferta"; // Actualiza el título no va a estar activo porque está deshabilitado
//     });

//   });
// } else {
//   console.log("No se encontraron botones");
// }

// Event Bubbling
// ("Uso de event delegation para manejar múltiples botones de aplicar trabajo"); 
const jobsListingSection = document.querySelector(".jobs-listings");

// Usamos opcional chaining "?" para evitar errores si el elemento no existe
jobsListingSection?.addEventListener("click", (event) => {
  console.log(event.target);
  
  const elementClicked = event.target;

  if (elementClicked.classList.contains("button-apply-job")) {
    console.log("Botón de aplicar clickeado");
    elementClicked.textContent = "¡Gracias por aplicar!";
    elementClicked.classList.add("is-applied");
    elementClicked.disabled = true;
    elementClicked.title = "Ya aplicaste a esta oferta"; // Actualiza el título no va a estar activo porque está deshabilitado
  }
});


// filters
const filter = document.querySelector("#filter-location");
const mensaje = document.querySelector("#filter-selected-value");
//recuperamos todos los articles de jobs
const jobs = document.querySelectorAll(".job-listing-card");


filter.addEventListener("change", () => {
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
console.log("fetch iniciado");
fetch("./data.json")
  .then(response => response.json())
  .then(data => {
    console.log("Datos recibidos:", data);
  })
  .catch(error => {
    console.error("Error al obtener los datos:", error);
  });
  console.log("fetch finalizado");