import { useState, useEffect } from 'react';
import React from 'react'
import axios from 'axios';
import '../assets/Liste.css';
import { FaUser } from 'react-icons/fa';
import { AiFillSliders } from 'react-icons/ai';
import { BiTimer } from 'react-icons/bi';

function Liste() {

  const [recettes, setRecettes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9000/api/recipes')
      .then((response) => {
        setRecettes(response.data);
      })
      .catch((error) => {
        console.error('Une erreur s\'est produite lors de la récupération des données de l\'API :', error);
      });
  }, []);
  
  return (
    <>
    <h1>Les petites recettes à la Star Wars</h1>
    <div className="container-card">

      {recettes.map((recette) => (

        <div className="card" key={recette.id}>
          <img src={recette.photo} />
          <h2>{recette.titre}</h2>
          <ul>
            <li><AiFillSliders style={{ fontSize: '48px' }}/><br/> {recette.niveau}</li>
            <li><FaUser style={{ fontSize: '48px' }}/><br/>  {recette.personnes}</li>
            <li><BiTimer style={{ fontSize: '100px' }}/><br/>{recette.tempsPreparation}</li>
          </ul>
          <div className="btns">
            <button></button>
            <button></button>
            <button></button>
          </div>
        </div>

      ))}
    </div>
    </>    
  )
}

export default Liste;