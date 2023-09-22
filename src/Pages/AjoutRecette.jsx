import React, { useState } from 'react';
import '../assets/AjoutRecette.css'
import RecipeForm from '../Components/RecipeForm';

function AjoutRecette() {
  
  return (
    <div className='container'>
      <h1>Ajouter une nouvelle recette</h1>

      <RecipeForm />
      
    </div>
  );
}

export default AjoutRecette;
