import React from 'react';
import '../assets/AjoutRecette.css'
import RecipeForm from '../Components/RecipeForm';

function ModifRecette() {
  return (
    <div className='container'>
      <h1>Modifier cette recette</h1>

      <RecipeForm />
      
    </div>
  )
}

export default ModifRecette;