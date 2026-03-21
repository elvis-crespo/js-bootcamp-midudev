// import data from '../data.json';
// console.log(data);
const JobCard = ({ job, isApplied, onApply }) => {
  const text = isApplied ? "Aplicado" : "Aplicar";
  const buttonClass = isApplied ? "is-applied" : "";

  return (
    <article
      className="job-listing-card"
      data-modalidad={job.data.modalidad}
      data-nivel={job.data.nivel}
      data-technology={job.data.technology}
    >
      <div>
        <h3>{job.titulo}</h3>
        <p>
          {job.empresa} - {job.ubicacion}
        </p>
        <p>{job.descripcion}</p>
      </div>

      <button
        className={`button-apply-job ${buttonClass}`}
        onClick={() => onApply(job.id)}
      >
        {text}
      </button>
    </article>
  );
};

export default JobCard;
