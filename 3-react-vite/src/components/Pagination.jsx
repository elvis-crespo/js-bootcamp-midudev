import styles from "./Pagination.module.css";

const Pagination = ({ currentPage = 1, totalPages = 10, onPageChange }) => {
  // Generar un array de números de página basado en el total de páginas
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;

  const stylePrevButton = isFirstPage
    ? { pointerEvents: "none", opacity: 0.5 }
    : {};
  const styleNextButton = isLastPage
    ? { pointerEvents: "none", opacity: 0.5 }
    : {};

  const handlePrevClick = (e) => {
    e.preventDefault();
    if (!isFirstPage) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextClick = (e) => {
    e.preventDefault();
    if (!isLastPage) {
      onPageChange(currentPage + 1);
    }
  };

  // si el usuario hace click en un número de página, cambiar a esa página
  // const handleChangePage = (e, page) => {
  const handleChangePage = (e) => {
    e.preventDefault();
    const page = Number(e.target.dataset.page);
    if (page !== currentPage) {
      onPageChange(page);
    }
  };

  return (
    <nav className={styles.pagination}>
      {/* {!isFirstPage && (
        <a href="#" style={stylePrevButton} onClick={handlePrevClick}>
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
      )} */}
      <a href="#" style={stylePrevButton} onClick={handlePrevClick}>
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
      {/* <a className="is-active" href="#">
        1
      </a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">5</a> */}
      {pages.map((page) => (
        <a
          data-page={page}
          href="#"
          className={currentPage === page ? styles.isActive : ""}
          // onClick={(e) => handleChangePage(e, page)}
          onClick={handleChangePage}
          key={page}
        >
          {page}
        </a>
      ))}

      {!isLastPage && (
        <a href="#" style={styleNextButton} onClick={handleNextClick}>
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
      )}
    </nav>
  );
};

export default Pagination;
