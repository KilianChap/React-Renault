import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://akneubjvrghlnzikyknr.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFrbmV1Ymp2cmdobG56aWt5a25yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY4ODcwNDcsImV4cCI6MjAyMjQ2MzA0N30.xIS9hDPUUe-_AAC4jRt4ajXhjKWriMZCae1TU0uX70U");

function Cars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    getCars();
  }, []);

  async function getCars() {
    const { data } = await supabase.from("voitures").select();
    setCars(data);
  }

  return (
    <div className="d-flex flex-wrap container">
      
        {cars.map((car) => (
          <div key={car.id} className="col-md-4 mb-4 p-3">
            <div className="card">
              <img src={car.image} id="imgcardvoiture" className="card-img-top" alt={car.nom} />
              <div className="card-body">
                <h5 className="card-title">{car.nom}</h5>
                <p className="card-text">Année : {car.annee}</p>
              </div>
            </div>
          </div>
       
      ))}
      
    </div>
  );
}

export default Cars;