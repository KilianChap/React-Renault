import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './voitures.json';

const CarteVoiture = ({ id, nom, annee, image }) => (
  <div key={id} className="col-md-4 mb-4">
    <div className="card">
      <img src={image} id="imgcardvoiture" className="card-img-top" alt={nom} />
      <div className="card-body">
        <h5 className="card-title">{nom}</h5>
        <p className="card-text">Année : {annee}</p>
      </div>
    </div>
  </div>
);

const VoitureListe = () => (
  <div className="container mt-5">
    <div className="row">
      {data.voitures.map(voiture => (
        <CarteVoiture key={voiture.id} nom={voiture.nom} annee={voiture.annee} image={voiture.image} />
      ))}
    </div>
  </div>
);

export default VoitureListe;
