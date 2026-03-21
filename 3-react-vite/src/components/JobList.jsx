import { useState } from "react";
import JobCard from "./JobCard";

const JobList = ({jobs}) => {
  const [appliedJobs, setAppliedJobs] = useState([]);

  function handleApply(id) {
    // Si el trabajo ya está aplicado, lo quitamos de la lista, si no, lo añadimos
    setAppliedJobs((prev) =>
      prev.includes(id) ? prev.filter((jobId) => jobId !== id) : [...prev, id],
    );
    console.log(appliedJobs);
  }

  return (
    <div className="jobs-listings">
      {jobs.map(job => (
        <JobCard 
          key={job.id}
          job={job}
          isApplied={appliedJobs.includes(job.id)}
          onApply={handleApply}
        />
      ))}
    </div>
  );
};

export default JobList;

// prev significa previous state.
// setAppliedJobs(prev => ...)
// React te pasa automáticamente el valor actual del estado para trabajar con él.

// Ejemplo:
// Estado actual:
// appliedJobs = ["1","5"]
// Entonces:
// prev = ["1","5"]
// Con ese `prev` decides:
// si el id ya existe → lo quitas
// si no existe → lo agregas

// Ejemplo:

// setAppliedJobs(prev =>
// prev.includes(id)
// ? prev.filter(jobId => jobId !== id)
// : [...prev, id]
// );

// Resumen corto:

// prev = estado anterior
// includes() = revisa si ya existe
// filter() = elimina
// [...prev, id] = agrega sin modificar el array original

// Regla en React: nunca modificar el estado directamente, siempre crear un nuevo estado.
