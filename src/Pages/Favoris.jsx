import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import '../assets/Liste.css';
import '../assets/Buttons.css';
import { FaUser } from 'react-icons/fa';
import { AiFillSliders, AiOutlineHeart, AiTwotoneHeart, AiOutlineCloseCircle } from 'react-icons/ai';
import { BiTimer } from 'react-icons/bi';

function Favoris() {
  const [recettes, setRecettes] = useState([]);
  const [liked, setLiked] = useState({});

  useEffect(() => {
    axios
      .get('http://localhost:9000/api/recipes')
      .then((response) => {
        setRecettes(response.data);
      })
      .catch((error) => {
        console.error('Une erreur s\'est produite lors de la récupération des données de l\'API :', error);
      });
  }, []);

  const toggleLike = (recetteId) => {
    setLiked((prevLiked) => ({
      ...prevLiked,
      [recetteId]: !prevLiked[recetteId],
    }));
  };

  // Filtrer les recettes en fonction de celles qui sont en favoris
  const recettesFavoris = recettes.filter((recette) => liked[recette.id]);

  return (
    <>
      <h1>Vos recettes favoris</h1>
      <div className="container-card">
        {recettesFavoris.map((recette) => (
          <div className="card" key={recette.id}>
            <div className="modif-titre">
              <h2><a href={`/recipe/${recette.id}`}>{recette.title}</a></h2>
              {liked[recette.id] ? (
                <AiTwotoneHeart
                  style={{ fontSize: '30px', cursor: 'pointer' }}
                  onClick={() => toggleLike(recette.id)}
                />
              ) : (
                <AiOutlineHeart
                  style={{ fontSize: '30px', cursor: 'pointer' }}
                  onClick={() => toggleLike(recette.id)}
                />
              )}              
            </div>
            <ul>
              <li><AiFillSliders style={{ fontSize: '48px' }} /><br/> {recette.niveau}</li>
              <li><FaUser style={{ fontSize: '48px' }} /><br/> {recette.personnes}</li>
              <li><BiTimer style={{ fontSize: '100px' }} /><br/> {recette.tempsPreparation}</li>
            </ul>
            <div className="btns">
              <button className='original-button'>Modifier</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Favoris;
