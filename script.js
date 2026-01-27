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
jobsListingSection.addEventListener("click", (event) => {
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
