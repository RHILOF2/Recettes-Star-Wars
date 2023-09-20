import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaUser } from 'react-icons/fa';
import { AiFillSliders, AiOutlineHeart, AiTwotoneHeart, AiOutlineCloseCircle } from 'react-icons/ai'; // Importez également AiTwotoneHeart
import { BiColor, BiTimer } from 'react-icons/bi';
import '../assets/Details.css';



function Details() {
  const { id } = useParams(); // Obtenez l'ID de la recette à partir de l'URL
  const [recette, setRecette] = useState(null);
  const [liked, setLiked] = useState({});


  useEffect(() => {
    axios
      .get(`http://localhost:9000/api/recipe/${id}`)
      .then((response) => {
        setRecette(response.data);
      })
      .catch((error) => {
        console.error('Une erreur s\'est produite lors de la récupération des détails de la recette :', error);
      });
  }, [id]);

  if (!recette) {
    return <p>Chargement en cours...</p>;
  }

  const toggleLike = (recetteId) => {
    setLiked((prevLiked) => ({
      ...prevLiked,
      [recetteId]: !prevLiked[recetteId],
    }));
  };

  return (
    <>
      <h1>Votre recette : {recette.titre}</h1>
      <div className='container'>
        <div className="img-info">
          <img src={recette.photo} />
          <div className="btns2">
            <button className='original-button-2 green'>Modifier</button>
            <button className='original-button-2 red'>Supprimer</button>

            <ul className='ul'>
              <p className='li haut'><AiFillSliders style={{ fontSize: '20px' }} /><br/>   {recette.niveau}</p>
              <p className='li haut'><FaUser style={{ fontSize: '20px' }} /><br/>   {recette.personnes}</p>
              <p className='li bas'><BiTimer style={{ fontSize: '30px' }} /><br/>   {recette.tempsPreparation}</p>
              <p className='li bas'>{liked[recette.id] ? (
                <AiTwotoneHeart style={{ fontSize: '30px', cursor: 'pointer' }} onClick={() => toggleLike(recette.id)}/>
              ) : (
                <AiOutlineHeart style={{ fontSize: '30px', cursor: 'pointer' }} onClick={() => toggleLike(recette.id)}/>
              )}<br />Favoris</p>
            </ul>
          </div>
        </div>
        <div className="ingredients">
          <h2 className='h2'>Ingrédients :</h2>
          <ul className='ul2'>
            {recette.ingredients.map((ingredient, index) => (
              <li className='fefe' key={index}>{ingredient[0]} {ingredient[1]}</li>
            ))}
          </ul>
        </div>  
        <div className="etape">
          <h2 className='h2'>Étapes :</h2>
          <ul className='ul3'>
            {recette.etapes.map((etape, index) => (
              <p className='fe' key={index}> - {etape}</p>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}


export default Details;
