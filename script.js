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

filter.addEventListener("change", () => {
  // console.log("Filtro cambiado:", event.target.value);
  const selectedValue = filter.value;

  if(selectedValue){
    mensaje.textContent = `Seleccionaste: ${selectedValue}`;
  } else {
    mensaje.textContent = "";
  }
});

const searchInput = document.querySelector("#job-search-input");
searchInput.addEventListener("input", () => {
  const query = searchInput.value.toUpperCase();
  console.log("Busqueda:", query); 
});

searchInput.addEventListener("blur", () => {
  searchInput.value = "";
  console.log("Busqueda limpiada"); 
});


const searchForm = document.querySelector("#job-search-form");
searchForm.addEventListener("submit", (event) => {
  event.preventDefault(); 
  console.log("Formulario de búsqueda enviado");
});