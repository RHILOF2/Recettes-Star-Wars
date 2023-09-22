import '../assets/Navigation.css';
import React from 'react';

function Navigation() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <a href='http://localhost:5173/' className='a'>Re'StarsWars</a>
        </div>

        <div className="search">
          <div className="search">
            <select name="" id="" className='filtre'>
              <option value="ml">Niveau : Padawan</option>
              <option value="ml">Niveau : Jedi</option>
              <option value="ml">Niveau : Maitre</option>
              <option value="ml">Entre 1 et 10 personnes</option>
              <option value="ml">Entre 10 et 15 personnes</option>
              <option value="ml">Entre 5 à 10 min</option>
              <option value="ml">Entre 10 à 40 min</option>
            </select>
            <input type="text" className="searchTerm" placeholder="Quelle est ta recette préférée ?" />
          </div>
        </div>
      <div className="liens">
        <a className='lien' href={`/favoris/`}>Mes favoris</a>
        <div className="sepa"></div>
        <a className='lien' href={`/add/`}>Ajouter ma recette</a>
      </div>
        
      </div>
    </>
  )
}

export default Navigation;