import '../assets/Navigation.css';
import React from 'react';

function Navigation() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <a href='http://localhost:5173/'>Re'StarsWars</a>
        </div>

        <div className="search">
            <div className="wrap">
              <div className="search">
                <input type="text" className="searchTerm" placeholder="Quelle est ta recette préférée ?" />
                <button type="submit" className="searchButton">
                  <span className='trait1'></span>
                  
                  <span className='trait2'>GO !</span>
                </button>
              </div>
            </div>
        </div>
      <div className="liens">
        <a className='lien'>0 Favoris</a>
        <div className="sepa"></div>
        <a className='lien'>Ajouter ma recette</a>
      </div>
        
      </div>
    </>
  )
}

export default Navigation;