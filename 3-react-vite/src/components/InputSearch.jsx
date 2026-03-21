const InputSearch = () => {
  return (
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
  );
};

export default InputSearch;
