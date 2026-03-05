// let currentPage = 1;
// let itemsPerPage = 3;
// const sortSelect = document.querySelector("#sortSelect");

// function render() {
//     const container = document.querySelector(".jobs-listings");
//     const jobCards = document.querySelectorAll(".job-listing-card");
    
    
//     // A. ordenamiento de los trabajos por título
//     const sortOrder = sortSelect.value;
//     //   const sortedData = sortJobs(sortOrder);
    
//     const sortedData = [...jobCards].sort((a, b) => {
//         const titleA = a.dataset.titulo.toUpperCase();
//         const titleB = b.dataset.titulo.toUpperCase();
//         return sortOrder === "asc"
//         ? titleA.localeCompare(titleB)
//         : titleB.localeCompare(titleA);
//     });
    
//     // B. calcular los índices para la paginación
//     const startIndex = (currentPage - 1) * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
    
//     // C. Obtemer los trabajos a mostrar en la página actual
//     const pageData = sortedData.slice(startIndex, endIndex);
//     console.log("Trabajos para mostrar en la página actual:", pageData);
    
//     container.innerHTML = ""; // Limpiar el contenedor antes de renderizar los trabajos de la página actual
//   // D. Renderizar los trabajos en el contenedor
//   pageData.length === 0
//     ? (container.innerHTML = "<p>No hay trabajos para mostrar.</p>")
//     : pageData.forEach((card) => {
//         container.appendChild(card);
//       });

//   const totalPages = Math.ceil(sortedData.length / itemsPerPage);
//   document.querySelector("#pageInfo").innerHTML =
//     `Página ${currentPage} de ${totalPages}`;

//   document.querySelector("#btnPrev").disabled = currentPage === 1;
//   document.querySelector("#btnNext").disabled = currentPage === totalPages;
// }

// // // function for the select element to update the orderBy variable and call the sortJobs function
// // function sortJobs(orderBy) {
// //   const jobCards = document.querySelectorAll(".job-listing-card");

// //   const sortedData = [...jobCards].sort((a, b) => {
// //     const titleA = a.dataset.titulo.toUpperCase();
// //     const titleB = b.dataset.titulo.toUpperCase();
// //     return orderBy === "asc"
// //       ? titleA.localeCompare(titleB)
// //       : titleB.localeCompare(titleA);
// //   });

// //   console.log("Trabajos ordenados por título:", sortedData.map((card) => card.dataset.titulo));
// //   return sortedData;

// //   // for (let i = 0; i < sortedData.length; i++) {
// //   //     console.log(`${i + 1}.`, sortedData[i].dataset.titulo);
// //   // }
// //   // container.innerHTML = '';

// //   // sortedData.forEach(card => {
// //   //     container.appendChild(card);
// //   // });
// // }

// // 4. FUNCIONES DE CONTROL
// //botones de paginación
// const btnPrev = document.querySelector("#btnPrev");
// const btnNext = document.querySelector("#btnNext");
// btnPrev.addEventListener("click", () => changePage(-1));
// btnNext.addEventListener("click", () => changePage(1));



// function changePage(direction) {
//   const jobCards = document.querySelectorAll(".job-listing-card");
//   const totalPages = Math.ceil(jobCards.length / itemsPerPage);
//   const newPage = currentPage + direction;
//     if (newPage >= 1 && newPage <= totalPages) {
//     currentPage = newPage;
//     render();
//   }
// }

// const limitSelect = document.querySelector("#limitSelect");
// limitSelect.addEventListener("change", () => {
//     itemsPerPage = parseInt(limitSelect.value);
//     console.log("Nuevo límite de resultados por página:", itemsPerPage);
//     currentPage = 1; // Volver a la página 1 al cambiar el límite
//     render();
// });

// sortSelect.addEventListener('change', () => {
//     // const orderBy = sortSelect.value;
//     // sortJobs(orderBy);
//     render();
// });

// render();






















//--------------------
// Variables globales
let allJobCards = [];           // se llenará después
let currentPage = 1;
let itemsPerPage = 3;

const container = document.querySelector(".jobs-listings");
const sortSelect = document.querySelector("#sortSelect");
const limitSelect = document.querySelector("#limitSelect");

// ── Función render (igual que antes, pero usa allJobCards) ───────
function render() {
    if (allJobCards.length === 0) {
        container.innerHTML = "<p>Cargando empleos...</p>";
        return;
    }

    const sortOrder = sortSelect.value;

    const sortedData = [...allJobCards].sort((a, b) => {
        const titleA = a.dataset.titulo?.toUpperCase() || "";
        const titleB = b.dataset.titulo?.toUpperCase() || "";
        return sortOrder === "asc"
            ? titleA.localeCompare(titleB)
            : titleB.localeCompare(titleA);
    });

    const start = (currentPage - 1) * itemsPerPage;
    const pageData = sortedData.slice(start, start + itemsPerPage);

    container.innerHTML = "";

    if (pageData.length === 0) {
        container.innerHTML = "<p>No hay trabajos para mostrar.</p>";
    } else {
        pageData.forEach(card => container.appendChild(card));
    }

    const totalPages = Math.ceil(allJobCards.length / itemsPerPage);
    document.querySelector("#pageInfo").textContent = 
        `Página ${currentPage} de ${totalPages || 1}`;

    document.querySelector("#btnPrev").disabled = currentPage <= 1;
    document.querySelector("#btnNext").disabled = currentPage >= totalPages;
}

// ── Eventos (igual que antes) ─────────────────────────────────────
document.querySelector("#btnPrev")?.addEventListener("click", () => changePage(-1));
document.querySelector("#btnNext")?.addEventListener("click", () => changePage(1));

function changePage(dir) {
    const total = Math.ceil(allJobCards.length / itemsPerPage);
    const next = currentPage + dir;
    if (next >= 1 && next <= total) {
        currentPage = next;
        render();
    }
}

sortSelect?.addEventListener("change", render);
limitSelect?.addEventListener("change", (e) => {
    itemsPerPage = parseInt(e.target.value) || 3;
    currentPage = 1;
    render();
});

// ── Importante: capturar tarjetas DESPUÉS de crearlas ──────────────
function initPagination() {
    const cards = document.querySelectorAll(".job-listing-card");
    allJobCards = Array.from(cards);           // ← aquí se captura
    render();                                  // primera renderización real
}

// Ejemplo: cuándo llamar a initPagination()

// Opción 2 – Si no controlas cuándo se crean (MutationObserver)
const observer = new MutationObserver((mutations) => {
    if (document.querySelector(".job-listing-card")) {
        initPagination();
        observer.disconnect();           // solo una vez
    }
});

observer.observe(container, { childList: true, subtree: true });

// Opción 3 – Si las tarjetas se crean con un evento custom
document.addEventListener("jobsLoaded", initPagination);

// Opción 4 – Polling (menos recomendado, pero simple)
let attempts = 0;
const interval = setInterval(() => {
    if (document.querySelector(".job-listing-card") || attempts > 30) {
        initPagination();
        clearInterval(interval);
    }
    attempts++;
}, 400);