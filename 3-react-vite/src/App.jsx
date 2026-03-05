// import "./index.css";

function App() {
  return (
    <>
      <header>
        <h2>Logo</h2>
        <nav>
          <a href="">Inicio</a>
          <a href="">Empleos</a>
        </nav>

        {/* <div style="display: flex; gap: 10px; align-items: center"> */}
        {/* <devjobs-avatar
              service="github"
              username="elvis-crespo"
              size="40"
              title="El camino así es"
            ></devjobs-avatar>
            <devjobs-avatar
              service="x"
              username=""
              size="40"
              title="El camino así es"
            ></devjobs-avatar>
            <devjobs-avatar
              service="google"
              username="google.com"
              size="40"
              title="El camino así es"
            ></devjobs-avatar> */}
        {/* </div> */}
      </header>

      <main>
        <section className="jobs-search">
          <h1>Encuentra tu próximo trabajo</h1>
          <p>Explora miles de oportunidades laborales en todo el mundo</p>

          <form id="job-search-form" role="search">
            <div className="search-bar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-search"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
                <path d="M21 21l-6 -6" />
              </svg>
              <input
                id="job-search-input"
                type="text"
                placeholder="Buscar trabajos, empresas o habilidades"
              />
            </div>

            <div className="search-filters">
              <select name="technology" id="filter-technology">
                <option value="">Tecnología</option>

                <optgroup label="Tecnologías populares">
                  <option value="javascript">JavaScript</option>
                  <option value="python">Python</option>
                  <option value="java">Java</option>
                </optgroup>
                <hr />
                <optgroup label="Frontend">
                  <option value="react">React</option>
                </optgroup>
                <hr />
                <optgroup label="Backend">
                  <option value="nodejs">Node.js</option>
                </optgroup>
                <hr />
                <option value="mobile">Mobile</option>
              </select>

              <select name="location" id="filter-location">
                <option value="">Ubicación</option>
                <option value="remoto">Remoto</option>
                <option value="cdmx">Ciudad de México</option>
                <option value="guadalajara">Guadalajara</option>
                <option value="monterrey">Monterrey</option>
                <option value="barcelona">Barcelona</option>
              </select>

              <select name="experience-level" id="filter-experience-level">
                <option value="">Nivel de experiencia</option>
                <option value="junior">Junior</option>
                <option value="mid-level">Mid-Level</option>
                <option value="senior">Senior</option>
                <option value="lead">Lead</option>
              </select>

              <span id="filter-selected-value"></span>
              <span id="filter-selected-value-experience-level"></span>
              <span id="filter-selected-value-technology"></span>
            </div>
          </form>
        </section>

        <div className="controls">
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
        </div>

        <div className="jobs-listings">
          {/* Aquí se cargaran las ofertas de trabajo */}
        </div>

        <nav className="pagination">
          <a href="#">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M15 6l-6 6l6 6" />
            </svg>
          </a>
          <a className="is-active" href="#">
            1
          </a>
          <a href="#">2</a>
          <a href="#">3</a>
          <a href="#">4</a>
          <a href="#">5</a>
          <a href="#">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-right"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 6l6 6l-6 6" />
            </svg>
          </a>
        </nav>
      </main>

      <footer>
        <small>&copy; 2025 JobFinder. Todos los derechos reservados.</small>
      </footer>
    </>
  );
}

export default App;
