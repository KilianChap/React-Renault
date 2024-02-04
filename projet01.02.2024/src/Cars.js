import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://akneubjvrghlnzikyknr.supabase.co", "clé");

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
