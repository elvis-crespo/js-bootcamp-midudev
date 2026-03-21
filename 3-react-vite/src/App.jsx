import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import InputSearch from "./components/InputSearch";
import JobList from "./components/JobList";
import Pagination from "./components/Pagination";
import jobsData from "./data.json";

const RESULTS_PER_PAGE = 3;

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(jobsData.length / RESULTS_PER_PAGE);

  const pagedResults = jobsData.slice(
    (currentPage - 1) * RESULTS_PER_PAGE, // Índice de inicio pag 1 -> 0, pag 2 -> 5, pag 3 -> 10
    currentPage * RESULTS_PER_PAGE, // Índice de fin pag 1 -> 5, pag 2 -> 10, pag 3 -> 15
  )

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  return (
    <>
      <Header />

      <main>
        <section className="jobs-search">
          <h1>Encuentra tu próximo trabajo</h1>
          <p>Explora miles de oportunidades laborales en todo el mundo</p>

          <InputSearch />
        </section>

        {/* <div className="controls">
          <div>
            <label>Resultados por página:</label>
            <select id="limitSelect">
              <option value="3" selected>
                3 Resultados
              </option>
              <option value="5">5 Resultados</option>
              <option value="10">10 Resultados</option>
            </select>
          </div>

          <div>
            <label>Ordenar por Nombre: </label>
            <select id="sortSelect">
              <option value="asc">A - Z</option>
              <option value="desc">Z - A</option>
            </select>
          </div>
        </div> */}

        <JobList jobs={pagedResults} />
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      </main>

      <Footer />
    </>
  );
}

export default App;