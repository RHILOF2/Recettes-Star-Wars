import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';
import '../assets/Liste.css';
import '../assets/Buttons.css';
import { FaUser } from 'react-icons/fa';
import { AiFillSliders, AiOutlineHeart, AiTwotoneHeart, AiOutlineCloseCircle } from 'react-icons/ai'; // Importez également AiTwotoneHeart
import { BiTimer } from 'react-icons/bi';

function Liste() {
  const [recettes, setRecettes] = useState([]);
  const [liked, setLiked] = useState({});
  const localStorageKey = 'recettesFavorites'; // Clé pour le localStorage

  useEffect(() => {
    axios
      .get('http://localhost:9000/api/recipes')
      .then((response) => {
        setRecettes(response.data);
      })
      .catch((error) => {
        console.error('Une erreur s\'est produite lors de la récupération des données de l\'API :', error);
      });


    // Récupérer les recettes favorites depuis le localStorage lors du chargement initial
    const savedFavorites = JSON.parse(localStorage.getItem(localStorageKey)) || {};
    setLiked(savedFavorites);
  }, []);



  const toggleLike = (recetteId) => {
    // Copiez l'état actuel des recettes favorites
    const newLiked = { ...liked };

    // Inversez la valeur du bouton favoris pour la recette donnée
    newLiked[recetteId] = !newLiked[recetteId];

    // Mettez à jour l'état des recettes favorites
    setLiked(newLiked);

    // Enregistrez les recettes favorites dans le localStorage
    localStorage.setItem(localStorageKey, JSON.stringify(newLiked));
  };

  return (
    <>
      <h1>Les petites recettes à la Star Wars</h1>
      <div className="container-card">
        {recettes.map((recette) => (
          <div className="card" key={recette.id}>
            <img src={recette.photo} className='img'/>
            <AiOutlineCloseCircle style={{ fontSize: '30px', cursor: 'pointer'  }} className='suppr'/>
            <div className="modif-titre">
              <h2><a href={`/recipe/${recette.id}`}>{recette.titre}</a></h2>
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

            <ul className='vraiul'>
              <li className='vraili'><AiFillSliders style={{ fontSize: '48px' }} /><br/> {recette.niveau}</li>
              <li className='vraili'><FaUser style={{ fontSize: '48px' }} /><br/> {recette.personnes}</li>
              <li className='vraili'><BiTimer style={{ fontSize: '100px' }} /><br/> {recette.tempsPreparation}</li>
            </ul>
            <div className="btns">
              <button className='original-button'><a href={`/recipe/edit/${recette.id}`} className='modif-a'>Modifier</a></button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Liste;
